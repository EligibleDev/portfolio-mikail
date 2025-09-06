import type { Metadata } from "next";
import { Rajdhani, Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";

const rubik = Rubik({
    variable: "--font-rubik",
    subsets: ["latin"],
    weight: ["400", "500"],
});

const rajdhani = Rajdhani({
    variable: "--font-rajdhani",
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
    title: "Portfolio of Mikail",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${rubik?.className} ${rajdhani?.className} overflow-x-hidden antialiased`}
            >
                <Navbar />
                {children}
            </body>
        </html>
    );
}
