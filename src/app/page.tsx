"use client";

import { useState, useEffect, useCallback } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Target,
  Users,
  Shield,
  TrendingUp,
  Package,
  Factory,
  ShoppingCart,
  Globe,
  Search,
  PieChart,
  Ship,
  DollarSign,
  LineChart,
  Blocks,
  Star,
  Moon,
  Sun,
  Download,
  X,
  ChevronDown,
  Lightbulb,
  Wrench,
  Cpu,
  Briefcase,
  BookOpen,
  Rocket,
  CheckCircle2,
  Scale,
  ShieldCheck,
  AlertTriangle,
  Calculator,
  FileCheck,
  Award,
  Globe2,
  Megaphone,
  MessageSquare,
  CreditCard,
  BarChart3,
  Boxes,
  Leaf,
  Recycle,
  Network,
  Zap,
  BadgeCheck,
  Quote,
  Palette,
  Truck,
  Gauge,
  Fingerprint,
  Landmark,
  ChartNoAxesColumn,
  Clock,
  Handshake,
  Layers,
  Container,
  FlaskConical,
  Banknote,
} from "lucide-react";

// ─── Accent Color Map ───────────────────────────────────────────
const accentColors: Record<string, { bg: string; text: string; border: string; light: string; dot: string }> = {
  purple: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/30", light: "bg-purple-400/10", dot: "bg-purple-500" },
  blue: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/30", light: "bg-blue-400/10", dot: "bg-blue-500" },
  green: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/30", light: "bg-emerald-400/10", dot: "bg-emerald-500" },
  orange: { bg: "bg-orange-500/10", text: "text-orange-400", border: "border-orange-500/30", light: "bg-orange-400/10", dot: "bg-orange-500" },
  pink: { bg: "bg-pink-500/10", text: "text-pink-400", border: "border-pink-500/30", light: "bg-pink-400/10", dot: "bg-pink-500" },
  red: { bg: "bg-red-500/10", text: "text-red-400", border: "border-red-500/30", light: "bg-red-400/10", dot: "bg-red-500" },
  gold: { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/30", light: "bg-amber-400/10", dot: "bg-amber-500" },
};

// ─── Navigation Items ───────────────────────────────────────────
type NavItem = {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number }>;
  accent: string;
  bloque: string;
};

const navItems: NavItem[] = [
  { id: "hero", label: "Portada", icon: Sparkles, accent: "purple", bloque: "" },
  { id: "s01", label: "S1: Intro + Constitución", icon: BookOpen, accent: "gold", bloque: "B1" },
  { id: "s02", label: "S2: Misión, Visión y Antecedentes", icon: Target, accent: "blue", bloque: "B1" },
  { id: "s03", label: "S3: Estructura y Políticas", icon: Users, accent: "blue", bloque: "B1" },
  { id: "s04", label: "S4: Activos, Riesgos y Tecnología", icon: Shield, accent: "blue", bloque: "B1" },
  { id: "s05", label: "S5: Cumplimiento, FODA y Nuevos Enfoques", icon: CheckCircle2, accent: "blue", bloque: "B1" },
  { id: "s06", label: "S6: Producto y Proveeduría", icon: Package, accent: "green", bloque: "B2" },
  { id: "s07", label: "S7: Fomento, Activos y Proceso", icon: Factory, accent: "green", bloque: "B2" },
  { id: "s08", label: "S8: Inventarios, Imagen y Empaque", icon: ShoppingCart, accent: "green", bloque: "B2" },
  { id: "s09", label: "S9: Calidad, Normas y Comercio Digital", icon: Lightbulb, accent: "green", bloque: "B2" },
  { id: "s10", label: "S10: Industria y Selección de Mercado", icon: Globe, accent: "orange", bloque: "B3" },
  { id: "s11", label: "S11: Medición del Mercado y Barreras", icon: Search, accent: "orange", bloque: "B3" },
  { id: "s12", label: "S12: Segmentación, Precio y Competencia", icon: PieChart, accent: "orange", bloque: "B3" },
  { id: "s13", label: "S13: Pagos Internacionales e INCOTERMS", icon: Banknote, accent: "orange", bloque: "B3" },
  { id: "s14", label: "S14: Logística, Contratos y Marketing", icon: Ship, accent: "orange", bloque: "B3" },
  { id: "s15", label: "S15: Info Financiera y Requerimientos", icon: DollarSign, accent: "pink", bloque: "B4" },
  { id: "s16", label: "S16: Proyecciones y Evaluación Financiera", icon: LineChart, accent: "pink", bloque: "B4" },
  { id: "s17", label: "S17: Fintech, Blockchain y Riesgos", icon: Cpu, accent: "pink", bloque: "B4" },
  { id: "s18", label: "S18: Resumen Ejecutivo y Cierre", icon: Rocket, accent: "purple", bloque: "B5" },
];

// ─── Slide Data for Each Session ─────────────────────────────────
type SlideData = {
  title: string;
  content: string[];
  highlight?: string;
};

type SessionData = {
  bloque: string;
  bloqueTitulo: string;
  titulo: string;
  objetivo: string;
  slides: SlideData[];
};

