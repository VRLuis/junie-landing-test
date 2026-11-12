import Logo from "@/components/atoms/Logo";
import ParticleField from "@/components/atoms/ParticleField";
import ScrollReveal from "@/components/atoms/ScrollReveal";
import CourseModules from "@/components/organisms/CourseModules";
import KeySkills from "@/components/organisms/KeySkills";
import TechStack from "@/components/organisms/TechStack";

export default function Home() {
    return (
        <div className="flex flex-col flex-1 bg-zinc-900 text-white">
            <main className="relative flex flex-1 w-full max-w-4xl mx-auto flex-col items-center py-32 px-8 overflow-hidden">
                <ParticleField />
                <div className="relative z-10 flex flex-col items-center gap-6 text-center">
                    <div className="rounded-xl bg-white p-4 fade-in-up">
                        <Logo className="h-12 w-auto text-zinc-900" />
                    </div>
                    <h1 className="fade-in-up fade-in-up-delay-1 text-4xl font-semibold tracking-tight sm:text-5xl">
                        AI & Big Data
                    </h1>
                    <p className="fade-in-up fade-in-up-delay-2 max-w-xl text-lg text-zinc-400">
                        Welcome to my personal landing page. I am studying Artificial
                        Intelligence and Big Data at{" "}
                        <strong className="text-[#39ff14]">
                            IES Portada Alta
                        </strong>{" "}
                        in Málaga, Spain.
                    </p>
                </div>
            </main>
            <div className="w-full max-w-4xl mx-auto px-8">
                <ScrollReveal>
                    <CourseModules id="modules" />
                </ScrollReveal>
                <ScrollReveal>
                    <KeySkills id="skills" />
                </ScrollReveal>
                <ScrollReveal>
                    <TechStack id="tech-stack" />
                </ScrollReveal>
            </div>
        </div>
    );
}
