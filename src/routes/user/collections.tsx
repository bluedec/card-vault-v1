// src/routes/collections.tsx
import { A } from "@solidjs/router";
import { For } from "solid-js";

type ColeccionTemplate = {
  id: number;
  nombre: string;
  juego: string;
  total: number;
  cartas: { id: number; nombre: string }[];
};

const coleccionesTemplate: ColeccionTemplate[] = [
  {
    id: 1,
    nombre: "Base Set",
    juego: "Pokémon TCG",
    total: 102,
    cartas: [
      { id: 1, nombre: "Bulbasaur" },
      { id: 2, nombre: "Ivysaur" },
      { id: 3, nombre: "Venusaur" },
      { id: 4, nombre: "Charizard" },
      { id: 5, nombre: "Squirtle" },
      { id: 6, nombre: "Wartortle" },
      { id: 7, nombre: "Blastoise" },
      { id: 8, nombre: "Caterpie" },
      { id: 9, nombre: "Metapod" },
      { id: 10, nombre: "Butterfree" },
      { id: 11, nombre: "Weedle" },
      { id: 12, nombre: "Kakuna" },
    ],
  },
  {
    id: 2,
    nombre: "Neo Genesis",
    juego: "Pokémon TCG",
    total: 111,
    cartas: [
      { id: 1, nombre: "Chikorita" },
      { id: 2, nombre: "Cyndaquil" },
      { id: 3, nombre: "Totodile" },
      { id: 4, nombre: "Lugia" },
      { id: 5, nombre: "Ampharos" },
      { id: 6, nombre: "Feraligatr" },
      { id: 7, nombre: "Meganium" },
      { id: 8, nombre: "Typhlosion" },
      { id: 9, nombre: "Lanturn" },
      { id: 10, nombre: "Togetic" },
      { id: 11, nombre: "Jumpluff" },
      { id: 12, nombre: "Azumarill" },
    ],
  },
  {
    id: 3,
    nombre: "Legend of Blue Eyes",
    juego: "Yu-Gi-Oh!",
    total: 126,
    cartas: [
      { id: 1, nombre: "Blue-Eyes" },
      { id: 2, nombre: "Dark Magician" },
      { id: 3, nombre: "Exodia" },
      { id: 4, nombre: "Summoned Skull" },
      { id: 5, nombre: "Trap Hole" },
      { id: 6, nombre: "Polymerization" },
      { id: 7, nombre: "Change of Heart" },
      { id: 8, nombre: "Dark Hole" },
      { id: 9, nombre: "Monster Reborn" },
      { id: 10, nombre: "Pot of Greed" },
      { id: 11, nombre: "Raigeki" },
      { id: 12, nombre: "Mirror Force" },
    ],
  },
  {
    id: 4,
    nombre: "Alpha Edition",
    juego: "Magic: The Gathering",
    total: 295,
    cartas: [
      { id: 1, nombre: "Black Lotus" },
      { id: 2, nombre: "Mox Ruby" },
      { id: 3, nombre: "Mox Sapphire" },
      { id: 4, nombre: "Ancestral Recall" },
      { id: 5, nombre: "Time Walk" },
      { id: 6, nombre: "Timetwister" },
      { id: 7, nombre: "Mox Pearl" },
      { id: 8, nombre: "Mox Jet" },
      { id: 9, nombre: "Mox Emerald" },
      { id: 10, nombre: "Sol Ring" },
      { id: 11, nombre: "Lightning Bolt" },
      { id: 12, nombre: "Serra Angel" },
    ],
  },
];

const JUEGO_COLOR: Record<string, string> = {
  "Pokémon TCG":          "#15803d",
  "Yu-Gi-Oh!":            "#a16207",
  "Magic: The Gathering": "#6d28d9",
};