const sessions: Record<string, SessionData> = {
  s01: {
    bloque: "BLOQUE 1 - La Empresa",
    bloqueTitulo: "Capítulo 1: Análisis de la Empresa",
    titulo: "Introducción al PLANEX y Constitución Legal",
    objetivo: "Comprender qué es el PLANEX, su propósito, estructura y las figuras jurídicas disponibles para exportar.",
    slides: [
      {
        title: "¿Qué es PLANEX?",
        content: [
          "PLANEX: Plan de Negocios para Proyectos de Exportación — metodología desarrollada por Bancomext para guiar a empresas mexicanas en su proceso de internacionalización.",
          "5 capítulos que cubren: Análisis de la Empresa → Producto → Mercado → Finanzas → Resumen Ejecutivo.",
          "Edición 2026: actualizada con ESG, nearshoring, INCOTERMS 2020, comercio electrónico transfronterizo, fintech y blockchain.",
          "El punto de partida es un conocimiento profundo de la propia empresa: autopsia organizacional antes de mirar al exterior.",
        ],
        highlight: "Una empresa que se conoce a sí misma está en mejor posición para aprovechar oportunidades globales.",
      },
      {
        title: "Tipos de Sociedades en México",
        content: [
          "S.A. de C.V. — La opción ideal para exportar: responsabilidad limitada, capital variable, reconocimiento internacional, sin límite de ingresos ni socios.",
          "S.A.S. — Excelente puerta de entrada (constitución en 24h, gratuita, unipersonal) pero limitada a $5M MXN anuales en ingresos.",
          "S. de R.L. de C.V. — Adecuada para empresas familiares (máx. 50 socios). Transmisión restringida de partes sociales.",
          "Costos: desde $0 (S.A.S.) hasta $15,000-$40,000 MXN (S.A. de C.V. con notario). Tiempo: 24h a 4 semanas.",
        ],
        highlight: "S.A. de C.V. = opción profesional recomendada para exportación seria.",
      },
      {
        title: "Sociedades en LATAM y EE.UU.",
        content: [
          "Equivalentes regionales: S.A. (Colombia, Chile, Perú, Argentina), S.A.S. (Colombia/Argentina), SpA (Chile).",
          "EE.UU.: LLC = similar a S. de R.L. de C.V. (pass-through taxation). Corporation (Inc.) = equivalente a S.A. de C.V. — preferida por grandes compradores.",
          "Requisitos para exportar como persona moral: RFC con actividad de CE, e.firma, opinión 32-D positiva, padrón de exportadores sectorial (si aplica), agente aduanal.",
          "Clave: registro de marca en país destino ANTES de la primera exportación — evitar 'trademark squatting'.",
        ],
        highlight: "Investigar figura societaria del comprador: LLC vs Corp determina condiciones de crédito y garantías.",
      },
    ],
  },
  s02: {
    bloque: "BLOQUE 1 - La Empresa",
    bloqueTitulo: "Capítulo 1: Análisis de la Empresa",
    titulo: "Estrategia Empresarial: Misión, Visión y Antecedentes",
    objetivo: "Definir la dirección estratégica de la empresa exportadora y documentar su trayectoria.",
    slides: [
      {
        title: "Misión, Visión, Objetivos y Metas",
        content: [
          "Misión: razón de ser HOY. Ej. Bimbo: 'Alimentos deliciosos y nutritivos en las manos de todos'.",
          "Visión: imagen del FUTURO deseado. Ej. 'Ser reconocidos en 2030 como el principal exportador mexicano de frutas tropicales hacia Norteamérica y Asia-Pacífico'.",
          "Objetivos: enunciados cualitativos. Metas: cuantitativas, temporales y SMART (Específicas, Medibles, Alcanzables, Relevantes, con Tiempo).",
          "Ejemplo meta: 'Alcanzar exportaciones por USD $2,000,000 anuales hacia EE.UU. para diciembre de 2026'.",
        ],
        highlight: "Sin dirección clara, la internacionalización se convierte en un ejercicio errático y costoso.",
      },
      {
        title: "Alineación al Proyecto Exportador",
        content: [
          "5 pasos: 1) Revisar misión actual (¿permite exportación?), 2) Actualizar visión con componente exportador, 3) Establecer objetivos específicos de exportación, 4) Desplegar metas anuales con KPI dashboard, 5) Comunicar a toda la organización.",
          "Propósito corporativo: ¿Por qué existe la empresa más allá de generar ganancias? Fundamental para ESG.",
          "Caso 'Salsas Doña Chole': misión original 'atender familias de Jalisco' → revisada 'llevar sabores tradicionales jaliscienses a las mesas del mundo'.",
        ],
        highlight: "El proyecto exportador no debe ser un apéndice aislado; debe estar integrado en la estrategia corporativa.",
      },
      {
        title: "Antecedentes y Lecciones Aprendidas",
        content: [
          "Documentar cronología de hitos: fundación, constitución legal, certificaciones, ferias, primeras exportaciones, ampliaciones, nuevas tecnologías.",
          "Distinguir experiencia exportadora DIRECTA (la empresa realizó todo el proceso) vs INDIRECTA (vendió a intermediarios que exportaron).",
          "Documentar fracasos y lecciones: logísticos (cadena de frío), financieros (impago sin seguro), normativos (rechazo en aduana), culturales (etiquetado solo en español), productivos (sobrecapacidad).",
          "Los evaluadores de Bancomext valoran la honestidad para reconocer errores y corregir el rumbo.",
        ],
        highlight: "La historia de la empresa es un indicador de seriedad y viabilidad ante socios, bancos y agencias.",
      },
    ],
  },
  s03: {
    bloque: "BLOQUE 1 - La Empresa",
    bloqueTitulo: "Capítulo 1: Análisis de la Empresa",
    titulo: "Estructura Administrativa y Políticas",
    objetivo: "Diseñar la estructura organizacional y las políticas necesarias para operar internacionalmente.",
    slides: [
      {
        title: "Estructura y Talento en Comercio Exterior",
        content: [
          "Presentar organigrama ACTUAL y PROYECTADO con nuevos puestos para exportación señalados visualmente.",
          "Puestos clave: Gerente de Exportaciones (100% dedicación), Coordinador de Logística y Tráfico Internacional, Supervisor de Calidad con enfoque en normas destino.",
          "Fichas curriculares destacando: años en CE, mercados manejados, INCOTERMS, idiomas, ferias, certificaciones profesionales.",
          "Asesores externos indispensables: agente aduanal (el aliado operativo #1), despacho jurídico CE, despacho contable-fiscal CE, consultor CE, Bancomext.",
        ],
        highlight: "No basta con 'querer exportar'; se requiere que alguien en la organización 'sepa exportar'.",
      },
      {
        title: "Políticas Empresariales",
        content: [
          "Administración: ¿quién autoriza cotizaciones internacionales? ¿quién firma contratos de distribución? ¿montos máximos por nivel?",
          "Personal: flexibilidad horaria por diferencias de huso, viáticos con tabuladores oficiales, teletrabajo para Gerente de Exportaciones.",
          "Producción: pedidos de exportación firmes tienen prioridad, lotes mínimos rentables, inspección 100% para exportación, trazabilidad total.",
          "Endeudamiento: apalancamiento máx. 2:1, crédito en USD cubierto con ingresos en USD (hedge natural), avales personales como excepción.",
        ],
        highlight: "Muchas políticas domésticas resultan contraproducentes al operar internacionalmente.",
      },
      {
        title: "Políticas de Pago y Reforma Laboral",
        content: [
          "Clientes nuevos: carta de crédito irrevocable y confirmada o 50% anticipo + 50% contra documentos.",
          "Clientes con historial (+6 operaciones): cobranza documentaria a 30 días con seguro de crédito Bancomext.",
          "Reforma laboral 2019 + T-MEC Capítulo 23: legitimación de CCT por voto libre y secreto OBLIGATORIO.",
          "Subcontratación solo para servicios especializados distintos del objeto social (reforma 2021). Registro REPSE obligatorio.",
        ],
        highlight: "El cumplimiento laboral no es opcional: es requisito de acceso al mercado bajo el T-MEC.",
      },
    ],
  },
  s04: {
    bloque: "BLOQUE 1 - La Empresa",
    bloqueTitulo: "Capítulo 1: Análisis de la Empresa",
    titulo: "Instalaciones, Riesgos y Tecnología",
    objetivo: "Evaluar la capacidad instalada, los seguros de cobertura y la tecnología necesaria para la exportación.",
    slides: [
      {
        title: "Instalaciones y Activos",
        content: [
          "Ubicación geográfica de cada instalación con distancia a puertos, aeropuertos y cruces fronterizos — factor competitivo en costos logísticos.",
          "Inventario de maquinaria: marca, modelo, año, valor, capacidad productiva, estado. Identificar qué requiere renovación para exportación.",
          "Calcular OEE (Overall Equipment Effectiveness): <60% sugiere necesidad de reemplazo. Evaluar antigüedad vs. vida útil.",
          "Bienes propios vs. arrendados y gravámenes: indicar saldo pendiente, acreedor y fecha de liberación. Gravámenes pueden obstaculizar financiamiento adicional.",
        ],
        highlight: "La ubicación a 250 km del puerto de Manzanillo vs. 1,200 km puede ser decisiva en rentabilidad.",
      },
      {
        title: "Cobertura de Riesgos",
        content: [
          "Seguros obligatorios: responsabilidad civil productos (USD $2M mínimo para EE.UU./UE), seguro de transporte de carga (110% valor CIF).",
          "Riesgo cambiario: forward de tipo de cambio (fija el TC a 3, 6, 12 meses). Ejemplo: sin cobertura, una apreciación del peso de $19 a $17.50 = pérdida de $150,000 MXN en un embarque de USD $100K.",
          "Riesgo político: seguro de crédito Bancomext (cubre causas comerciales + políticas hasta 85%). Diversificar: máximo 30% de exportaciones en un solo país.",
          "Riesgo comercial: monitorear country risk (COFACE, Euler Hermes, OCDE). Performance bonds: 10-20% del valor del contrato.",
        ],
        highlight: "No exportar NUNCA sin seguro de carga y responsabilidad civil.",
      },
      {
        title: "Tecnología para la Exportación",
        content: [
          "Industria 4.0: sensores IoT en embarques (ubicación, temperatura, humedad, alertas de apertura) — USD $80-$150 por contenedor. Visión artificial para inspección automatizada.",
          "ERP con módulo CE: SAP Business One, Microsoft Dynamics 365, Odoo. Requisitos mínimos: multimoneda, pedimentos, trazabilidad, INCOTERMS, CFDI tipo 'E'.",
          "Ciberseguridad: MFA en todos los sistemas, cifrado de correos (S/MIME), respaldo 3-2-1, firewall NGAV, VPN para viajes, verificación de cambios de cuenta por segundo canal.",
          "Inversión anual estimada en ciberseguridad: $60,000-$120,000 MXN. No es 'nice to have': es exigencia operativa y cada vez más requisito contractual.",
        ],
        highlight: "Un ataque de ransomware o phishing puede destruir décadas de trabajo en horas.",
      },
    ],
  },
  s05: {
    bloque: "BLOQUE 1 - La Empresa",
    bloqueTitulo: "Capítulo 1: Análisis de la Empresa",
    titulo: "Cumplimiento, FODA y Nuevos Enfoques",
    objetivo: "Asegurar el cumplimiento normativo, realizar el diagnóstico FODA y adoptar criterios ESG y transformación digital.",
    slides: [
      {
        title: "Cumplimiento de Obligaciones",
        content: [
          "Fiscal: declaración anual, pagos provisionales, IVA (exportación = tasa 0%, se acredita IVA de insumos), CFDI tipo 'E' con complemento CE.",
          "Opinión 32-D positiva: 'pasaporte fiscal' indispensable para comercio exterior. Vigencia 30 días.",
          "Permisos: Padrón de Exportadores Sectorial, IMMEX (insumos temporales sin impuestos), certificado de origen T-MEC (9 elementos del Anexo 5-A).",
          "Para alimentos a EE.UU.: registro FDA + agente FDA en territorio estadounidense + certificado orgánico USDA + etiquetado bilingüe + Prior Notice.",
        ],
        highlight: "Un solo embarque de alimentos sin registro FDA puede ser destruido en la frontera — costo total a pérdida.",
      },
      {
        title: "Análisis FODA Metodológico",
        content: [
          "Fase 1 (Interno): identificar fortalezas y debilidades reales, asignar criticidad 1-5, priorizar 'showstoppers'.",
          "Fase 2 (Externo): investigación de mercado para oportunidades y amenazas. Evaluar impacto × probabilidad.",
          "Fase 3 (Cruce): FO (ofensivas), FA (defensivas), DO (reorientación), DA (supervivencia).",
          "Fase 4 (Planes): cada celda genera al menos un plan con responsable, presupuesto y fecha.",
          "Ejemplo FO1: F1 (recetas 40 años) + F2 (certificaciones Kosher/FSSC) + O1 (62M hispanos en EE.UU.) → lanzar línea gourmet bilingüe.",
        ],
        highlight: "El FODA debe ser quirúrgico, no una lista de obviedades. Cada cruce = un plan de acción.",
      },
      {
        title: "Gobierno Corporativo y ESG",
        content: [
          "Gobierno corporativo: separación patrimonio personal/empresarial, consejo asesor con externo, código de ética, política anticorrupción.",
          "ESG/ASG: operan como 'licencia social para operar'. Walmart, Costco, Amazon y Unilever evalúan proveedores con criterios ESG.",
          "Ambiental (E): huella de carbono (CBAM europeo gravará productos intensivos), empaques sustentables, eficiencia energética, economía circular.",
          "Social (S): condiciones laborales dignas, igualdad de género (NMX-R-025), cadena de suministro responsable, desarrollo comunitario.",
          "Gobernanza (G): transparencia fiscal, anticorrupción (FCPA de EE.UU.), protección de datos (LFPDPPP + GDPR).",
        ],
        highlight: "Incorporar narrativa ESG en la presentación comercial puede inclinar la balanza frente a competidores asiáticos de menor precio.",
      },
      {
        title: "Transformación Digital y Nearshoring",
        content: [
          "Nearshoring: México principal beneficiario global con IED récord ($36B+ en 2024). Corredor T-MEC concentra 65%+ de la IED manufacturera.",
          "Causas: disrupciones COVID, tensiones China-EE.UU., flete Shanghái-LA pasó de $1,500 a $20,000+.",
          "IMMEX: importación temporal de insumos sin IVA ni aranceles para producción de exportación. Ahorro de flujo: ~$1.2M MXN/mes para una PYME.",
          "VDMCE (Ventanilla Digital Mexicana): despacho 100% digital, validación en tiempo real, interoperabilidad con EE.UU. y Canadá.",
          "Oportunidad para PYMEs: integrarse como proveedores Tier 1, Tier 2 o Tier 3 en cadenas globales de valor.",
        ],
        highlight: "El nearshoring es la ventana de oportunidad más grande para México desde el TLCAN.",
      },
    ],
  },
  s06: {
    bloque: "BLOQUE 2 - El Producto",
    bloqueTitulo: "Capítulo 2: Análisis del Producto/Servicio",
    titulo: "Descripción del Producto, Proveeduría y Costos",
    objetivo: "Definir técnicamente el producto, asegurar la cadena de suministro y calcular la estructura de costos.",
    slides: [
      {
        title: "Descripción del Producto y Clasificación Arancelaria",
        content: [
          "Descripción técnica: dimensiones, composición, especificaciones, diseño, empaque, variedades. Para servicios: alcance, personal, infraestructura, estándares.",
          "Clasificación arancelaria (Sistema Armonizado): 2 dígitos (capítulo) → 4 (partida) → 6 (subpartida internacional) → 8 (fracción nacional) → 10 (NICO).",
          "Error en clasificación = multas, retención de carga, pérdida de preferencias arancelarias. Es uno de los pasos más subestimados y críticos.",
          "Usos: consumo final, industrial, empresarial/institucional, gubernamental. Identificar si el producto compite con sustitutos o complementarios.",
        ],
        highlight: "Una fracción arancelaria mal clasificada puede costar desde 5% hasta 30% de arancel innecesario.",
      },
      {
        title: "Proveeduría y Cadena de Suministro",
        content: [
          "Matriz de proveedores: origen, lead time, proveedor alternativo (Plan B), exposición cambiaria, estacionalidad.",
          "Regla de oro: ningún insumo crítico debe depender >70% de una sola fuente.",
          "Alianzas estratégicas: codesarrollo de productos, integración EDI, certificaciones compartidas, financiamiento en cadena productiva (Nafin).",
          "Preguntas clave: ¿lead time de cada insumo? ¿factores estacionales? ¿riesgos de disrupción? ¿stock de seguridad en días de producción?",
        ],
        highlight: "La continuidad operativa no es negociable en exportación. Un paro de proveedor = penalización por incumplimiento.",
      },
      {
        title: "Subcontratación y Estructura de Costos",
        content: [
          "Outsourcing: reforma 2021 prohibió suministro de personal; solo servicios especializados distintos del objeto social (REPSE obligatorio).",
          "Maquila internacional: co-packer en país destino para etiquetado local, adaptación a normativas.",
          "Costos fijos: renta, depreciación, nómina administrativa. Se diluyen con volumen (ventaja de escala).",
          "Costos variables: materia prima, empaque, flete exportación, despacho aduanero, certificaciones destino.",
          "Costo crítico: flete marítimo volátil (Manzanillo-Shanghái: de $1,500 a $20,000). Incluir demurrage, detention, inspecciones.",
        ],
        highlight: "Una PYME que subestimó costos logísticos perdió $180,000 MXN en un embarque a Rotterdam.",
      },
    ],
  },
  s07: {
    bloque: "BLOQUE 2 - El Producto",
    bloqueTitulo: "Capítulo 2: Análisis del Producto/Servicio",
    titulo: "Programas de Fomento, Activos y Proceso Productivo",
    objetivo: "Conocer los programas de apoyo gubernamental, los activos necesarios y el proceso productivo para exportación.",
    slides: [
      {
        title: "Programas de Fomento a la Exportación",
        content: [
          "IMMEX: importación temporal de insumos para exportación sin IVA ni aranceles. Modalidades: controladora, industrial, servicios, shelter, outsourcing.",
          "PROSEC: aranceles preferenciales 0-5% para 24 sectores productivos.",
          "Drawback: devolución de aranceles pagados por insumos importados incorporados a productos exportados.",
          "IVA 0% en exportación: no se cobra IVA al cliente extranjero y se puede recuperar el IVA de insumos (con 3-6 meses de rezago del SAT).",
          "Equivalentes en LATAM: Plan Vallejo (Colombia), Admisión Temporal (Perú), ATPI (Argentina), Drawback Integrado (Brasil).",
        ],
        highlight: "IMMEX puede ahorrar hasta $1.2M MXN/mes en flujo de efectivo para una PYME manufacturera.",
      },
      {
        title: "Activos Fijos y Propiedad Intelectual",
        content: [
          "Capacidad instalada: teórica (especificación fabricante) → práctica (80-90%, restando paros) → actual utilizada → proyectada con exportación.",
          "Si utilización proyectada >85-90%: se requiere inversión en ampliación o segundo turno.",
          "Propiedad intelectual: patentes (20 años), modelos de utilidad (10), diseños industriales (15), marcas (10 años renovables).",
          "Registro internacional: Sistema de Madrid (marcas), PCT (patentes), Sistema de La Haya (diseños). Presupuesto: $3,000-$8,000 USD para registrar en 3 mercados destino clave.",
        ],
        highlight: "Exportar sin registrar la marca en el país destino es regalarla. Caso real: fabricante mexicano pagó EUR 80,000 en litigios para recuperar su propia marca en España.",
      },
      {
        title: "Proceso Productivo para Exportación",
        content: [
          "Describir secuencia de actividades: tiempo, equipo, personal y parámetros de calidad por etapa.",
          "Identificar cuellos de botella: etapas con capacidad inferior a las precedentes/subsecuentes que limitan la producción total.",
          "Cambios necesarios vs. mercado nacional: aumentar capacidad de cuellos, agregar etapas (tratamiento cuarentenario), modificar especificaciones (tamaño de rebanada para mercado asiático), implementar trazabilidad electrónica (QR, blockchain).",
          "Ejemplo: proceso de 11 etapas para mango deshidratado con chile para exportación.",
        ],
        highlight: "Lo que funciona para el mercado nacional rara vez funciona igual para exportación sin adaptaciones.",
      },
    ],
  },
  s08: {
    bloque: "BLOQUE 2 - El Producto",
    bloqueTitulo: "Capítulo 2: Análisis del Producto/Servicio",
    titulo: "Inventarios, Imagen del Producto y Empaque",
    objetivo: "Gestionar inventarios para exportación, construir la imagen del producto y diseñar empaque/embalaje adecuado.",
    slides: [
      {
        title: "Gestión de Inventarios para Exportación",
        content: [
          "JIT puro es difícil para exportación por tiempos de tránsito marítimo (2-6 semanas). Se requiere mayor stock de seguridad.",
          "Indicadores: días de cobertura de materia prima, throughput, rotación de producto terminado.",
          "Punto de reorden = (demanda diaria × lead time) + stock de seguridad.",
          "Clasificación ABC: Categoría A (20% de ítems, 80% del valor) → control estricto con conteo cíclico frecuente.",
          "VMI (Vendor Managed Inventory) como solución adaptada: el exportador gestiona el inventario en bodega del cliente.",
        ],
        highlight: "Un faltante en exportación no se resuelve con un envío express: cuesta penalizaciones, pérdida de confianza y posible cancelación del contrato.",
      },
      {
        title: "Imagen del Producto",
        content: [
          "Etiquetado: elemento regulatorio clave. Debe estar en el idioma del país destino. FDA Nutrition Facts (EE.UU.), Reglamento UE 1169/2011 con Nutri-Score (Europa).",
          "Presencia digital obligatoria en 2026: sitio web en inglés + idioma del mercado destino. Sin web = no existes para el comprador internacional.",
          "Estrategia digital: SEO internacional, LinkedIn (B2B), Instagram/TikTok (B2C), email marketing, marketplaces B2B (Alibaba, Amazon Business).",
          "Materiales de venta: fichas técnicas bilingües, catálogos digitales, muestras virtuales con realidad aumentada.",
        ],
        highlight: "Una etiqueta solo en español enviada a supermercados alemanes = lote completo rechazado.",
      },
      {
        title: "Envase, Empaque y Embalaje",
        content: [
          "Distinción técnica: envase primario (contacto con producto) → empaque secundario (agrupación comercial) → embalaje terciario (protección en transporte).",
          "Empaque de exportación debe ser SIGNIFICATIVAMENTE más robusto que el nacional: múltiples maniobras, climas extremos, vibración/compresión en estibas, inspecciones aduanales.",
          "NIMF-15 (ISPM-15): OBLIGATORIO para todo empaque de madera en comercio internacional. Debe tener tratamiento térmico (HT) y sello IPPC. Incumplimiento = destrucción o reexportación a costo del exportador.",
          "Sustentabilidad: materiales reciclados/renovables (FSC para papel/cartón), compostables, libres de PVC, sin poliestireno expandido. Directiva UE 94/62/CE.",
        ],
        highlight: "NIMF-15 es la causa #1 de rechazo de embarques mexicanos en aduanas internacionales.",
      },
    ],
  },
  s09: {
    bloque: "BLOQUE 2 - El Producto",
    bloqueTitulo: "Capítulo 2: Análisis del Producto/Servicio",
    titulo: "Calidad, Normas, I+D y Comercio Digital",
    objetivo: "Implementar sistemas de calidad, certificaciones, innovación y canales digitales de exportación.",
    slides: [
      {
        title: "Normas Oficiales y Certificaciones Internacionales",
        content: [
          "NOM (obligatorias en México) vs NMX (voluntarias). Para exportación: se usan requisitos del país destino.",
          "Certificaciones clave: ISO 9001 (gestión de calidad), ISO 22000 / FSSC 22000 (inocuidad alimentaria, exigida por Walmart, Costco, Tesco), HACCP (obligatorio para EE.UU. vía FSMA), IATF 16949 (automotriz).",
          "FDA (EE.UU.): registro de instalación, agente FDA en territorio estadounidense, controles preventivos FSMA (HARPC), Prior Notice.",
          "CE marking (UE): obligatorio para productos regulados. REACH: registro de sustancias químicas >1 tonelada/año. RoHS: restricción de sustancias peligrosas en electrónicos.",
        ],
        highlight: "FSSC 22000 puede ser la diferencia entre vender a Walmart o quedarse fuera de la cadena de suministro global.",
      },
      {
        title: "Investigación, Desarrollo y Control de Calidad",
        content: [
          "I+D: ventaja competitiva más sostenible. México tiene 26 centros de investigación CONAHCYT, universidades con oficinas de transferencia tecnológica, clústeres industriales.",
          "Estímulo fiscal subutilizado: crédito ISR del 30% sobre gastos en I+D (Art. 25 LISR).",
          "Adaptación a mercados: Japón prefiere porciones pequeñas + información exhaustiva; Alemania valora datos técnicos; EE.UU. busca high-protein, low-sugar, clean label.",
          "Six Sigma (3.4 DPMO, metodología DMAIC) + Lean Manufacturing (7 desperdicios, 5S, Kaizen, Poka-Yoke).",
          "Trazabilidad: 100% de lotes exportación trazables desde materia prima hasta cliente final. Blockchain emergente: IBM Food Trust, VeChain, OriginTrail.",
        ],
        highlight: "Un lote de miel orgánica rechazado en la UE por trazas de antibióticos = pérdida total + reputación dañada.",
      },
      {
        title: "Respaldo al Producto y Servicio Postventa",
        content: [
          "Garantías: directa del fabricante, alianza con distribuidor, centros de servicio autorizados, seguro de garantía extendida.",
          "Manuales multilingües obligatorios (UE exige idiomas locales). Soporte técnico en huso horario del cliente.",
          "Condiciones de pago competitivas: carta de crédito (mínimo riesgo, costo alto) → seguro de crédito (cubre 80-90%) → factoring internacional (liquidez inmediata) → forfaiting (mediano/largo plazo).",
          "Política de crédito gradual: empezar con carta de crédito, migrar a cobranza documentaria tras 6 operaciones exitosas, luego cuenta abierta con seguro.",
        ],
        highlight: "El servicio postventa puede ser EL factor decisivo para compradores internacionales que valoran la continuidad del negocio.",
      },
      {
        title: "E-commerce Transfronterizo y Economía Circular",
        content: [
          "E-commerce B2C transfronterizo alcanzará $4-6 billones USD en 2028. Marketplaces: Amazon Global (FBA, 200+ países, comisión 8-15%), Mercado Libre (18 países LATAM, 11-17%).",
          "Fiscalidad: IOSS en UE (ventas ≤EUR 150), sales tax en EE.UU. (nexus desde $100K/200 transacciones).",
          "Economía circular: diseño para desensamble, materiales renovables/reciclados, reducción en fuente, modularidad, producto como servicio.",
          "Huella de carbono de producto (PCF) bajo ISO 14067. Pasaporte digital de producto en UE obligatorio desde 2026-2027 (ESPR).",
          "Certificaciones verdes: EU Ecolabel, Cradle to Cradle, Energy Star, B Corp, Rainforest Alliance.",
        ],
        highlight: "La sostenibilidad pasó de ser diferenciador a ser requisito de acceso a mercado.",
      },
    ],
  },
  s10: {
    bloque: "BLOQUE 3 - El Mercado",
    bloqueTitulo: "Capítulo 3: Análisis y Selección del Mercado Meta",
    titulo: "Industria y Selección del Mercado Meta",
    objetivo: "Analizar la industria global y seleccionar sistemáticamente el mercado meta más atractivo.",
    slides: [
      {
        title: "Descripción de la Industria y Panorama Global",
        content: [
          "México: 9° exportador mundial (2.4% del comercio global), #1 en Latinoamérica (38% del total regional). Exportaciones 2024: ~$618B USD.",
          "14 TLCs con 50 países. Manufactura: 88% de las exportaciones. Principales capítulos: vehículos ($155B), maquinaria ($96B), electrónicos ($89B).",
          "Liderazgo global: #1 en aguacate, mango, berries, cerveza, tequila; #4 en autopartes; #5 en dispositivos médicos.",
          "Fuentes de datos: UN Comtrade, TradeMap, Data México, USITC DataWeb, Eurostat. Megatendencias: nearshoring, e-commerce transfronterizo (+20% anual), alimentos funcionales, Industria 4.0.",
        ],
        highlight: "México exporta más que el resto de Latinoamérica combinado.",
      },
      {
        title: "Selección del Mercado Meta: Filtrado en 3 Etapas",
        content: [
          "Etapa 1 — Macro: PIB per cápita, población, estabilidad política, estabilidad cambiaria, índice de corrupción, LPI (Logistics Performance Index).",
          "Etapa 2 — Acceso: existencia de TLC, barreras no arancelarias, tiempo/costo de registro de producto, protocolos fitosanitarios, costos logísticos.",
          "Etapa 3 — Mercado: tamaño del mercado específico (TradeMap), tendencia de crecimiento de importaciones (+%), competidores presentes, presencia actual de México.",
          "Resultado: matriz ponderada con puntajes. Ejemplo: EE.UU. 8.25, Japón 7.25, Canadá 7.10, Alemania 6.65, Corea del Sur 6.50, EAU 5.85, India 5.00.",
        ],
        highlight: "La decisión más importante de todo el plan de exportación es la selección del mercado meta.",
      },
      {
        title: "Participación de México y Concentración de Riesgos",
        content: [
          "82% de exportaciones a EE.UU. — fortaleza pero también riesgo de concentración. Meta estratégica: diversificar.",
          "6 estados generan 60% de exportaciones. Comercio intrafirma: 40-50% del comercio exterior mexicano.",
          "Patrón exportador altamente concentrado: un producto líder por capítulo arancelario, un destino dominante, pocas entidades federativas activas.",
          "Oportunidad para diversificar: Alianza del Pacífico, CPTPP, TLCUEM, mercados asiáticos y medio oriente.",
        ],
        highlight: "No concentrar más del 30% de las exportaciones en un solo país es una regla de gestión de riesgos.",
      },
    ],
  },
  s11: {
    bloque: "BLOQUE 3 - El Mercado",
    bloqueTitulo: "Capítulo 3: Análisis y Selección del Mercado Meta",
    titulo: "Medición del Mercado y Barreras",
    objetivo: "Cuantificar el mercado potencial y comprender las barreras arancelarias y no arancelarias.",
    slides: [
      {
        title: "Medición del Mercado: TAM, SAM, SOM",
        content: [
          "Consumo Nacional Aparente (CNA) = Producción + Importaciones - Exportaciones. Mide la demanda potencial total.",
          "Proyección en 3 escenarios: conservador (CAGR 1.5%), base (3.2%), optimista (5.5%). Mínimo 5 años de proyección.",
          "Fuentes gratuitas: TradeMap, Data México, UN Comtrade, MacMap, USITC DataWeb, Eurostat. Fuentes de paga: Euromonitor Passport, Statista, Mordor Intelligence.",
          "TAM (Total Addressable Market) → SAM (Serviceable) → SOM (Serviceable Obtainable). Ejemplo realista: SOM 2.1% año 1 → 7.1% año 5.",
        ],
        highlight: "No confundir el mercado total (TAM, billones) con lo que realmente puedes capturar (SOM, miles).",
      },
      {
        title: "Barreras Arancelarias y Tratados de México",
        content: [
          "Aranceles: NMF (promedio EE.UU. 3.4%, UE 5.2%, Japón 4.3%, China 7.5%), preferencial (bajo TLC), general, estacional, compuesto.",
          "T-MEC: VCR 75% para vehículos ligeros (vs 62.5% en TLCAN), 40-45% contenido de valor laboral a $16 USD/hr. Revisión programada 2026.",
          "CPTPP: 11 países, acumulación de origen. TLCUEM: 99% eliminación arancelaria, 340 indicaciones geográficas mexicanas protegidas (tequila, mezcal, mango Ataúlfo).",
          "Principales barreras arancelarias por destino: Corea del Sur 30% para aguacate (sin TLC), India 30-40% en alimentos.",
        ],
        highlight: "Un TLC puede significar 0% vs 30% de arancel. Esa diferencia define la viabilidad del proyecto.",
      },
      {
        title: "Barreras No Arancelarias",
        content: [
          "Barreras sanitarias y fitosanitarias (SPS): LMR (límites máximos de residuos), regulaciones OGM, trazabilidad, protocolos cuarentenarios.",
          "Barreras técnicas al comercio (TBT): etiquetado, empaque, CE marking, FCC, certificaciones obligatorias específicas del país destino.",
          "Defensa comercial: antidumping, cuotas compensatorias, salvaguardas. Pueden cerrar un mercado de la noche a la mañana.",
          "Barreras administrativas: licencias de importación, cupos, restricciones cambiarias, contenido local obligatorio.",
          "Ejemplo: exportar miel a la UE requiere plan de monitoreo de residuos, certificación orgánica, y trazabilidad desde apiario.",
        ],
        highlight: "Las barreras no arancelarias matan más proyectos de exportación que los aranceles.",
      },
    ],
  },
  s12: {
    bloque: "BLOQUE 3 - El Mercado",
    bloqueTitulo: "Capítulo 3: Análisis y Selección del Mercado Meta",
    titulo: "Segmentación, Precio y Competencia",
    objetivo: "Segmentar el mercado, definir la estrategia de precios internacionales y analizar a la competencia.",
    slides: [
      {
        title: "Segmentación del Mercado",
        content: [
          "B2C: criterios geográficos, demográficos, psicográficos, conductuales. Principio de Pareto: 80% del consumo en 20% de los consumidores.",
          "B2B: criterios firmográficos, operativos, enfoque de compra, situacionales, características del comprador.",
          "Estrategia recomendada para PYMEs: CONCENTRACIÓN en un solo segmento donde la autenticidad mexicana sea ventaja.",
          "Canales: importadores-distribuidores, fabricantes (insumos), cadenas retail, foodservice (HORECA), gobierno, e-commerce.",
          "Segmentación efectiva debe ser: Medible, Accesible, Sustancial, Diferenciable, Accionable.",
        ],
        highlight: "Mejor dominar un nicho pequeño que ser irrelevante en un mercado masivo.",
      },
      {
        title: "Estrategia de Precios y Cadena de Márgenes",
        content: [
          "Factores: disposición a pagar, precios de competidores, estructura de costos completa, márgenes de intermediación, tipo de cambio.",
          "Estrategias: penetración (precio bajo para ganar mercado), descremado (precio alto, nicho premium), paridad competitiva, costo-plus (piso mínimo), basado en valor.",
          "Cadena completa de márgenes: Exportador → Importador (20-40%) → Mayorista → Retailer (15-60%) → Consumidor final (+IVA).",
          "Ejemplo real: mermelada gourmet EXW México $2.59 CAD → CIF $2.97 → +35% distribuidor → retailer $4.25 → +25% margen + IVA → consumidor $6.00 CAD. EXW es solo 43% del precio final.",
        ],
        highlight: "El precio EXW es la punta del iceberg. La cadena de intermediación puede multiplicarlo por 2.5x.",
      },
      {
        title: "Análisis de la Competencia",
        content: [
          "Productores locales (ventajas: sin aranceles, conocimiento del consumidor, canales establecidos, marcas posicionadas).",
          "Proveedores externos (competidores directos del exportador): analizar país de origen, marca, presentación, precio en mercado destino, canales, posicionamiento, participación de mercado.",
          "Reacción de competidores ante nueva entrada: reducción de precios, intensificación de promociones, productos imitación, presión a distribuidores, lobby regulatorio.",
          "Estrategia recomendada: diferenciación por origen mexicano + enfoque en nichos desatendidos + relaciones sólidas con distribuidores + innovación continua + certificaciones como barrera de entrada.",
          "Ejemplo: mermeladas en Canadá — EE.UU. domina 44% (precio bajo), Francia/Italia 28.5% (premium), México solo 2.1% pero creciendo +18.5% CAGR con ventaja T-MEC.",
        ],
        highlight: "Si no puedes ser el más barato, sé el más auténtico. La denominación de origen mexicana es una ventaja incomparable.",
      },
    ],
  },
  s13: {
    bloque: "BLOQUE 3 - El Mercado",
    bloqueTitulo: "Capítulo 3: Análisis y Selección del Mercado Meta",
    titulo: "Pagos Internacionales e INCOTERMS 2020",
    objetivo: "Dominar los medios de pago internacional y los 11 INCOTERMS 2020.",
    slides: [
      {
        title: "Modalidades de Pago Internacional",
        content: [
          "Del más al menos seguro para el exportador: Anticipo → Carta de crédito (UCP 600) → Cobranza documentaria (URC 522) → Cuenta abierta.",
          "Carta de crédito: irrevocable, confirmada (elimina riesgo país del comprador), a la vista, pago diferido, standby (garantía).",
          "Cobranza documentaria: D/P (documentos contra pago, más seguro) vs D/A (documentos contra aceptación, más riesgo).",
          "Cuenta abierta: predomina en comercio entre países desarrollados. Máximo riesgo para el exportador.",
          "Mitigación: seguro de crédito a la exportación (Bancomext hasta 85%), factoring internacional, forfaiting, standby LC.",
        ],
        highlight: "Para el primer cliente en un nuevo país: carta de crédito confirmada, siempre. Sin excepciones.",
      },
      {
        title: "INCOTERMS 2020: Los 11 Términos",
        content: [
          "Modos de transporte: Grupo E (EXW), Grupo F (FCA, FAS, FOB), Grupo C (CFR, CIF, CPT, CIP), Grupo D (DAP, DPU, DDP).",
          "EXW (Ex Works): mínimo obligación del vendedor, máximo riesgo del comprador.",
          "FOB (Free On Board): el más usado en México. Vendedor entrega a bordo del buque. Riesgo transfiere al cruzar la borda.",
          "CIF (Cost, Insurance, Freight): preferido por compradores (fácil comparación). Vendedor contrata transporte y seguro mínimo.",
          "DDP (Delivered Duty Paid): máximo riesgo y costo para el vendedor. La 'puerta a puerta'.",
          "Cambio INCOTERMS 2020: CIP ahora requiere cobertura de seguro 110% (antes 100%).",
        ],
        highlight: "Los INCOTERMS determinan QUÉ está incluido en tu precio de exportación. Elegir mal = regalar margen o perder clientes.",
      },
      {
        title: "INCOTERMS en la Práctica",
        content: [
          "DAP/DPU reemplazan DDU/DAT desde versión 2010. DPU: único término donde entrega = descarga en terminal.",
          "Recomendación para PYMEs exportadoras: FOB (controlas hasta puerto de origen) o CIF (más atractivo para comprador).",
          "NUNCA ofrecer DDP sin conocer: a) aranceles exactos del país destino, b) costos de despacho aduanero en destino, c) IVA local, d) costos de transporte interno.",
          "Los INCOTERMS impactan directamente: obligaciones de entrega, transferencia de riesgo, reparto de costos, obligaciones de seguro, trámites aduaneros.",
          "Caso práctico: EXW vs FOB vs CIF para exportación de aguacate a Japón. CIF incluye flete marítimo internacional + seguro.",
        ],
        highlight: "Incluir el INCOTERM correcto en CADA cotización. 'FOB Manzanillo' no es lo mismo que 'FOB Veracruz'.",
      },
    ],
  },
  s14: {
    bloque: "BLOQUE 3 - El Mercado",
    bloqueTitulo: "Capítulo 3: Análisis y Selección del Mercado Meta",
    titulo: "Logística, Contratos y Marketing Internacional",
    objetivo: "Diseñar la cadena logística, formalizar contratos internacionales e implementar la estrategia de marketing.",
    slides: [
      {
        title: "Logística Internacional",
        content: [
          "Cadena logística completa: transporte interno → aduana origen → transporte internacional (marítimo 80% del volumen global) → aduana destino → última milla.",
          "Puertos clave en México: Manzanillo, Lázaro Cárdenas, Veracruz, Altamira. FCL (contenedor completo) vs LCL (carga consolidada).",
          "Costos ocultos: handling charges, customs brokerage, almacenaje en puerto, demurrage/detention, inspecciones fitosanitarias.",
          "Documentación esencial: factura comercial, packing list, certificado de origen, conocimiento de embarque (B/L), pedimento de exportación.",
          "Seguro de carga: 0.3% del valor CIF. NUNCA exportar sin él.",
        ],
        highlight: "Subestimar costos logísticos es la causa #1 de pérdidas en primeras exportaciones.",
      },
      {
        title: "Contratos Internacionales y Marketing Mix",
        content: [
          "Contratos modelo: ICC, UNIDROIT, CISG (Convención de Viena). México es signatario de la Convención de Nueva York (arbitraje).",
          "Cláusulas esenciales: objeto, precio, entrega/INCOTERMS, pago, garantías, fuerza mayor, ley aplicable, resolución de disputas.",
          "CISG se aplica automáticamente a compraventa internacional entre países signatarios, salvo que se excluya explícitamente.",
          "Marketing mix internacional: adaptar producto, precio, plaza y promoción por mercado. Lo que funciona en México puede fracasar en Japón.",
          "Estrategias de entrada: exportación directa, agente, distribuidor, joint venture, subsidiaria, franquicia, licencia, e-commerce, alianza estratégica.",
        ],
        highlight: "El arbitraje es preferible a litigio judicial: más rápido, más barato y con árbitros especializados en comercio internacional.",
      },
      {
        title: "Marketing Digital, Big Data y Plataformas B2B/B2C",
        content: [
          "Marketing digital internacional: SEO multilingüe, Google Ads segmentado por país, LinkedIn para B2B, Instagram/TikTok para productos de consumo.",
          "Inteligencia de mercados con big data: análisis de tendencias de importación en tiempo real con TradeMap y Data México. IA para predicción de demanda.",
          "Plataformas B2B: Alibaba.com (200+ países), Amazon Business, Europages (Europa), Mercado Libre (LATAM).",
          "Showrooms virtuales con realidad aumentada: el comprador visualiza el producto en contexto sin envío de muestras físicas.",
          "Ferias internacionales: estrategia pre-feria (prospección), durante feria (reuniones calificadas), post-feria (seguimiento 48h). Presupuesto: $80,000-$250,000 MXN por feria.",
        ],
        highlight: "En 2026, si no tienes presencia digital internacional, no existes para el 90% de los compradores.",
      },
    ],
  },
  s15: {
    bloque: "BLOQUE 4 - Las Finanzas",
    bloqueTitulo: "Capítulo 4: Análisis y Evaluación Financiera",
    titulo: "Información Financiera y Requerimientos de Inversión",
    objetivo: "Analizar la situación financiera actual y cuantificar la inversión necesaria para el proyecto exportador.",
    slides: [
      {
        title: "Información Financiera Histórica",
        content: [
          "Estados financieros auditados de los últimos 3-5 años: balance general, estado de resultados, flujo de efectivo.",
          "Experiencia crediticia: historial con bancos, líneas de crédito utilizadas, cumplimiento de pagos, garantías otorgadas.",
          "Cifras relevantes: ventas totales, utilidad bruta y neta, activos totales, pasivos, capital contable, EBITDA.",
          "Comparativos: evolución de la empresa vs. promedio de la industria, principales competidores nacionales, y empresas similares que ya exportan.",
        ],
        highlight: "La solidez financiera es lo primero que evalúa un banco de desarrollo como Bancomext.",
      },
      {
        title: "Premisas para Proyecciones",
        content: [
          "Variables macroeconómicas: inflación México (3.8% → 3.0%), inflación EE.UU. (2.7% → 2.0%), PIB México (2.0% → 2.5%).",
          "Tasas de interés: Banxico (8.5% → 6.0%), FED (3.75% → 2.5%). Tipo de cambio: $18.80 → $20.00 MXN/USD.",
          "WACC (Costo Promedio Ponderado de Capital): Kd = TIIE + spread (~13.25%), Ke = 14%-18% (CAPM). WACC preliminar ≈ 13.5%.",
          "Salarios: incrementos anuales +8% a +12% (presión por reformas laborales). Productividad: mejora 3-5% anual con automatización.",
          "Las proyecciones son tan buenas como sus premisas. Documentar y justificar CADA supuesto.",
        ],
        highlight: "Nunca asumir que el peso se depreciará para inflar artificialmente los ingresos por exportación.",
      },
      {
        title: "Requerimientos de Inversión y Fuentes de Fondeo",
        content: [
          "Capital de trabajo (método de desplazamiento): (Costo de ventas / 365) × ciclo de caja proyectado. Ejemplo: ($40M / 365) × 85 días = $9.32M MDP.",
          "Términos de crédito típicos: México 30 días, EE.UU. 45-60, LATAM 60-90, Europa 60-120 días.",
          "Inversión en activos fijos + intangibles: maquinaria, ampliación, certificaciones, ERP, registro de marcas, capacitación.",
          "Fuentes: Bancomext (crédito TIIE + 2.5-5%, factoring, garantías), banca comercial, NAFIN, FIRA, programas gubernamentales, crowdfunding, capital de riesgo.",
          "Fondos internacionales: BID Lab ($500K-$2M), IFC ($5M-$200M), CAF. Fintech: Marco Financial, Nuvocargo, Clara, Konfío.",
        ],
        highlight: "Bancomext tiene líneas específicas para nearshoring a TIIE + 2.5%. Es el momento de aprovecharlas.",
      },
    ],
  },
  s16: {
    bloque: "BLOQUE 4 - Las Finanzas",
    bloqueTitulo: "Capítulo 4: Análisis y Evaluación Financiera",
    titulo: "Proyecciones y Evaluación Financiera",
    objetivo: "Proyectar flujos, calcular punto de equilibrio, y evaluar la rentabilidad con VPN y TIR.",
    slides: [
      {
        title: "Punto de Equilibrio y Flujo de Efectivo",
        content: [
          "Punto de equilibrio (unidades) = Costos Fijos / (Precio - Costo Variable unitario).",
          "PE ($) = Costos Fijos / (1 - Costo Variable/Precio) = CF / Margen de Contribución %.",
          "Margen de seguridad = (Ventas - PE) / Ventas × 100. Mínimo recomendado: 25% para proyectos de exportación.",
          "Flujo de efectivo proyectado a 5 años (año 1 mensual, años 2-5 anual). Separar cobranza nacional vs. exportación (diferentes plazos).",
          "Recuperación de IVA acreditable: considerar rezago de 3-6 meses del SAT.",
        ],
        highlight: "Un proyecto puede ser rentable contablemente pero quebrar por falta de flujo de efectivo.",
      },
      {
        title: "Estados Financieros Proyectados y Razones",
        content: [
          "Estados proforma: estado de resultados, balance general, origen y aplicación de fondos. Segmentar mercado doméstico vs. exportación.",
          "Razones de liquidez: razón circulante > 2.0, prueba ácida > 1.0. Endeudamiento: deuda total / activos < 0.5.",
          "Rentabilidad: ROE (Return on Equity) > 15%, ROA (Return on Assets) > 10%, margen neto > 10%.",
          "Apalancamiento operativo y financiero: AO mide sensibilidad de utilidad operativa a ventas. AF mide sensibilidad de utilidad neta a utilidad operativa.",
          "EVA (Valor Económico Agregado): utilidad operativa después de impuestos - (capital invertido × WACC). Si EVA > 0, el proyecto crea valor.",
        ],
        highlight: "Las razones financieras cuentan la historia que los números absolutos no pueden.",
      },
      {
        title: "VPN, TIR y Análisis de Sensibilidad",
        content: [
          "VPN (Valor Presente Neto): si VPN > 0, el proyecto crea valor. Fórmula: sumatoria de flujos descontados al WACC - inversión inicial.",
          "TIR (Tasa Interna de Retorno): si TIR > WACC, el proyecto es rentable. Representa el rendimiento porcentual de la inversión.",
          "Análisis de escenarios: pesimista (precio -5%, costo +5%), base, optimista (precio +5%, costo -5%).",
          "Sensibilidad: identificar variables críticas por elasticidad. Típicamente: precio USD (más sensible), costo variable, tipo de cambio.",
          "Simulación Monte Carlo: probabilidad de que VPN < 0. Si es <10%, el proyecto es robusto. VaR (Value at Risk) a 95% de confianza.",
          "Ejemplo numérico: VPN = $81.75M MDP con WACC 13.5%. TIR = 68.5%. Payback = 1.8 años. Aún en escenario pesimista, VPN = +$8.2M.",
        ],
        highlight: "El VPN te dice si el proyecto vale la pena. La TIR te dice qué tan bueno es comparado con otras opciones.",
      },
    ],
  },
  s17: {
    bloque: "BLOQUE 4 - Las Finanzas",
    bloqueTitulo: "Capítulo 4: Análisis y Evaluación Financiera",
    titulo: "Fintech, Blockchain y Gestión de Riesgos Financieros",
    objetivo: "Explorar las nuevas herramientas financieras digitales para el comercio exterior.",
    slides: [
      {
        title: "Fintech para Comercio Exterior",
        content: [
          "E-factoring: tasas 1.5-3% vs 3-6% de banca tradicional. Financiamiento en 24-72 horas. Plataformas: Marco Financial (LATAM), Nuvocargo (logística + financiamiento EE.UU./México).",
          "Supply chain finance: grandes compradores (empresas ancla) permiten que sus proveedores PYME accedan a tasas preferenciales.",
          "Tarjetas corporativas digitales: Clara, Stripe Capital, PayPal Working Capital. Aprobación rápida, sin garantías reales.",
          "Pagos digitales transfronterizos: Wise (0.4-1%), Payoneer, OFX, Airwallex. Mucho más baratos que transferencias SWIFT tradicionales (2-5% + comisiones ocultas).",
          "Insurtech: seguros de crédito y carga contratados 100% en línea, con cotización en minutos.",
        ],
        highlight: "Las fintech están democratizando el acceso a servicios financieros que antes eran exclusivos de grandes corporativos.",
      },
      {
        title: "Criptoactivos y Blockchain en Comercio Exterior",
        content: [
          "Blockchain para trazabilidad: IBM Food Trust, VeChain, OriginTrail. Registro inmutable de cada etapa de la cadena de suministro.",
          "Smart contracts: contratos autoejecutables que liberan pago automáticamente al confirmarse entrega (oráculo de IoT). Eliminan riesgo de impago y reducen costo de intermediación.",
          "Stablecoins (USDC, USDT): pagos internacionales en minutos, no días. Costo casi cero. Volatilidad mínima por estar ancladas al USD.",
          "Tokenización de activos: financiamiento respaldado por inventarios o cuentas por cobrar tokenizados.",
          "Riesgos regulatorios: estatus legal variable por país. Cumplimiento AML/KYC obligatorio.",
        ],
        highlight: "Blockchain no es solo criptomonedas: es una infraestructura de confianza para el comercio global.",
      },
      {
        title: "Gestión de Riesgos Financieros",
        content: [
          "Riesgo cambiario: forwards (compromiso firme), opciones (derecho sin obligación, cuesta prima), cobertura natural (ingresos y costos en misma moneda).",
          "Riesgo de tasa de interés: créditos a tasa fija vs variable. Swaps de tasa de interés (IRS) para PYMEs con créditos grandes.",
          "Riesgo de crédito: seguro de crédito (Bancomext, Atradius, Coface), diversificación de clientes (ninguno >20% de ventas), carta de crédito confirmada.",
          "Programa de recompra de acciones: permite que inversionistas de capital de riesgo recuperen su inversión sin vender la empresa. Valuación por múltiplo de EBITDA (5x-8x para PYME exportadora).",
          "Meta: demostrar que el proyecto puede pagar sus deudas, remunerar a los accionistas y resistir escenarios adversos.",
        ],
        highlight: "En exportación, gestionar riesgos financieros es tan importante como vender. Un mal año cambiario puede borrar 3 años de utilidades.",
      },
    ],
  },
  s18: {
    bloque: "BLOQUE 5 - Cierre",
    bloqueTitulo: "Capítulo 5: Resumen Ejecutivo",
    titulo: "Resumen Ejecutivo, Pitch Deck y Cierre del Curso",
    objetivo: "Sintetizar el plan de negocios en un resumen ejecutivo, construir un pitch deck profesional y cerrar el aprendizaje.",
    slides: [
      {
        title: "El Resumen Ejecutivo",
        content: [
          "El resumen ejecutivo es un DOCUMENTO DE VENTAS, no un extracto del plan. Debe convencer en 5 minutos de lectura.",
          "Elementos: 1) Antecedentes de la empresa (quién eres, qué haces, desde cuándo), 2) Producto/servicio (ventaja competitiva en mercados extranjeros), 3) Planteamiento del proyecto (qué, cuánto, a qué precio), 4) Mercado meta (selección, tamaño, competencia), 5) Requerimientos y proyecciones financieras (inversión, VPN, TIR, payback).",
          "Incluir megatendencias 2026-2030 que validan el proyecto: nearshoring, TLCs estratégicos, transformación del consumo, digitalización del comercio, crecimiento de clase media global.",
          "Objetivos SMART con KPI específicos, metas cuantitativas, plazos definidos y responsables.",
        ],
        highlight: "El resumen ejecutivo es lo ÚNICO que muchos inversionistas y funcionarios de banca de desarrollo leerán.",
      },
      {
        title: "Pitch Deck de 10 Slides",
        content: [
          "Estructura para inversionistas: 1) Portada, 2) Problema/Oportunidad, 3) Solución, 4) Mercado (TAM/SAM/SOM), 5) Modelo de negocio, 6) Tracción (logros, clientes, ventas), 7) Equipo, 8) Competencia (matriz), 9) Finanzas (VPN, TIR, uso de fondos), 10) Ask (cuánto se busca y para qué).",
          "Para Bancomext: énfasis en viabilidad, capacidad de pago, generación de divisas. Para compradores internacionales: calidad, certificaciones, confiabilidad de suministro.",
          "Storytelling corporativo: 5 elementos — 1) Origen (el 'por qué'), 2) Conflicto (el antagonista a vencer), 3) Transformación (el 'cómo'), 4) Impacto (resultados medibles + testimonios), 5) Visión (el futuro).",
          "Casos mexicanos exitosos: Bimbo (orígenes humildes + escala global), José Cuervo (tradición + exclusividad), Cemex (innovación + comunidad).",
        ],
        highlight: "Un pitch deck excepcional puede conseguir financiamiento donde un plan de 100 páginas fracasa.",
      },
      {
        title: "Herramientas y Recursos de Apoyo",
        content: [
          "Bancomext: Programa de Formación Exportadora (gratuito, en línea), Diagnóstico Exportador personalizado, créditos, garantías, seguro de crédito.",
          "Secretaría de Economía: IMMEX, PROSEC, Drawback, Exporta Fácil, SICEX. Ventanilla Digital Mexicana de Comercio Exterior (VDMCE).",
          "Herramientas digitales: TradeMap y Data México (inteligencia de mercados), MacMap (aranceles), INCOTERMS 2020 app de ICC, Canva/PowerPoint/Pitch.com para presentaciones.",
          "Apéndice del PLANEX: soluciones a ejercicios, guía paso a paso (9 etapas, 4-6 meses), checklist por etapa, glosario de 45+ términos actualizados.",
        ],
        highlight: "El ecosistema de apoyo al exportador mexicano en 2026 es más completo que nunca. Hay que saber aprovecharlo.",
      },
      {
        title: "Cierre: El Camino del Exportador",
        content: [
          "El PLANEX no es un requisito burocrático: es la herramienta más poderosa para reducir la incertidumbre de la internacionalización.",
          "Una empresa que completa su PLANEX tiene claridad sobre: quién es, qué vende, a quién, cómo llega, cuánto invierte y cuánto gana.",
          "México está en el mejor momento de su historia para exportar: nearshoring, 14 TLCs, infraestructura logística, ecosistema fintech, programas de apoyo.",
          "La diferencia entre una PYME que exporta y una que no: la primera invirtió tiempo en planear. La segunda improvisó.",
          "El mundo necesita productos mexicanos auténticos, de calidad y con historia. Este curso te da las herramientas. El siguiente paso es usarlas.",
        ],
        highlight: "No es el más fuerte ni el más inteligente el que sobrevive, sino el que mejor se adapta al cambio. — Atribuido a Darwin.",
      },
    ],
  },
};

