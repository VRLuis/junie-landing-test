import Logo from "@/components/atoms/Logo";

export default function Home() {
    return (
        <div className="flex flex-col flex-1 bg-zinc-900 text-white">
            <main className="flex flex-1 w-full max-w-4xl mx-auto flex-col items-center py-32 px-8">
                <div className="flex flex-col items-center gap-6 text-center">
                    <div className="rounded-xl bg-white p-4">
                        <Logo className="h-12 w-auto text-zinc-900" />
                    </div>
                    <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                        AI & Big Data
                    </h1>
                    <p className="max-w-xl text-lg text-zinc-400">
                        Welcome to my personal landing page. I am studying Artificial
                        Intelligence and Big Data at{" "}
                        <strong className="text-[#39ff14]">
                            IES Portada Alta
                        </strong>{" "}
                        in Málaga, Spain.
                    </p>
                </div>
            </main>
        </div>
    );
}
