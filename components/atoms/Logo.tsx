export default function Logo({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 60"
            fill="none"
            className={className}
            role="img"
            aria-label="AI & Big Data logo"
        >
            <g transform="translate(8, 8)">
                <line x1="18" y1="6" x2="30" y2="18" stroke="currentColor" stroke-width="1.5" opacity="0.4" />
                <line x1="18" y1="6" x2="18" y2="22" stroke="currentColor" stroke-width="1.5" opacity="0.4" />
                <line x1="30" y1="18" x2="42" y2="10" stroke="currentColor" stroke-width="1.5" opacity="0.4" />
                <line x1="30" y1="18" x2="18" y2="22" stroke="currentColor" stroke-width="1.5" opacity="0.4" />
                <line x1="42" y1="10" x2="42" y2="22" stroke="currentColor" stroke-width="1.5" opacity="0.4" />
                <line x1="18" y1="22" x2="42" y2="22" stroke="currentColor" stroke-width="1.5" opacity="0.4" />
                <line x1="30" y1="18" x2="30" y2="30" stroke="currentColor" stroke-width="1.5" opacity="0.4" />
                <line x1="42" y1="22" x2="30" y2="30" stroke="currentColor" stroke-width="1.5" opacity="0.4" />
                <line x1="18" y1="22" x2="30" y2="30" stroke="currentColor" stroke-width="1.5" opacity="0.4" />
                <circle cx="18" cy="6" r="3" fill="currentColor" opacity="0.9" />
                <circle cx="30" cy="18" r="3.5" fill="currentColor" opacity="1" />
                <circle cx="42" cy="10" r="3" fill="currentColor" opacity="0.9" />
                <circle cx="18" cy="22" r="3" fill="currentColor" opacity="0.9" />
                <circle cx="42" cy="22" r="3" fill="currentColor" opacity="0.9" />
                <circle cx="30" cy="30" r="2.5" fill="currentColor" opacity="0.7" />
            </g>
            <text x="60" y="38" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="700" fill="currentColor">AI</text>
            <text x="88" y="34" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="400" fill="currentColor" opacity="0.5">&amp;</text>
            <text x="106" y="38" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="700" fill="currentColor">BD</text>
        </svg>
    );
}