// ─── Icon Mappers ──────────────────────────────────────────────
const slideIconMap: [string[], React.ComponentType<{ size?: number; className?: string }>][] = [
  [["constitución","legal","sociedad","societaria","jurídica"], Scale],
  [["misión","visión","objetivos","metas","estrategia","antecedentes","dirección","propósito"], Target],
  [["estructura","personal","administrativa","talento","organigrama","equipo","capacitación"], Users],
  [["políticas","condiciones","pago","endeudamiento","dividendos","laboral"], FileCheck],
  [["instalaciones","activos","maquinaria","equipo","bienes"], Factory],
  [["riesgos","seguros","cobertura","cambiario","político"], Shield],
  [["tecnología","digital","industria","4.0","erp","ciberseguridad","software"], Cpu],
  [["cumplimiento","obligaciones","fiscal","permisos","registro"], CheckCircle2],
  [["foda","fortalezas","debilidades","oportunidades","amenazas"], PieChart],
  [["esg","gobierno","corporativo","sostenibilidad","ambiental","social"], Leaf],
  [["nearshoring","digitalización","transformación","global"], Globe2],
  [["producto","descripción","clasificación","arancelaria","fracción","servicio"], Package],
  [["proveeduría","cadena","suministro","proveedor","insumos"], Truck],
  [["subcontratación","outsourcing","maquila","reforma"], Blocks],
  [["costos","producción","fijos","variables","estructura","precio"], Calculator],
  [["fomento","programas","im mex","prosec","drawback","iva","apoyo"], Award],
  [["intangibles","propiedad","intelectual","patentes","marcas","registro"], Fingerprint],
  [["proceso","productivo","cuello","botella","etapas","producción"], Layers],
  [["inventarios","gestión","stock","rotación","reorden"], Boxes],
  [["imagen","etiquetado","marketing","digital","website","catálogo"], Palette],
  [["envase","empaque","embalaje","nimf-15","paletizado"], Container],
  [["normas","certificaciones","iso","fda","fsma","haccp","calidad"], BadgeCheck],
  [["investigación","desarrollo","i+d","innovación","six","sigma","lean","trazabilidad"], FlaskConical],
  [["respaldo","garantía","servicio","postventa","soporte"], MessageSquare],
  [["comercio","electrónico","e-commerce","marketplace","amazon","mercadolibre","transfronterizo"], ShoppingCart],
  [["economía","circular","sostenibilidad","huella","carbono","verde","reciclable"], Recycle],
  [["industria","panorama","global","mundo","exportaciones"], Globe],
  [["selección","mercado","meta","filtrado","ponderación","matriz"], Search],
  [["medición","tam","sam","som","consumo","aparente","proyección"], ChartNoAxesColumn],
  [["barreras","arancelarias","no arancelarias","tratados","t-mec","cptpp","tlcuem"], ShieldCheck],
  [["segmentación","segmento","cliente","b2c","b2b","consumidor"], PieChart],
  [["precio","márgenes","cadena","margen","pricing"], DollarSign],
  [["competencia","competidores","análisis","diferenciación"], TrendingUp],
  [["pagos","modalidades","carta","crédito","cobranza","cuenta","abierta","financiamiento"], CreditCard],
  [["incoterms","exw","fob","cif","ddp","transporte"], Ship],
  [["logística","cadena","puertos","flete","aduana","transporte"], Truck],
  [["contratos","internacionales","compraventa","c isg","arbitraje"], Scale],
  [["marketing","mezcla","mercadotecnia","promoción","ferias","canales"], Megaphone],
  [["financiera","histórica","crediticia","cifras","comparativos","premisas","proyecciones","requerimientos","inversión","fondeo","fuentes"], BarChart3],
  [["punto","equilibrio","flujo","efectivo","estados","resultados","balance","razones","vpn","tir","sensibilidad","rentabilidad"], LineChart],
  [["fintech","blockchain","criptoactivos","digitales","smart","contracts","programa","recompra","acciones"], Network],
  [["resumen","ejecutivo","pitch","deck","storytelling","cierre"], Rocket],
];

