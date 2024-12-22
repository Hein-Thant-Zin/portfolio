import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { DayNightToggle } from "@/components/DayNightToggle";
import { TimeStamp } from "@/components/TimeStamp";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hein Thant Zin",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-white  text-gray-900 transition-colors duration-300">
            <TimeStamp />
            <DayNightToggle />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}