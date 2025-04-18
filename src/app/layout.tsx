import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "techy.aravind | Linktree Clone",
  description: "A tech professional's Linktree page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen transition-colors bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 dark:from-slate-900 dark:via-slate-800 dark:to-zinc-900 animate-gradient bg-[length:400%_400%]`} style={{
          backgroundImage: 'linear-gradient(to bottom, var(--tw-gradient-stops))',
          animation: 'gradient 8s ease infinite forwards'
        }}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
