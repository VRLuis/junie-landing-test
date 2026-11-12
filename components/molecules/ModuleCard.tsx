export default function ModuleCard({ title, hours, description }: { title: string; hours: number; description: string }) {
    return (
        <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6 transition-colors hover:border-zinc-700">
            <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-zinc-100">
                    {title}
                </h3>
                <span className="text-sm font-mono text-[#39ff14]">
                    {hours}h
                </span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
                {description}
            </p>
        </div>
    );
}
