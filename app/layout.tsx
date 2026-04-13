import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StructuredData } from "@/components/SEO/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    metadataBase: new URL("https://vyorai.com"),
    title: {
        default: "VyorAI | AI Virtual Try-On & Intelligent Automation Platform",
        template: "%s | VyorAI",
    },
    description: "VyorAI provides state-of-the-art AI Virtual Try-On systems for fashion and high-performance intelligent automation tools for developers.",
    keywords: [
        "AI automation platform",
        "AI interaction layer",
        "AI developer platform",
        "virtual try-on AI",
        "AI clothing try-on system",
        "AI product catalog generator",
        "AI stress detection",
        "best AI automation for developers",
        "AI API platform",
    ],
    authors: [{ name: "Hritik Jaiswal" }, { name: "Rishabh Kushwah" }],
    creator: "VyorAI Team",
    publisher: "VyorAI",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://vyorai.com",
        siteName: "VyorAI",
        title: "VyorAI | AI Virtual Try-On & Intelligent Automation",
        description: "Transforming fashion and development with advanced AI automation and virtual try-on technology.",
        images: [
            {
                url: "/LOGO.png", // Ideally use a specific social share image (1200x630)
                width: 1200,
                height: 630,
                alt: "VyorAI Platform",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "VyorAI | AI Virtual Try-On & Intelligent Automation",
        description: "Transforming fashion and development with advanced AI automation.",
        images: ["/LOGO.png"], // Ideally use a specific social share image
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: "/LOGO.png",
        apple: "/LOGO.png",
    },
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark" suppressHydrationWarning>
            <body className={`${inter.className} min-h-screen antialiased bg-[#0B0F19] text-white selection:bg-purple-500/30 overflow-x-hidden`} suppressHydrationWarning>
                <StructuredData />
                {children}
            </body>
        </html>
    );
}
