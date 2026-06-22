import React, { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Ghost Taskbar ── */
export const GhostTaskbar = ({ closed, onRestore }) => {
  if (!closed.length) return null;
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {closed.map(({ id, title }) => (
        <motion.div
          key={id}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          className="win-ghost-pill"
        >
          <div className="win-dots">
            <span className="win-dot win-dot-close opacity-30" />
            <span className="win-dot win-dot-min opacity-30" />
            <span className="win-dot win-dot-max opacity-30" />
          </div>
          <span className="win-ghost-title mono-font text-xs text-[var(--text-muted)] truncate max-w-[160px]">{title}</span>
          <button
            onClick={() => onRestore(id)}
            className="win-ghost-restore mono-font text-[10px] text-[var(--accent)] border border-[var(--accent)] px-2 py-0.5 rounded hover:text-[var(--teal)] hover:border-[var(--teal)] transition-colors flex-shrink-0"
          >restore</button>
        </motion.div>
      ))}
    </div>
  );
};

/* ── Floating Window (fixed layer, free drag) ── */
const FloatingWin = ({ id, title, children, modalContent, onClose, onTile }) => {
  const [pos, setPos] = useState({ x: window.innerWidth / 2 - 250, y: 120 });
  const [size] = useState({ w: 500, h: "auto" });
  const [minimized, setMinimized] = useState(false);
  const [maximized, setMaximized] = useState(false);
  const drag = useRef({ on: false, sx: 0, sy: 0, ox: 0, oy: 0 });

  const startDrag = (e) => {
    e.preventDefault();
    drag.current = { on: true, sx: e.clientX, sy: e.clientY, ox: pos.x, oy: pos.y };
    const move = (ev) => {
      if (!drag.current.on) return;
      setPos({ x: drag.current.ox + ev.clientX - drag.current.sx, y: drag.current.oy + ev.clientY - drag.current.sy });
    };
    const up = () => { drag.current.on = false; window.removeEventListener("mousemove", move); window.removeEventListener("mouseup", up); };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
  };

  if (maximized) return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-8" style={{ background: "rgba(24,25,38,0.92)", backdropFilter: "blur(12px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) setMaximized(false); }}>
      <div className="win-chrome w-full max-w-5xl max-h-[90vh] flex flex-col" style={{ overflow: "hidden" }}>
        <div className="win-titlebar">
          <div className="win-dots">
            <button className="win-dot win-dot-close" onClick={() => { setMaximized(false); onClose(); }}><span className="win-dot-icon">×</span></button>
            <button className="win-dot win-dot-min" onClick={() => setMaximized(false)}><span className="win-dot-icon">−</span></button>
            <button className="win-dot win-dot-max" onClick={() => setMaximized(false)}><span className="win-dot-icon">⊡</span></button>
          </div>
          <span className="win-title">{title}</span>
          <div style={{ width: 60 }} />
        </div>
        <div className="overflow-y-auto flex-1 p-6">{modalContent || children}</div>
      </div>
    </div>
  );

  return (
    <div className="win-chrome win-floating" style={{ position: "fixed", left: pos.x, top: pos.y, width: size.w, zIndex: 150 }}>
      <div className="win-titlebar cursor-grab active:cursor-grabbing" onMouseDown={startDrag}>
        <div className="win-dots">
          <button className="win-dot win-dot-close" onClick={onClose}><span className="win-dot-icon">×</span></button>
          <button className="win-dot win-dot-min" onClick={() => setMinimized(m => !m)}><span className="win-dot-icon">−</span></button>
          <button className="win-dot win-dot-max" onClick={() => setMaximized(true)}><span className="win-dot-icon">+</span></button>
        </div>
        <span className="win-title">{title}</span>
        <button onClick={onTile} title="Tile" className="mono-font text-[9px] text-[var(--text-muted)] hover:text-[var(--accent)] px-1 transition-colors flex-shrink-0">tile</button>
      </div>
      <motion.div animate={{ height: minimized ? 0 : "auto", opacity: minimized ? 0 : 1 }} transition={{ duration: 0.2 }} style={{ overflow: "hidden" }}>
        {children}
      </motion.div>
    </div>
  );
};

