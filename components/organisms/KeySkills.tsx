import SkillBadge from "@/components/molecules/SkillBadge";

const skills = [
    "Machine Learning",
    "Deep Learning",
    "Neural Networks",
    "Natural Language Processing",
    "Computer Vision",
    "Python Programming",
    "Data Analysis",
    "Big Data Processing",
    "Data Visualization",
    "Business Intelligence",
    "Predictive Analytics",
    "Distributed Storage",
    "Data Integration",
    "AI Model Deployment",
    "Statistical Analysis",
];

export default function KeySkills({ id }: { id?: string }) {
    return (
        <section id={id} className="w-full py-16">
            <h2 className="text-2xl font-semibold text-zinc-100 mb-2 text-center">
                Key Skills
            </h2>
            <p className="text-zinc-400 text-center mb-10 max-w-2xl mx-auto">
                The main technical skills you will acquire throughout the AI & Big Data specialization course.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
                {skills.map((skill) => (
                    <SkillBadge key={skill} label={skill} />
                ))}
            </div>
        </section>
    );
}
