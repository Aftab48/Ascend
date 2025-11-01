type GlowProps = {
  top: string;
  left?: string;
  right?: string;
  width?: string;
  height?: string;
};

export function Glow({ top, left, right, width, height }: GlowProps) {
  return (
    <div
      className="absolute rounded-full"
      style={{
        width: width || "358px",
        height: height || "300px",
        top,
        left,
        right,
        backgroundColor: "#1fe5ff91",
        filter: "blur(300px)",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}

export default Glow;