export default function CollectionsPage() {
  return (
    <main class="min-h-screen bg-[#f4f1eb] text-[#2f2a24]">

      {/* Header */}
      <section class="max-w-7xl mx-auto px-8 py-20">
        <p class="text-sm font-medium text-[#5f7866] mb-3 uppercase tracking-widest">
          Mi colección
        </p>
        <h1 class="text-6xl font-bold leading-tight">
          Tus cartas, <br />
          <span style="color:#c9c3b8;">todavía vacío.</span>
        </h1>
        <p class="mt-6 text-xl text-[#5f564c] max-w-xl">
          Aún no tenés cartas en tu colección. Explorá el mercado
          o registrá las cartas que ya tenés para empezar a armar tu historia.
        </p>
        <div class="flex gap-3 mt-8">
          <A href="/">
            <button
              class="px-6 py-3 rounded-xl bg-[#5f7866] text-white font-medium
              hover:bg-[#4e6655] transition-colors cursor-pointer"
            >
              Explorar mercado
            </button>
          </A>
          <div class="relative group">
            <button
              disabled
              class="px-6 py-3 rounded-xl border border-[#c9c3b8] text-[#c9c3b8] cursor-not-allowed"
            >
              Registrar carta
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

      {/* Colecciones que podrías tener */}
      <section class="pb-32">
        <div class="max-w-7xl mx-auto px-8 mb-8">
          <h2 class="text-2xl font-bold">Colecciones que podrías armar</h2>
          <p class="text-[#8b8175] mt-1">
            Estas son algunas de las colecciones más populares. Empezá a completarlas.
          </p>
        </div>

        <For each={coleccionesTemplate}>
          {(col) => (
            <div class="mb-10">

              {/* Label de la colección */}
              <div class="max-w-7xl mx-auto px-8 mb-4 flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <h3 class="text-lg font-bold">{col.nombre}</h3>
                  <span
                    style={`background:${JUEGO_COLOR[col.juego]}22;color:${JUEGO_COLOR[col.juego]};
                            font-size:11px;font-weight:600;padding:3px 10px;border-radius:999px;`}
                  >
                    {col.juego}
                  </span>
                </div>
                <p class="text-sm text-[#8b8175]">0 / {col.total} cartas</p>
              </div>

              {/* Banda con scroll horizontal */}
              <div style="background:#ece8e0;padding:20px 0;">
                <div
                  class="max-w-7xl mx-auto px-8"
                  style="overflow-x:auto;scrollbar-width:none;"
                >
                  <div style="display:flex;gap:12px;width:max-content;padding-bottom:4px;">
                    <For each={col.cartas}>
                      {(carta) => (
                        <div
                          style="display:flex;flex-direction:column;align-items:center;gap:8px;flex-shrink:0;"
                        >
                          {/* Carta en gris */}
                          <div
                            style={`width:80px;height:112px;border-radius:8px;
                                    background:linear-gradient(160deg,#d6d0c8,#c8c2b9);
                                    display:flex;align-items:center;justify-content:center;
                                    border:1px solid #bfb9b0;`}
                          >
                            <span style="font-size:28px;opacity:0.25;">🃏</span>
                          </div>
                          {/* Nombre */}
                          <p
                            style="font-size:10px;color:#9b9488;font-weight:500;
                                   text-align:center;max-width:80px;line-height:1.3;"
                          >
                            {carta.nombre}
                          </p>
                        </div>
                      )}
                    </For>

                    {/* Indicador de más cartas */}
                    <div
                      style="display:flex;flex-direction:column;align-items:center;
                             justify-content:center;gap:8px;flex-shrink:0;width:80px;"
                    >
                      <div
                        style={`width:80px;height:112px;border-radius:8px;
                                background:transparent;border:2px dashed #c8c2b9;
                                display:flex;align-items:center;justify-content:center;`}
                      >
                        <p style="font-size:13px;color:#b0aa9f;font-weight:600;">
                          +{col.total - col.cartas.length}
                        </p>
                      </div>
                      <p style="font-size:10px;color:#9b9488;font-weight:500;">más</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          )}
        </For>
      </section>

    </main>
  );
}
