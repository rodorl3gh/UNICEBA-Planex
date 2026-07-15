import type { Metadata } from "next";
import { ThemeProvider } from "./theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "PLANEX 2026 - Plan de Negocios para Proyectos de Exportación",
  description:
    "Curso completo de 18 sesiones basado en la guía metodológica PLANEX 2026 de Bancomext. Aprende a elaborar un plan de negocios de exportación paso a paso.",
  openGraph: {
    title: "PLANEX 2026 - Plan de Negocios para Proyectos de Exportación",
    description:
      "Curso completo de 18 sesiones. Guía metodológica para la elaboración de planes de negocio de exportación en el entorno global actual.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;600;700;800&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white dark:bg-obsidian-950 text-slate-800 dark:text-text-primary font-body antialiased transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
