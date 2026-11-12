import ModuleCard from "@/components/molecules/ModuleCard";

const modules = [
    {
        title: "Modelos de Inteligencia Artificial",
        hours: 90,
        description:
            "Visión global de la IA y sus campos de aplicación: algoritmos de búsqueda, algoritmos evolutivos, Aprendizaje Automático, preprocesamiento de lenguaje natural y tokenización.",
    },
    {
        title: "Sistemas de Aprendizaje Automático",
        hours: 90,
        description:
            "Identificación y aplicación de sistemas de aprendizaje automático: redes neuronales, aprendizaje profundo, modelos predictivos y técnicas de clasificación y regresión.",
    },
    {
        title: "Programación de Inteligencia Artificial",
        hours: 210,
        description:
            "Desarrollo de soluciones de IA mediante programación: implementación de algoritmos, gestión de proyectos de IA, integración de modelos y herramientas de desarrollo.",
    },
    {
        title: "Sistemas de Big Data",
        hours: 90,
        description:
            "Diseño e implementación de sistemas de Big Data: almacenamiento distribuido, procesamiento de datos a gran escala, paneles de control e Inteligencia Empresarial.",
    },
    {
        title: "Big Data Aplicado",
        hours: 120,
        description:
            "Aplicación práctica de técnicas de Big Data: extracción de información, integración de datos, análisis predictivo, visualización y gestión de datos masivos en entornos reales.",
    },
];

export default function CourseModules({ id }: { id?: string }) {
    return (
        <section id={id} className="w-full py-16">
            <h2 className="text-2xl font-semibold text-zinc-100 mb-2 text-center">
                Módulos del Curso
            </h2>
            <p className="text-zinc-400 text-center mb-10 max-w-2xl mx-auto">
                600 horas de formación especializada en IA y Big Data, distribuidas en 5 módulos profesionales a lo largo de 30 semanas.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {modules.map((mod) => (
                    <ModuleCard key={mod.title} title={mod.title} hours={mod.hours} description={mod.description} />
                ))}
            </div>
        </section>
    );
}