/* ── WindowChrome (tiled mode) ── */
export const WindowChrome = ({ id, title, children, className = "", modalContent = null, onClose, onFloat }) => {
  const [minimized, setMinimized] = useState(false);
  const [maximized, setMaximized] = useState(false);
  const dragState = useRef({ on: false, moved: false, sx: 0, sy: 0 });

  const titlebarDown = (e) => {
    dragState.current = { on: true, moved: false, sx: e.clientX, sy: e.clientY };
    const move = (ev) => {
      if (!dragState.current.on) return;
      if (Math.abs(ev.clientX - dragState.current.sx) > 6 || Math.abs(ev.clientY - dragState.current.sy) > 6) {
        dragState.current.moved = true;
        dragState.current.on = false;
        window.removeEventListener("mousemove", move);
        window.removeEventListener("mouseup", up);
        onFloat && onFloat();
      }
    };
    const up = () => { dragState.current.on = false; window.removeEventListener("mousemove", move); window.removeEventListener("mouseup", up); };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
  };

  if (maximized) return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-8" style={{ background: "rgba(24,25,38,0.92)", backdropFilter: "blur(12px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) setMaximized(false); }}>
      <div className="win-chrome w-full max-w-5xl max-h-[90vh] flex flex-col" style={{ overflow: "hidden" }}>
        <div className="win-titlebar">
          <div className="win-dots">
            <button className="win-dot win-dot-close" onClick={() => { setMaximized(false); onClose(); }}><span className="win-dot-icon">×</span></button>
            <button className="win-dot win-dot-min" onClick={() => setMaximized(false)}><span className="win-dot-icon">−</span></button>
            <button className="win-dot win-dot-max" onClick={() => setMaximized(false)}><span className="win-dot-icon">⊡</span></button>
          </div>
          <span className="win-title">{title}</span>
          <div style={{ width: 60 }} />
        </div>
        <div className="overflow-y-auto flex-1 p-6">{modalContent || children}</div>
      </div>
    </div>
  );

  return (
    <div className={`win-chrome ${className}`}>
      <div className="win-titlebar cursor-grab" onMouseDown={titlebarDown}>
        <div className="win-dots">
          <button className="win-dot win-dot-close" onClick={onClose}><span className="win-dot-icon">×</span></button>
          <button className="win-dot win-dot-min" onClick={() => setMinimized(m => !m)}><span className="win-dot-icon">−</span></button>
          <button className="win-dot win-dot-max" onClick={() => setMaximized(true)}><span className="win-dot-icon">+</span></button>
        </div>
        <span className="win-title">{title}</span>
        <div style={{ width: 60 }} />
      </div>
      <motion.div animate={{ height: minimized ? 0 : "auto", opacity: minimized ? 0 : 1 }} transition={{ duration: 0.2 }} style={{ overflow: "hidden" }}>
        {children}
      </motion.div>
    </div>
  );
};

/* ── useWorkspace hook ── */
export const useWorkspace = (items) => {
  // state: 'tiled' | 'floating' | 'closed'
  const [states, setStates] = useState(() => Object.fromEntries(items.map(it => [it.id, "tiled"])));

  const close = useCallback((id) => setStates(s => ({ ...s, [id]: "closed" })), []);
  const restore = useCallback((id) => setStates(s => ({ ...s, [id]: "tiled" })), []);
  const float = useCallback((id) => setStates(s => ({ ...s, [id]: "floating" })), []);
  const tile = useCallback((id) => setStates(s => ({ ...s, [id]: "tiled" })), []);

  const tiled = items.filter(it => states[it.id] === "tiled");
  const floating = items.filter(it => states[it.id] === "floating");
  const closed = items.filter(it => states[it.id] === "closed");

  return { states, tiled, floating, closed, close, restore, float, tile };
};

/* ── WorkspaceLayer: renders floating windows in a fixed layer ── */
export const WorkspaceFloatingLayer = ({ floating, renderContent, renderModal, close }) => (
  <>
    <AnimatePresence>
      {floating.map(item => (
        <motion.div key={item.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}>
          <FloatingWin
            id={item.id}
            title={item.title}
            modalContent={renderModal ? renderModal(item) : null}
            onClose={() => close(item.id)}
            onTile={() => {}}
          >
            {renderContent(item)}
          </FloatingWin>
        </motion.div>
      ))}
    </AnimatePresence>
  </>
);