function getSlideIcon(title: string): React.ComponentType<{ size?: number; className?: string }> {
  const t = title.toLowerCase();
  for (const [keywords, icon] of slideIconMap) {
    if (keywords.some((k) => t.includes(k))) return icon;
  }
  return BookOpen;
}

function getBulletIcon(text: string, _idx: number): React.ComponentType<{ size?: number; className?: string }> {
  const t = text.toLowerCase();
  if (t.includes("certificaci") || t.includes("norma") || t.includes("iso") || t.includes("fda") || t.includes("haccp")) return BadgeCheck;
  if (t.includes("riesgo") || t.includes("pérdida") || t.includes("penal") || t.includes("rechazo")) return AlertTriangle;
  if (t.includes("costo") || t.includes("inversión") || t.includes("precio") || t.includes("financ") || t.includes("capital") || t.includes("crédito")) return Calculator;
  if (t.includes("export") || t.includes("internacional") || t.includes("país") || t.includes("mercado") || t.includes("global")) return Globe;
  if (t.includes("legal") || t.includes("ley") || t.includes("jurídic") || t.includes("constituci")) return Scale;
  if (t.includes("proveedor") || t.includes("cadena") || t.includes("suministro") || t.includes("insumo")) return Truck;
  if (t.includes("logístic") || t.includes("flete") || t.includes("aduana") || t.includes("puerto") || t.includes("transporte")) return Ship;
  if (t.includes("digital") || t.includes("tecnolog") || t.includes("software") || t.includes("erp") || t.includes("web") || t.includes("internet")) return Cpu;
  if (t.includes("pago") || t.includes("carta de") || t.includes("moneda") || t.includes("divisa")) return CreditCard;
  if (t.includes("cliente") || t.includes("comprador") || t.includes("consumidor") || t.includes("usuario")) return Users;
  if (t.includes("marca") || t.includes("patente") || t.includes("intelectual") || t.includes("registro")) return Fingerprint;
  if (t.includes("producción") || t.includes("fábrica") || t.includes("planta") || t.includes("proceso") || t.includes("capacidad")) return Factory;
  if (t.includes("estrateg") || t.includes("misión") || t.includes("visión") || t.includes("objetivo") || t.includes("meta")) return Target;
  if (t.includes("promoci") || t.includes("marketing") || t.includes("publicidad") || t.includes("feria")) return Megaphone;
  if (t.includes("calidad") || t.includes("trazabilidad") || t.includes("inspecci") || t.includes("auditor")) return Gauge;
  if (t.includes("contrato") || t.includes("compraventa") || t.includes("cláusula") || t.includes("acuerdo")) return Handshake;
  if (t.includes("sostenib") || t.includes("ambiental") || t.includes("verde") || t.includes("carbono") || t.includes("residuo")) return Leaf;
  if (t.includes("equipo") || t.includes("personal") || t.includes("empleado") || t.includes("talento") || t.includes("laboral")) return Briefcase;
  if (t.includes("dato") || t.includes("estadístic") || t.includes("indicador") || t.includes("medición") || t.includes("kpi")) return BarChart3;
  if (t.includes("innovac") || t.includes("investigación") || t.includes("desarrollo") || t.includes("i+d")) return Zap;
  if (t.includes("impuesto") || t.includes("fiscal") || t.includes("sat") || t.includes("tributario")) return Landmark;
  if (t.includes("empaque") || t.includes("envase") || t.includes("embalaje") || t.includes("etiqueta")) return Container;
  if (t.includes("tiempo") || t.includes("plazo") || t.includes("fecha") || t.includes("cronograma")) return Clock;
  return CheckCircle2;
}

