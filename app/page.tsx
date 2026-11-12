import Logo from "@/components/atoms/Logo";

export default function Home() {
    return (
        <div className="flex flex-col flex-1">
            <main className="flex flex-1 w-full max-w-4xl mx-auto flex-col items-center py-32 px-8">
                <div className="flex flex-col items-center gap-6 text-center">
                    <Logo className="h-12 w-auto" />
                    <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                        AI & Big Data
                    </h1>
                    <p className="max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
                        Welcome to my personal landing page. I am studying Artificial
                        Intelligence and Big Data at{" "}
                        <strong className="text-zinc-900 dark:text-zinc-50">
                            IES Portada Alta
                        </strong>{" "}
                        in Málaga, Spain.
                    </p>
                </div>
            </main>
        </div>
    );
}
