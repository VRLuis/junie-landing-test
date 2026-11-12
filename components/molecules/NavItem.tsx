export default function NavItem({
    href,
    children,
}: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <a
            href={href}
            className="text-sm font-medium text-zinc-300 transition-colors hover:text-white"
        >
            {children}
        </a>
    );
}
