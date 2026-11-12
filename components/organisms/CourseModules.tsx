import ModuleCard from "@/components/molecules/ModuleCard";

const modules = [
    {
        title: "Artificial Intelligence Models",
        hours: 90,
        description:
            "Global overview of AI and its application fields: search algorithms, evolutionary algorithms, Machine Learning, natural language pre-processing and tokenization.",
    },
    {
        title: "Machine Learning Systems",
        hours: 90,
        description:
            "Identification and application of machine learning systems: neural networks, deep learning, predictive models and classification and regression techniques.",
    },
    {
        title: "Artificial Intelligence Programming",
        hours: 210,
        description:
            "Development of AI solutions through programming: algorithm implementation, AI project management, model integration and development tools.",
    },
    {
        title: "Big Data Systems",
        hours: 90,
        description:
            "Design and implementation of Big Data systems: distributed storage, large-scale data processing, dashboards and Business Intelligence.",
    },
    {
        title: "Applied Big Data",
        hours: 120,
        description:
            "Practical application of Big Data techniques: information extraction, data integration, predictive analytics, visualization and massive data management in real-world environments.",
    },
];

export default function CourseModules({ id }: { id?: string }) {
    return (
        <section id={id} className="w-full py-16">
            <h2 className="text-2xl font-semibold text-zinc-100 mb-2 text-center">
                Course Modules
            </h2>
            <p className="text-zinc-400 text-center mb-10 max-w-2xl mx-auto">
                600 hours of specialized training in AI and Big Data, distributed across 5 professional modules over 30 weeks.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {modules.map((mod) => (
                    <ModuleCard key={mod.title} title={mod.title} hours={mod.hours} description={mod.description} />
                ))}
            </div>
        </section>
    );
}
