// src/routes/logros.tsx

type Logro = {
  id: number;
  icon: string;
  nombre: string;
  descripcion: string;
  categoria: string;
  dificultad: "Bronce" | "Plata" | "Oro" | "Platino";
};

const logros: Logro[] = [
  // Cantidad
  {
    id: 1,
    icon: "🃏",
    nombre: "Primeros pasos",
    descripcion: "Registrá tu primera carta en la colección.",
    categoria: "Colección",
    dificultad: "Bronce",
  },
  {
    id: 2,
    icon: "📦",
    nombre: "Coleccionista",
    descripcion: "Tenés más de 10 cartas en tu colección.",
    categoria: "Colección",
    dificultad: "Bronce",
  },
  {
    id: 3,
    icon: "📚",
    nombre: "Entusiasta",
    descripcion: "Tenés más de 25 cartas en tu colección.",
    categoria: "Colección",
    dificultad: "Bronce",
  },
  {
    id: 4,
    icon: "🗂️",
    nombre: "Archivo vivo",
    descripcion: "Tenés más de 50 cartas en tu colección.",
    categoria: "Colección",
    dificultad: "Plata",
  },
  {
    id: 5,
    icon: "🏛️",
    nombre: "Biblioteca",
    descripcion: "Tenés más de 100 cartas en tu colección.",
    categoria: "Colección",
    dificultad: "Plata",
  },
  {
    id: 6,
    icon: "🌌",
    nombre: "Leyenda",
    descripcion: "Tenés más de 1000 cartas en tu colección.",
    categoria: "Colección",
    dificultad: "Platino",
  },

  // Sets completos
  {
    id: 7,
    icon: "⭐",
    nombre: "Set completo",
    descripcion: "Completaste un set entero de cualquier juego.",
    categoria: "Sets",
    dificultad: "Oro",
  },
  {
    id: 8,
    icon: "🔥",
    nombre: "Master of Base",
    descripcion: "Completaste el Base Set de Pokémon TCG.",
    categoria: "Sets",
    dificultad: "Oro",
  },
  {
    id: 9,
    icon: "🌊",
    nombre: "Neo completo",
    descripcion: "Completaste Neo Genesis de Pokémon TCG.",
    categoria: "Sets",
    dificultad: "Oro",
  },
  {
    id: 10,
    icon: "👁️",
    nombre: "El que todo lo ve",
    descripcion: "Completaste Legend of Blue Eyes de Yu-Gi-Oh!",
    categoria: "Sets",
    dificultad: "Oro",
  },
  {
    id: 11,
    icon: "💎",
    nombre: "Power Nine",
    descripcion: "Tenés las 9 cartas más poderosas de Magic: The Gathering.",
    categoria: "Sets",
    dificultad: "Platino",
  },

  // Rareza
  {
    id: 12,
    icon: "✨",
    nombre: "Brilla en la oscuridad",
    descripcion: "Registrá tu primera carta Rare Holo.",
    categoria: "Rareza",
    dificultad: "Plata",
  },
  {
    id: 13,
    icon: "💫",
    nombre: "Ultra raro",
    descripcion: "Tenés al menos 5 cartas Ultra Rare.",
    categoria: "Rareza",
    dificultad: "Oro",
  },
  {
    id: 14,
    icon: "🌟",
    nombre: "Constelación",
    descripcion: "Tenés al menos 3 cartas Legendary en tu colección.",
    categoria: "Rareza",
    dificultad: "Platino",
  },

  // Tradeos
  {
    id: 15,
    icon: "🤝",
    nombre: "Primer intercambio",
    descripcion: "Completá tu primer tradeo con otro usuario.",
    categoria: "Comunidad",
    dificultad: "Bronce",
  },
  {
    id: 16,
    icon: "🔄",
    nombre: "Comerciante",
    descripcion: "Completá 10 tradeos exitosos.",
    categoria: "Comunidad",
    dificultad: "Plata",
  },
  {
    id: 17,
    icon: "🏆",
    nombre: "Referente",
    descripcion: "Completá 50 tradeos y mantené reputación perfecta.",
    categoria: "Comunidad",
    dificultad: "Platino",
  },

  // Juegos
  {
    id: 18,
    icon: "⚡",
    nombre: "Maestro Pokémon",
    descripcion: "Tenés más de 200 cartas de Pokémon TCG.",
    categoria: "Juegos",
    dificultad: "Oro",
  },
  {
    id: 19,
    icon: "🐉",
    nombre: "Duelista",
    descripcion: "Tenés más de 200 cartas de Yu-Gi-Oh!",
    categoria: "Juegos",
    dificultad: "Oro",
  },
  {
    id: 20,
    icon: "🧙",
    nombre: "Planeswalker",
    descripcion: "Tenés más de 200 cartas de Magic: The Gathering.",
    categoria: "Juegos",
    dificultad: "Oro",
  },
];

const DIFICULTAD_STYLE: Record<string, { bg: string; color: string; label: string }> = {
  Bronce:  { bg: "#fdf3e7", color: "#92400e", label: "Bronce" },
  Plata:   { bg: "#f1f5f9", color: "#475569", label: "Plata" },
  Oro:     { bg: "#fefce8", color: "#a16207", label: "Oro" },
  Platino: { bg: "#f5f3ff", color: "#6d28d9", label: "Platino" },
};

