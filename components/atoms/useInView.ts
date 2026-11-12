"use client";

import { useEffect, useRef, useState } from "react";

export function useInView(threshold = 0.15) {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold },
        );

        const element = ref.current;
        if (element) {
            observer.observe(element);
        }

        return () => observer.disconnect();
    }, [threshold]);

    return { ref, isInView };
}
