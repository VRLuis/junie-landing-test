import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import HeroHeader from "@/components/organisms/HeroHeader";
import Nav from "@/components/organisms/Nav";
import Footer from "@/components/organisms/Footer";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "AI & Big Data — IES Portada Alta",
    description:
        "Personal landing page showcasing my studies in Artificial Intelligence and Big Data at IES Portada Alta in Málaga, Spain.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">
                <HeroHeader />
                <Nav />
                {children}
                <Footer />
            </body>
        </html>
    );
}
