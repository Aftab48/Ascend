
type GlowProps = {
  top: string;
  left?: string;
  right?:string
};

export function Glow({ top, left,right }: GlowProps) {
    return (
          <div className="absolute rounded-full" style={{
                width: '358px',
                height: '300px',
                top,
                left,
                right,
                backgroundColor: '#1FE5FFBF',
                filter: 'blur(200px)',
                pointerEvents: 'none',
                zIndex: 0
            }} />
    )



}

export default Glow
