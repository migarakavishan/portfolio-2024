import { useEffect, useRef, useState } from "react";

export default function SmoothCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const targetRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef(null);

  // track mouse
  useEffect(() => {
    const handleMove = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const handleLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, [visible]);

  // smooth follow (simple spring-ish interpolation)
  useEffect(() => {
    const speed = 0.18; // tweak for more/less lag

    const animate = () => {
      setPos((prev) => {
        const dx = targetRef.current.x - prev.x;
        const dy = targetRef.current.y - prev.y;
        return {
          x: prev.x + dx * speed,
          y: prev.y + dy * speed,
        };
      });

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[9999]"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
      }}
    >
      <div className="relative -translate-x-1/2 -translate-y-1/2">
        {/* outer ring */}
        <div className="w-10 h-10 rounded-full border border-white/40 bg-white/10 backdrop-blur-md shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-transform duration-150 ease-out" />
        {/* inner dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-white/80" />
        </div>
      </div>
    </div>
  );
}