const CATEGORIAS = ["Todos", "Colección", "Sets", "Rareza", "Comunidad", "Juegos"];

import { createSignal, For, Show } from "solid-js";

export default function LogrosPage() {
  const [categoriaActiva, setCategoriaActiva] = createSignal("Todos");

  const logrosFiltrados = () =>
    categoriaActiva() === "Todos"
      ? logros
      : logros.filter((l) => l.categoria === categoriaActiva());

  return (
    <main class="min-h-screen bg-[#f4f1eb] text-[#2f2a24]">

      {/* Header */}
      <section class="max-w-7xl mx-auto px-8 py-20">
        <p class="text-sm font-medium text-[#5f7866] mb-3 uppercase tracking-widest">
          Logros
        </p>
        <h1 class="text-6xl font-bold leading-tight">
          Tus metas, <br />
          <span style="color:#c9c3b8;">todavía sin desbloquear.</span>
        </h1>
        <p class="mt-6 text-xl text-[#5f564c] max-w-xl">
          Completá sets, acumulá cartas y tradeos para desbloquear logros.
          Cada uno cuenta tu historia como coleccionista.
        </p>

        {/* Stat vacío */}
        <div class="flex gap-6 mt-10">
          <div class="bg-white rounded-xl px-6 py-4 shadow">
            <p class="text-sm text-gray-400">Logros obtenidos</p>
            <p class="text-3xl font-bold mt-1">0 <span class="text-lg font-normal text-gray-400">/ {logros.length}</span></p>
          </div>

          {/* Botón deshabilitado */}
          <div class="relative group self-center">
            <button
              disabled
              class="px-6 py-3 rounded-xl bg-[#c9c3b8] text-white cursor-not-allowed font-medium"
            >
              Compartir logros
            </button>
            <div
              style="
                position:absolute;bottom:calc(100% + 8px);left:50%;
                transform:translateX(-50%);
                background:#2f2a24;color:white;
                font-size:12px;padding:6px 12px;border-radius:8px;
                white-space:nowrap;pointer-events:none;
                opacity:0;transition:opacity 0.2s ease;
              "
              class="group-hover:opacity-100!"
            >
              🚧 Próximamente
            </div>
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section class="max-w-7xl mx-auto px-8 mb-8">
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <For each={CATEGORIAS}>
            {(cat) => (
              <button
                onClick={() => setCategoriaActiva(cat)}
                style={`
                  padding: 6px 16px;
                  border-radius: 999px;
                  font-size: 13px;
                  font-weight: 500;
                  cursor: pointer;
                  border: 1px solid ${categoriaActiva() === cat ? "#2f2a24" : "#d6d0c8"};
                  background: ${categoriaActiva() === cat ? "#2f2a24" : "white"};
                  color: ${categoriaActiva() === cat ? "white" : "#5f564c"};
                  transition: all 0.15s ease;
                `}
              >
                {cat}
              </button>
            )}
          </For>
        </div>
      </section>

      {/* Grid de logros */}
      <section class="max-w-7xl mx-auto px-8 pb-20">
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px;">
          <For each={logrosFiltrados()}>
            {(logro) => {
              const estilo = DIFICULTAD_STYLE[logro.dificultad];
              return (
                <div
                  style="
                    background:white;
                    border-radius:16px;
                    padding:1.25rem;
                    display:flex;
                    gap:14px;
                    align-items:flex-start;
                    filter:grayscale(1);
                    opacity:0.5;
                    border:1px solid #e8e4dc;
                  "
                >
                  {/* Icono */}
                  <div
                    style={`
                      width:48px;height:48px;border-radius:12px;flex-shrink:0;
                      background:${estilo.bg};
                      display:flex;align-items:center;justify-content:center;
                      font-size:22px;
                    `}
                  >
                    {logro.icon}
                  </div>

                  {/* Info */}
                  <div style="display:flex;flex-direction:column;gap:4px;flex:1;">
                    <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;">
                      <p style="font-weight:600;font-size:14px;">{logro.nombre}</p>
                      <span
                        style={`
                          font-size:10px;font-weight:600;padding:2px 8px;
                          border-radius:999px;flex-shrink:0;
                          background:${estilo.bg};color:${estilo.color};
                        `}
                      >
                        {estilo.label}
                      </span>
                    </div>
                    <p style="font-size:12px;color:#8b8175;line-height:1.5;">
                      {logro.descripcion}
                    </p>
                    <p style="font-size:11px;color:#b0aa9f;margin-top:2px;">
                      {logro.categoria}
                    </p>
                  </div>
                </div>
              );
            }}
          </For>
        </div>
      </section>

      {/* WIP Banner */}
      <section class="max-w-7xl mx-auto px-8 pb-32">
        <div
          style="
            border-radius:20px;
            border:2px dashed #d6d0c8;
            background:#edeae3;
            padding:3rem;
            text-align:center;
          "
        >
          <p style="font-size:36px;margin-bottom:12px;">🚧</p>
          <h3 style="font-size:18px;font-weight:700;margin-bottom:8px;">
            Sistema de logros en desarrollo
          </h3>
          <p style="color:#5f564c;max-width:420px;margin:0 auto;line-height:1.7;font-size:14px;">
            Estamos construyendo el motor que detecta y otorga logros
            automáticamente. Por ahora podés ver lo que te espera cuando
            empieces a coleccionar.
          </p>
        </div>
      </section>

    </main>
  );
}
