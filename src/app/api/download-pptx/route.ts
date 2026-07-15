import { NextResponse } from "next/server";
import PptxGenJS from "pptxgenjs";

type SlideContent = {
  title: string;
  content: string[];
  highlight?: string;
};

type SessionData = {
  sessionTitle: string;
  slides: SlideContent[];
  bloque: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const shapes = (pptx: any) => pptx.shapes;

const darkColors = {
  bg: "0A0B0F",
  card: "111318",
  text: "E4E4E7",
  secondary: "A1A1AA",
  accent: "8B5CF6",
  border: "323745",
};

const lightColors = {
  bg: "F8FAFC",
  card: "FFFFFF",
  text: "0F172A",
  secondary: "475569",
  accent: "8B5CF6",
  border: "CBD5E1",
};

function addSlide(
  pptx: PptxGenJS,
  slide: SlideContent,
  sessionTitle: string,
  slideNum: number,
  totalInSession: number,
  colors: typeof darkColors
) {
  const sh = shapes(pptx);
  const s = pptx.addSlide();

  s.background = { color: colors.bg };

  s.addShape(sh.RECTANGLE, {
    x: 0,
    y: 0,
    w: "100%",
    h: 1.1,
    fill: { color: colors.card },
  });

  s.addText(sessionTitle, {
    x: 0.5,
    y: 0.15,
    w: 8.5,
    h: 0.4,
    fontSize: 10,
    color: colors.secondary,
    fontFace: "Inter",
    bold: true,
  });

  s.addText(slide.title, {
    x: 0.5,
    y: 0.5,
    w: 9,
    h: 0.5,
    fontSize: 20,
    color: colors.accent,
    fontFace: "Space Grotesk",
    bold: true,
  });

  const startY = 1.4;
  slide.content.forEach((text, i) => {
    s.addText(`\u2022 ${text}`, {
      x: 0.7,
      y: startY + i * 0.95,
      w: 8.6,
      h: 0.85,
      fontSize: 12,
      color: colors.text,
      fontFace: "Inter",
      valign: "top",
      lineSpacing: 18,
      paraSpaceAfter: 4,
    });
  });

  if (slide.highlight) {
    const hy = startY + slide.content.length * 0.95 + 0.3;

    s.addShape(sh.RECTANGLE, {
      x: 0.5,
      y: hy,
      w: 8.8,
      h: 0.7,
      fill: { color: "8B5CF6", transparency: 90 },
      rectRadius: 0.1,
    });

    s.addShape(sh.RECTANGLE, {
      x: 0.5,
      y: hy,
      w: 0.06,
      h: 0.7,
      fill: { color: colors.accent },
    });

    s.addText(slide.highlight, {
      x: 0.8,
      y: hy + 0.1,
      w: 8.3,
      h: 0.5,
      fontSize: 11,
      color: colors.accent,
      fontFace: "Inter",
      bold: true,
      italic: true,
    });
  }

  s.addText(`${slideNum}/${totalInSession}`, {
    x: 8.5,
    y: 5.2,
    w: 1,
    h: 0.3,
    fontSize: 8,
    color: colors.secondary,
    fontFace: "JetBrains Mono",
    align: "right",
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { sessions, theme } = body as { sessions: SessionData[]; theme: "dark" | "light" };

    const colors = theme === "dark" ? darkColors : lightColors;
    const pptx = new PptxGenJS();
    const sh = shapes(pptx);

    pptx.defineLayout({ name: "CUSTOM" as const, width: 10, height: 5.625 });
    pptx.layout = "CUSTOM";

    const titleSlide = pptx.addSlide();
    titleSlide.background = { color: colors.bg };

    titleSlide.addShape(sh.RECTANGLE, {
      x: 0,
      y: 0,
      w: "100%",
      h: "100%",
      fill: { color: colors.card },
    });

    titleSlide.addText("PLANEX 2025", {
      x: 0.5,
      y: 0.8,
      w: 9,
      h: 0.6,
      fontSize: 28,
      color: colors.accent,
      fontFace: "Playfair Display",
      bold: true,
    });

    titleSlide.addText("Plan de Negocios para Proyectos de Exportaci\u00f3n", {
      x: 0.5,
      y: 1.5,
      w: 9,
      h: 0.5,
      fontSize: 16,
      color: colors.text,
      fontFace: "Space Grotesk",
      bold: true,
    });

    titleSlide.addText("Curso completo \u00b7 18 Sesiones \u00b7 5 Bloques", {
      x: 0.5,
      y: 2.2,
      w: 9,
      h: 0.4,
      fontSize: 12,
      color: colors.secondary,
      fontFace: "Inter",
    });

    titleSlide.addText(
      `Basado en la obra original de Bancomext\nActualizaci\u00f3n 2025 \u00b7 Versi\u00f3n ${theme === "dark" ? "Oscura" : "Clara"}`,
      {
        x: 0.5,
        y: 3.5,
        w: 9,
        h: 0.8,
        fontSize: 10,
        color: colors.secondary,
        fontFace: "Inter",
      }
    );

    sessions.forEach((session) => {
      if (!session.slides || session.slides.length === 0) return;

      session.slides.forEach((slide, idx) => {
        addSlide(pptx, slide, session.sessionTitle, idx + 1, session.slides.length, colors);
      });
    });

    const buffer = Buffer.from(await pptx.write({ outputType: "nodebuffer" }) as ArrayBuffer);

    return new NextResponse(buffer, {
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        "Content-Disposition": 'attachment; filename="PLANEX_2025_Presentacion.pptx"',
      },
    });
  } catch (error) {
    console.error("Error generating PPTX:", error);
    return NextResponse.json(
      { error: "Failed to generate PPTX" },
      { status: 500 }
    );
  }
}
