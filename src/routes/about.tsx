// src/routes/about.tsx
import { A } from "@solidjs/router";

const features = [
  {
    icon: "🛒",
    titulo: "Mercado",
    descripcion: "Compra y venta de cartas mediante publicaciones verificadas con fotos reales y condición detallada.",
    estado: "en desarrollo",
  },
  {
    icon: "🔄",
    titulo: "Intercambios",
    descripcion: "Sistema de tradeos entre coleccionistas con ofertas estructuradas y reputación de usuarios.",
    estado: "en desarrollo",
  },
  {
    icon: "📚",
    titulo: "Colecciones",
    descripcion: "Registro y seguimiento de cartas, progreso por set y estadísticas de tu colección.",
    estado: "en desarrollo",
  },
  {
    icon: "🏆",
    titulo: "Logros",
    descripcion: "Reconocimientos por completar sets, acumular cartas y alcanzar hitos dentro de la plataforma.",
    estado: "en desarrollo",
  },
  {
    icon: "🔍",
    titulo: "Verificación",
    descripcion: "Sistema de verificación por fotos e intermediación para operaciones de alto valor.",
    estado: "próximamente",
  },
  {
    icon: "⭐",
    titulo: "Reputación",
    descripcion: "Reputación pública por intercambios exitosos, construida por la comunidad a lo largo del tiempo.",
    estado: "próximamente",
  },
];

const juegos = [
  { icon: "⚡", nombre: "Pokémon TCG",          color: "#dcfce7", text: "#15803d" },
  { icon: "🐉", nombre: "Yu-Gi-Oh!",            color: "#fef9c3", text: "#a16207" },
  { icon: "🧙", nombre: "Magic: The Gathering", color: "#ede9fe", text: "#6d28d9" },
  { icon: "⚔️", nombre: "Otros TCG",            color: "#fce7f3", text: "#be185d" },
];

