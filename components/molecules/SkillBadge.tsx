export default function SkillBadge({ label }: { label: string }) {
    return (
        <span className="rounded-full border border-zinc-700 bg-zinc-950 px-4 py-2 text-sm text-zinc-300 transition-colors hover:border-[#39ff14] hover:text-[#39ff14]">
            {label}
        </span>
    );
}
