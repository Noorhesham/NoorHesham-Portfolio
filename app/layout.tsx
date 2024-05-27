import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./themeProvider";
import AnimatedCursor from "react-animated-cursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Noor Hesham Portfolio",
  description:
    "MERN Stack Developer specializing in React, Next.js, TypeScript,Node .js,Mongo DB and Tailwind CSS. Proven track record of crafting high-performance web applications with sleek, user-friendly interfaces. Adaptable and detail-oriented, committed to delivering top-notch solutions. Passionate about staying ahead in technology and contributing to dynamic teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimatedCursor
          innerSize={8}
          outerSize={12}
          color="128, 0, 128"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
        />{" "}
        <ThemeProvider defaultTheme="dark" attribute="class" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