export default function About() {
  return (
    <main class="min-h-screen bg-[#f4f1eb] text-[#2f2a24]">

      {/* Hero */}
      <section class="max-w-7xl mx-auto px-8 py-20 border-b border-[#e2ddd7]">
        <p class="text-sm font-medium text-[#5f7866] mb-3 uppercase tracking-widest">
          Acerca de
        </p>
        <h1 class="text-6xl font-bold leading-tight max-w-3xl">
          Un marketplace hecho para coleccionistas de verdad.
        </h1>
        <p class="mt-6 text-xl text-[#5f564c] max-w-2xl leading-relaxed">
          CardVault nació porque la mayoría de los marketplaces se enfocan
          en las transacciones y olvidan lo más importante: la colección en sí.
          Acá el contexto importa.
        </p>

        {/* Juegos soportados */}
        <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:2rem;">
          {juegos.map((j) => (
            <span
              style={`background:${j.color};color:${j.text};
                      font-size:13px;font-weight:500;padding:6px 14px;
                      border-radius:999px;display:flex;align-items:center;gap:6px;`}
            >
              {j.icon} {j.nombre}
            </span>
          ))}
        </div>
      </section>

      {/* Visión */}
      <section class="max-w-7xl mx-auto px-8 py-20 border-b border-[#e2ddd7]">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center;">
          <div>
            <p class="text-sm font-medium text-[#5f7866] mb-3 uppercase tracking-widest">
              Nuestra visión
            </p>
            <h2 class="text-4xl font-bold leading-tight mb-6">
              Más allá de comprar y vender.
            </h2>
            <p class="text-[#5f564c] leading-relaxed mb-4">
              La mayoría de los marketplaces se limitan a conectar compradores
              con vendedores. CardVault busca ser el lugar donde vivís tu
              colección: sabés qué tenés, qué te falta, con quién intercambiaste
              y qué lograste.
            </p>
            <p class="text-[#5f564c] leading-relaxed">
              Cada carta tiene una historia. Acá podés contarla.
            </p>
          </div>

          {/* Stats decorativos */}
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
            {[
              { num: "52.341", label: "Cartas registradas" },
              { num: "4.120",  label: "Coleccionistas" },
              { num: "8.902",  label: "Tradeos exitosos" },
              { num: "1.437",  label: "Sets completados" },
            ].map((s) => (
              <div style="background:white;border-radius:16px;padding:1.5rem;box-shadow:0 1px 4px rgba(0,0,0,0.06);">
                <p style="font-size:28px;font-weight:700;">{s.num}</p>
                <p style="font-size:13px;color:#8b8175;margin-top:4px;">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section class="max-w-7xl mx-auto px-8 py-20 border-b border-[#e2ddd7]">
        <p class="text-sm font-medium text-[#5f7866] mb-3 uppercase tracking-widest">
          Funcionalidades
        </p>
        <h2 class="text-4xl font-bold mb-12">Todo lo que viene.</h2>

        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px;">
          {features.map((f) => (
            <div style="background:white;border-radius:16px;padding:1.5rem;
                        box-shadow:0 1px 4px rgba(0,0,0,0.06);
                        display:flex;flex-direction:column;gap:10px;">
              <div style="display:flex;align-items:center;justify-content:space-between;">
                <span style="font-size:24px;">{f.icon}</span>
                <span
                  style={`font-size:10px;font-weight:600;padding:3px 10px;border-radius:999px;
                          ${f.estado === "en desarrollo"
                            ? "background:#fef9c3;color:#a16207;"
                            : "background:#f3f4f6;color:#6b7280;"}`}
                >
                  {f.estado === "en desarrollo" ? "🚧 En desarrollo" : "🔜 Próximamente"}
                </span>
              </div>
              <h3 style="font-weight:700;font-size:16px;">{f.titulo}</h3>
              <p style="font-size:13px;color:#5f564c;line-height:1.6;">{f.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Seguridad */}
      <section class="max-w-7xl mx-auto px-8 py-20 border-b border-[#e2ddd7]">
        <p class="text-sm font-medium text-[#5f7866] mb-3 uppercase tracking-widest">
          Confianza
        </p>
        <h2 class="text-4xl font-bold mb-8">Diseñado para reducir el riesgo.</h2>

        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px;">
          {[
            { icon: "📸", titulo: "Fotos verificadas",     desc: "Cada publicación requiere fotos reales de la carta. Sin imágenes genéricas ni engaños." },
            { icon: "⭐", titulo: "Reputación pública",    desc: "El historial de tradeos y ventas de cada usuario es visible para toda la comunidad." },
            { icon: "🔒", titulo: "Intermediación",        desc: "Para operaciones de alto valor, CardVault actúa como intermediario hasta confirmar la entrega." },
            { icon: "🛡️", titulo: "Clasificación oficial", desc: "Condición de cada carta clasificada según estándares reconocidos internacionalmente." },
          ].map((item) => (
            <div style="display:flex;gap:14px;align-items:flex-start;background:white;
                        border-radius:16px;padding:1.25rem;box-shadow:0 1px 4px rgba(0,0,0,0.06);">
              <div style="font-size:24px;flex-shrink:0;">{item.icon}</div>
              <div>
                <p style="font-weight:600;font-size:14px;margin-bottom:4px;">{item.titulo}</p>
                <p style="font-size:13px;color:#5f564c;line-height:1.6;">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Estado del proyecto */}
      <section class="max-w-7xl mx-auto px-8 py-20">
        <div
          style="border-radius:20px;border:2px dashed #d6d0c8;
                 background:#edeae3;padding:3rem;text-align:center;"
        >
          <p style="font-size:36px;margin-bottom:12px;">🚧</p>
          <h3 style="font-size:22px;font-weight:700;margin-bottom:8px;">
            Proyecto en construcción
          </h3>
          <p style="color:#5f564c;max-width:480px;margin:0 auto;line-height:1.7;font-size:15px;">
            CardVault está siendo construido activamente. En esta etapa se está
            desarrollando la base del marketplace, el sistema de usuarios y las
            herramientas para gestionar colecciones y publicaciones.
            Gracias por estar desde el principio.
          </p>
        </div>

        {/* CTAs */}
        <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:2rem;">
          <A
            href="/"
            style="padding:12px 24px;border-radius:12px;background:#5f7866;
                   color:white;font-weight:500;text-decoration:none;
                   transition:opacity 0.15s;"
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Volver al mercado
          </A>

          <A
            href="/user/collections"
            style="padding:12px 24px;border-radius:12px;
                   border:1px solid #b9ad9d;color:#5f564c;
                   font-weight:500;text-decoration:none;
                   transition:background 0.15s;"
            onMouseEnter={(e) => (e.currentTarget.style.background = "white")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            Ver colecciones
          </A>

          {/* Deshabilitado */}
          <div class="relative group">
            <button
              disabled
              style="padding:12px 24px;border-radius:12px;
                     background:#c9c3b8;color:white;
                     font-weight:500;cursor:not-allowed;border:none;"
            >
              Contactar equipo
            </button>
            <div
              style="position:absolute;bottom:calc(100% + 8px);left:50%;
                     transform:translateX(-50%);background:#2f2a24;color:white;
                     font-size:12px;padding:6px 12px;border-radius:8px;
                     white-space:nowrap;pointer-events:none;
                     opacity:0;transition:opacity 0.2s ease;"
              class="group-hover:opacity-100!"
            >
              🚧 Próximamente
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