// ─── Flatten Sessions into Individual Slides ────────────────────
type FlatSlide = {
  id: string;
  sessionId: string;
  sessionTitle: string;
  sessionLabel: string;
  bloque: string;
  accent: string;
  slide: SlideData;
  slideNum: number;
  totalInSession: number;
};

const allSlides: FlatSlide[] = [];
const slideOrder: string[] = [];

navItems.filter(n => n.id !== "hero").forEach((item) => {
  const session = sessions[item.id];
  if (!session) return;
  session.slides.forEach((slide, idx) => {
    const id = `${item.id}-${idx + 1}`;
    const flatSlide: FlatSlide = {
      id,
      sessionId: item.id,
      sessionTitle: session.titulo,
      sessionLabel: item.label,
      bloque: session.bloque,
      accent: item.accent,
      slide,
      slideNum: idx + 1,
      totalInSession: session.slides.length,
    };
    allSlides.push(flatSlide);
    slideOrder.push(id);
  });
});

// ─── Main Component ─────────────────────────────────────────────
export default function PresentationPage() {
  const [activeSlide, setActiveSlide] = useState("hero");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const ids = ["hero", ...slideOrder];
    const scrollPos = window.scrollY + window.innerHeight / 3;
    for (let i = ids.length - 1; i >= 0; i--) {
      const el = document.getElementById(ids[i]);
      if (el && el.offsetTop <= scrollPos) {
        setActiveSlide(ids[i]);
        return;
      }
    }
  }, []);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 80;
      window.scrollTo({ top: el.offsetTop - navHeight, behavior: "smooth" });
    }
  }, []);

  const nextSlide = useCallback(() => {
    const ids = ["hero", ...slideOrder];
    const idx = ids.findIndex((id) => id === activeSlide);
    if (idx < ids.length - 1) scrollTo(ids[idx + 1]);
  }, [activeSlide, scrollTo]);

  const prevSlide = useCallback(() => {
    const ids = ["hero", ...slideOrder];
    const idx = ids.findIndex((id) => id === activeSlide);
    if (idx > 0) scrollTo(ids[idx - 1]);
  }, [activeSlide, scrollTo]);

  const goToSession = useCallback((sessionId: string) => {
    const first = allSlides.find((s) => s.sessionId === sessionId);
    if (first) scrollTo(first.id);
  }, [scrollTo]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [nextSlide, prevSlide]);

  const currentIdx = (["hero", ...slideOrder]).findIndex((id) => id === activeSlide);
  const totalSlides = slideOrder.length + 1;

  const activeSessionId = activeSlide.startsWith("s")
    ? activeSlide.split("-")[0]
    : null;

  // ─── Theme Toggle ──────────────────────────────────────────────
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      document.documentElement.classList.toggle("dark", stored === "dark");
    } else {
      const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefers ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefers);
    }
  }, [mounted]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  return (
    <>
      {/* ═══════ Bottom Navigator ═══════ */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-obsidian-900/95 backdrop-blur-xl border-t border-slate-200 dark:border-obsidian-600/40">
        <div className="max-w-full mx-auto px-3 py-2 flex items-center gap-1.5">
          <button onClick={prevSlide} className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-obsidian-700/50 text-slate-400 dark:text-text-muted hover:text-slate-700 dark:hover:text-text-primary transition-colors" title="Slide anterior">
            <ArrowLeft size={18} />
          </button>

          <div className="flex-1 flex items-center gap-1 overflow-x-auto scrollbar-none px-1">
            {navItems.map((item) => {
              const ac = accentColors[item.accent];
              const isActive = item.id === activeSessionId || (item.id === "hero" && activeSlide === "hero");
              const mobileLabel = item.id === "hero" ? "Portada" : item.label.replace(/^S\d+: /, "").slice(0, 14);
              const desktopLabel = item.label;
              return (
                <button
                  key={item.id}
                  onClick={() => item.id === "hero" ? scrollTo("hero") : goToSession(item.id)}
                  className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                    isActive
                      ? `${ac.bg} ${ac.text} border ${ac.border} shadow-sm`
                      : "text-slate-400 dark:text-text-muted hover:text-slate-600 dark:hover:text-text-secondary hover:bg-slate-100 dark:hover:bg-obsidian-700/30"
                  }`}
                  title={desktopLabel}
                >
                  <item.icon size={12} />
                  <span className="hidden sm:inline">{desktopLabel.length > 20 ? desktopLabel.slice(0, 17) + "\u2026" : desktopLabel}</span>
                  <span className="sm:hidden">{mobileLabel}</span>
                </button>
              );
            })}
          </div>

          <button onClick={nextSlide} className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-obsidian-700/50 text-slate-400 dark:text-text-muted hover:text-slate-700 dark:hover:text-text-primary transition-colors" title="Slide siguiente">
            <ArrowRight size={18} />
          </button>

          <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-obsidian-700/50 text-slate-400 dark:text-text-muted hover:text-slate-700 dark:hover:text-text-primary transition-colors ml-1" title={theme === "dark" ? "Modo claro" : "Modo oscuro"}>
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => {
              const contentData = navItems.filter(n => n.id !== "hero").map((item) => ({
                sessionTitle: sessions[item.id]?.titulo || item.label,
                slides: sessions[item.id]?.slides || [],
                bloque: sessions[item.id]?.bloque || "",
              }));
              fetch("/api/download-pptx", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ sessions: contentData, theme }),
              })
                .then((res) => res.blob())
                .then((blob) => {
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement("a");
                  a.href = url;
                  a.download = "PLANEX_2026_Presentacion.pptx";
                  a.click();
                  URL.revokeObjectURL(url);
                })
                .catch(() => alert("Error al generar PowerPoint"));
            }}
            className="p-2 rounded-lg bg-purple-500/20 text-purple-500 dark:text-accent-purple hover:bg-purple-500/30 transition-colors ml-1"
            title="Descargar PowerPoint"
          >
            <Download size={18} />
          </button>

          <span className="text-xs text-slate-400 dark:text-text-muted ml-2 font-mono min-w-[4rem] text-right hidden sm:inline">
            {currentIdx}/{totalSlides}
          </span>
        </div>
      </nav>

      {/* ═══════ Mobile Nav Overlay ═══════ */}
      {!mobileNavOpen && (
        <button
          onClick={() => setMobileNavOpen(true)}
          className="fixed bottom-20 right-4 z-50 p-3 rounded-full bg-purple-500 text-white shadow-lg hover:scale-110 transition-transform md:hidden"
        >
          <ChevronDown size={22} />
        </button>
      )}

      {mobileNavOpen && (
        <div className="fixed inset-0 z-[60] bg-white/98 dark:bg-obsidian-950/98 backdrop-blur-lg flex flex-col p-6 md:hidden">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold font-display text-slate-800 dark:text-white">PLANEX 2026</h2>
            <button onClick={() => setMobileNavOpen(false)} className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-obsidian-800 text-slate-500 dark:text-text-muted">
              <X size={24} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto space-y-1">
            {navItems.map((item) => {
              const ac = accentColors[item.accent];
              const isActive = item.id === activeSessionId || (item.id === "hero" && activeSlide === "hero");
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    item.id === "hero" ? scrollTo("hero") : goToSession(item.id);
                    setMobileNavOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all ${
                    isActive ? `${ac.bg} ${ac.text} border ${ac.border}` : "text-slate-600 dark:text-text-secondary hover:bg-slate-100 dark:hover:bg-obsidian-800/50"
                  }`}
                >
                  <item.icon size={18} />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* ═══════ HERO ═══════ */}
      <section id="hero" className="h-dvh flex items-center justify-center relative overflow-hidden snap-start">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-obsidian-950 dark:via-obsidian-900 dark:to-[#0a1628]" />
        <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-amber-100/60 dark:from-amber-500/5 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto">
          <div className="section-badge bg-amber-100 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-300 dark:border-amber-500/30 mb-6 sm:mb-8 text-[10px] sm:text-xs">
            Bancomext &middot; UNICEBA &middot; Edici&oacute;n 2026
          </div>
          <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 sm:mb-6 text-balance text-slate-900 dark:text-white">
            Plan de Negocios para Proyectos de Exportaci&oacute;n
          </h1>
          <div className="w-16 sm:w-20 h-[2px] bg-amber-500 mx-auto my-4 sm:my-6" />
          <p className="text-sm sm:text-lg md:text-xl text-slate-500 dark:text-text-secondary mb-6 sm:mb-8 max-w-xl mx-auto">
            Gu&iacute;a metodol&oacute;gica para la elaboraci&oacute;n de planes de negocio de exportaci&oacute;n en el entorno global actual
          </p>
          <p className="text-xs sm:text-sm text-slate-400 dark:text-text-muted mb-1">Curso completo &middot; 18 Sesiones &middot; {slideOrder.length} Slides</p>
          <p className="text-xs sm:text-sm text-slate-400 dark:text-text-muted">Actualizaci&oacute;n 2026: Lic. Guillermo Hern&aacute;ndez &amp; Ing. Rodolfo Ram&iacute;rez</p>
          <button
            onClick={() => scrollTo("s01-1")}
            className="mt-8 sm:mt-10 inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-amber-500 text-white hover:bg-amber-600 transition-colors font-semibold text-sm sm:text-base shadow-lg shadow-amber-500/25"
          >
            Comenzar curso <ArrowRight size={16} className="sm:size-[18px]" />
          </button>
        </div>
      </section>

      {/* ═══════ All Slides ═══════ */}
      {allSlides.map((fs) => {
        const ac = accentColors[fs.accent];
        const SlideIcon = getSlideIcon(fs.slide.title);
        const isFirstOfSession = fs.slideNum === 1;

        return (
          <section
            key={fs.id}
            id={fs.id}
            className="h-dvh flex flex-col justify-center relative overflow-hidden snap-start"
          >
            {/* Background */}
            <div className="absolute inset-0 bg-slate-50 dark:bg-obsidian-950" />
            <div className={`absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l ${ac.light} to-transparent opacity-40 dark:opacity-60`} />

            <div className="section-container relative z-10 flex flex-col justify-center h-full">
              {/* Session badge */}
              <div className="flex-shrink-0 mb-2 sm:mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
                <div className={`section-badge ${ac.bg} ${ac.text} border ${ac.border} text-[10px] sm:text-xs w-fit`}>
                  {fs.bloque}
                  {isFirstOfSession && <span className="hidden sm:inline"> \u2014 {fs.sessionTitle}</span>}
                </div>
                <span className={`text-[10px] sm:text-xs font-mono font-semibold px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-slate-100 dark:bg-obsidian-800 ${ac.text} w-fit`}>
                  Slide {fs.slideNum} de {fs.totalInSession} &middot; Sesi&oacute;n {fs.sessionId.replace("s","")}
                </span>
              </div>

              {/* Slide Card */}
              <div className="glass-card flex-1 min-h-0 flex flex-col p-4 sm:p-6 md:p-8 overflow-y-auto">
                {/* Header */}
                <div className="flex items-start gap-2 sm:gap-4 mb-3 sm:mb-5 pb-3 sm:pb-4 border-b border-slate-100 dark:border-obsidian-600/30">
                  <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl ${ac.bg} flex-shrink-0`}>
                    <SlideIcon size={20} className={ac.text + " sm:size-[26px]"} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-base sm:text-xl md:text-2xl font-bold font-display text-slate-800 dark:text-white leading-tight">
                      {fs.slide.title}
                    </h2>
                    <p className="text-[11px] sm:text-xs md:text-sm text-slate-400 dark:text-text-muted mt-0.5 sm:mt-1">
                      {fs.sessionTitle}
                    </p>
                  </div>
                </div>

                {/* Content Blocks */}
                <div className="space-y-2 sm:space-y-3 flex-1">
                  {fs.slide.content.map((bullet, i) => {
                    const BulletIcon = getBulletIcon(bullet, i);
                    return (
                      <div
                        key={i}
                        className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-slate-50 dark:bg-obsidian-800/20 border border-slate-100 dark:border-obsidian-600/20 hover:border-slate-200 dark:hover:border-obsidian-500/30 transition-all"
                      >
                        <div className={`p-1 sm:p-1.5 rounded-md sm:rounded-lg ${ac.bg} flex-shrink-0 mt-0.5`}>
                          <BulletIcon size={13} className={ac.text + " sm:size-[16px]"} />
                        </div>
                        <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-text-secondary leading-relaxed">
                          {bullet}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Highlight */}
                {fs.slide.highlight && (
                  <div className="mt-3 sm:mt-4 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-amber-50 to-transparent dark:from-amber-500/5 dark:to-transparent border-l-4 border-amber-500">
                    <div className="flex items-start gap-1.5 sm:gap-2">
                      <Quote size={14} className="text-amber-500 flex-shrink-0 mt-0.5 sm:size-[16px]" />
                      <p className="text-xs sm:text-sm md:text-base font-medium italic text-slate-700 dark:text-white">
                        {fs.slide.highlight}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        );
      })}

      {/* ═══════ Footer ═══════ */}
      <div className="text-center py-8 text-slate-400 dark:text-text-muted text-sm">
        <p>PLANEX 2026 &middot; Basado en la obra original de Bancomext</p>
        <p>M&eacute;xico &middot; Latinoam&eacute;rica &middot; Global</p>
      </div>
    </>
  );
}
