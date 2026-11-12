export default function HeroHeader() {
    return (
        <div className="relative w-full overflow-hidden border-b border-[#39ff14]/20 bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(57,255,20,0.08),transparent_70%)]" />
            <div className="relative z-10 flex h-10 items-center justify-center gap-2 text-sm font-medium tracking-widest uppercase text-zinc-500">
                <span className="h-1.5 w-1.5 rounded-full bg-[#39ff14]"></span>
                <span>IA y Big Data</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#39ff14]"></span>
                <span className="text-zinc-700">•</span>
                <span>IES Portada Alta</span>
            </div>
        </div>
    );
}
