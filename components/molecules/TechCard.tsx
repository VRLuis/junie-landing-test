export default function TechCard({ name, category, icon }: { name: string; category: string; icon: string }) {
    return (
        <div className="group rounded-xl border border-zinc-800 bg-zinc-950 p-5 transition-all hover:border-[#39ff14] hover:shadow-[0_0_15px_rgba(57,255,20,0.1)]">
            <div className="flex items-center gap-4">
                <span className="text-2xl" role="img" aria-label={name}>
                    {icon}
                </span>
                <div>
                    <h3 className="text-sm font-semibold text-zinc-100 group-hover:text-[#39ff14] transition-colors">
                        {name}
                    </h3>
                    <span className="text-xs text-zinc-500">{category}</span>
                </div>
            </div>
        </div>
    );
}
