"use client";

import { useInView } from "@/components/atoms/useInView";

export default function ScrollReveal({ children }: { children: React.ReactNode }) {
    const { ref, isInView } = useInView(0.1);

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
            {children}
        </div>
    );
}
