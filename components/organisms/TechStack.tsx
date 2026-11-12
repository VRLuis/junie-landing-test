import TechCard from "@/components/molecules/TechCard";

const categories = [
    {
        name: "Languages",
        items: [
            { name: "Python", icon: "🐍" },
            { name: "SQL", icon: "🗃️" },
            { name: "Scala", icon: "☕" },
            { name: "Bash", icon: "⌨️" },
        ],
    },
    {
        name: "ML & AI Frameworks",
        items: [
            { name: "TensorFlow", icon: "🧠" },
            { name: "PyTorch", icon: "🔥" },
            { name: "Scikit-learn", icon: "📊" },
            { name: "Keras", icon: "⚡" },
            { name: "OpenCV", icon: "👁️" },
        ],
    },
    {
        name: "Big Data Tools",
        items: [
            { name: "Apache Spark", icon: "⚙️" },
            { name: "Apache Hadoop", icon: "🐘" },
            { name: "Apache Kafka", icon: "📨" },
            { name: "Apache Hive", icon: "🐝" },
        ],
    },
    {
        name: "Databases",
        items: [
            { name: "PostgreSQL", icon: "🐘" },
            { name: "MongoDB", icon: "🍃" },
            { name: "Redis", icon: "🔴" },
            { name: "Elasticsearch", icon: "🔍" },
        ],
    },
    {
        name: "Cloud & DevOps",
        items: [
            { name: "Docker", icon: "🐳" },
            { name: "Kubernetes", icon: "☸️" },
            { name: "AWS", icon: "☁️" },
            { name: "Git", icon: "📦" },
        ],
    },
];

export default function TechStack({ id }: { id?: string }) {
    return (
        <section id={id} className="w-full py-16">
            <h2 className="text-2xl font-semibold text-zinc-100 mb-2 text-center">
                Tech Stack
            </h2>
            <p className="text-zinc-400 text-center mb-10 max-w-2xl mx-auto">
                The tools and technologies you'll master throughout the AI & Big Data specialization course.
            </p>
            <div className="flex flex-col gap-10">
                {categories.map((cat) => (
                    <div key={cat.name}>
                        <h3 className="text-sm font-semibold text-[#39ff14] mb-4 uppercase tracking-wider">
                            {cat.name}
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {cat.items.map((item) => (
                                <TechCard
                                    key={item.name}
                                    name={item.name}
                                    category={cat.name}
                                    icon={item.icon}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
