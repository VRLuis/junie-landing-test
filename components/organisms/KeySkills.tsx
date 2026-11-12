import SkillBadge from "@/components/molecules/SkillBadge";

const skills = [
    "Aprendizaje Automático",
    "Aprendizaje Profundo",
    "Redes Neuronales",
    "Procesamiento de Lenguaje Natural",
    "Visión por Computador",
    "Programación en Python",
    "Análisis de Datos",
    "Procesamiento de Big Data",
    "Visualización de Datos",
    "Inteligencia Empresarial",
    "Análisis Predictivo",
    "Almacenamiento Distribuido",
    "Integración de Datos",
    "Despliegue de Modelos de IA",
    "Análisis Estadístico",
];

export default function KeySkills({ id }: { id?: string }) {
    return (
        <section id={id} className="w-full py-16">
            <h2 className="text-2xl font-semibold text-zinc-100 mb-2 text-center">
                Habilidades Clave
            </h2>
            <p className="text-zinc-400 text-center mb-10 max-w-2xl mx-auto">
                Las principales habilidades técnicas que adquirirás a lo largo del curso de especialización en IA y Big Data.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
                {skills.map((skill) => (
                    <SkillBadge key={skill} label={skill} />
                ))}
            </div>
        </section>
    );
}
