import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import ProgressBar from "../../components/ProgressBar";
import Header from "../../components/Header";

const inter = Inter({ subsets: ["latin"] });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Dima | Portfolio",
  description: "Personal portfolio landing page with a clean terminal vibe.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${mono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <ProgressBar />
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
