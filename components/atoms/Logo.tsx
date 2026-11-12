import Image from "next/image";
import logoSvg from "@/public/logo.svg";

export default function Logo({ className }: { className?: string }) {
    return (
        <Image
            src={logoSvg}
            alt="AI & Big Data logo"
            width={200}
            height={60}
            className={className}
            priority
        />
    );
}
