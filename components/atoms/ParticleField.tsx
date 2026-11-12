const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 4 + 3,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 5,
    glowDuration: Math.random() * 3 + 2,
    glowDelay: Math.random() * 4,
}));

export default function ParticleField() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((p) => (
                <span
                    key={p.id}
                    className="particle absolute rounded-full bg-[#39ff14]"
                    style={{
                        left: p.left,
                        top: p.top,
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        boxShadow: `0 0 ${Math.floor(p.size * 4)}px rgba(57, 255, 20, 0.6)`,
                        animationDuration: `${p.duration}s, ${p.glowDuration}s`,
                        animationDelay: `${p.delay}s, ${p.glowDelay}s`,
                    }}
                />
            ))}
        </div>
    );
}
