import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full border-t border-zinc-800 bg-zinc-950 mt-auto">
            <div className="max-w-4xl mx-auto px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-sm font-semibold text-zinc-100 mb-3">
                            Contact
                        </h3>
                        <div className="flex flex-col gap-2 text-sm text-zinc-400">
                            <a
                                href="mailto:luisvillar.dev@gmail.com"
                                className="hover:text-zinc-100 transition-colors"
                            >
                                luisvillar.dev@gmail.com
                            </a>
                            <span>Malaga, Spain</span>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-zinc-100 mb-3">
                            Links
                        </h3>
                        <div className="flex flex-col gap-2 text-sm">
                            <Link
                                href="https://github.com/VRLuis"
                                className="text-zinc-400 hover:text-zinc-100 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/luis-villar-rold%C3%A1n-28826227a/"
                                className="text-zinc-400 hover:text-zinc-100 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </Link>
                            <Link
                                href="https://vrluis.github.io/Portfolio/"
                                className="text-zinc-400 hover:text-zinc-100 transition-colors"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Portfolio
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-zinc-100 mb-3">
                            About
                        </h3>
                        <p className="text-sm text-zinc-400">
                            Studying AI & Big Data at IES Portada Alta, Málaga.
                        </p>
                    </div>
                </div>
                <div className="mt-8 pt-4 border-t border-zinc-800">
                    <p className="text-sm text-zinc-500 font-mono">
                        <TypewriterText />
                    </p>
                </div>
            </div>
        </footer>
    );
}

function TypewriterText() {
    const text = "This landing is made with Junie support :)";
    const words = text.split(" ");

    return (
        <>
            {words.map((word, i) => (
                <span
                    key={i}
                    className="inline-block typewriter-word"
                    style={{ animationDelay: `${i * 0.15}s` }}
                >
                    {word}
                </span>
            ))}
        </>
    );
}
