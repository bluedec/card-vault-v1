// src/routes/tradeos.tsx
import { createSignal } from "solid-js";
import { Portal } from "solid-js/web";

type Tradeo = {
  id: number;
  usuario: string;
  avatar: string;
  ofrece: string;
  busca: string;
  juego: string;
  fecha: string;
};

const tradeos: Tradeo[] = [
  {
    id: 1,
    usuario: "matias_tcg",
    avatar: "MT",
    ofrece: "Charizard Base Set",
    busca: "Blastoise Base Set",
    juego: "Pokémon TCG",
    fecha: "hace 2 horas",
  },
  {
    id: 2,
    usuario: "coleccionista_ro",
    avatar: "CR",
    ofrece: "Blue-Eyes White Dragon",
    busca: "Dark Magician (alternativo)",
    juego: "Yu-Gi-Oh!",
    fecha: "hace 5 horas",
  },
  {
    id: 3,
    usuario: "pablo_magic",
    avatar: "PM",
    ofrece: "Black Lotus",
    busca: "Mox Ruby + Mox Sapphire",
    juego: "Magic: The Gathering",
    fecha: "hace 1 día",
  },
  {
    id: 4,
    usuario: "luna_cards",
    avatar: "LC",
    ofrece: "Lugia Neo Genesis",
    busca: "Ho-Oh Neo Revelation",
    juego: "Pokémon TCG",
    fecha: "hace 1 día",
  },
  {
    id: 5,
    usuario: "tcg_norte",
    avatar: "TN",
    ofrece: "Exodia completo",
    busca: "Oferta libre",
    juego: "Yu-Gi-Oh!",
    fecha: "hace 2 días",
  },
  {
    id: 6,
    usuario: "seba_vintage",
    avatar: "SV",
    ofrece: "Ancestral Recall",
    busca: "Time Walk",
    juego: "Magic: The Gathering",
    fecha: "hace 3 días",
  },
];

const JUEGO_STYLE: Record<string, string> = {
  "Pokémon TCG": "background:#dcfce7;color:#15803d",
  "Yu-Gi-Oh!": "background:#fef9c3;color:#a16207",
  "Magic: The Gathering": "background:#ede9fe;color:#6d28d9",
};

export default function TradeoPage() {
  const [selected, setSelected] = createSignal<Tradeo | null>(null);

  return (
    <main class="min-h-screen bg-[#f4f1eb] text-[#2f2a24]">

      {/* Header */}
      <section class="max-w-7xl mx-auto px-8 pt-20 pb-10">
        <p class="text-sm font-medium text-[#5f7866] mb-3 uppercase tracking-widest">
          Comunidad
        </p>
        <h1 class="text-6xl font-bold leading-tight max-w-2xl">
          Intercambiá cartas con otros coleccionistas.
        </h1>
        <p class="mt-6 text-xl text-[#5f564c] max-w-2xl">
          Encontrá lo que buscás ofreciendo lo que tenés. Tradeos directos,
          sin intermediarios.
        </p>

        <div class="flex gap-4 mt-10">
          <div class="relative group">
            <button
              disabled
              class="px-6 py-3 rounded-xl border border-[#c9c3b8]  text-[#c9c3b8] cursor-not-allowed"
            >
              Publicar Tradeo
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

      {/* Grid de tradeos */}
      <section class="max-w-7xl mx-auto px-8 pb-20">
        <h2 class="text-2xl font-bold mb-6">Tradeos activos</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tradeos.map((tradeo) => (
            <div
              class="bg-white rounded-xl shadow p-5 cursor-pointer
                     hover:shadow-md transition-shadow flex flex-col gap-4"
              onClick={() => setSelected(tradeo)}
            >
              {/* Usuario */}
              <div class="flex items-center gap-3">
                <div
                  class="w-9 h-9 rounded-full flex items-center justify-center
                         text-xs font-semibold shrink-0"
                  style="background:#e8e4dc;color:#5f564c"
                >
                  {tradeo.avatar}
                </div>
                <div>
                  <p class="font-medium text-sm">{tradeo.usuario}</p>
                  <p class="text-xs text-gray-400">{tradeo.fecha}</p>
                </div>
                <span
                  class="ml-auto text-xs font-medium px-2.5 py-1 rounded-full shrink-0"
                  style={JUEGO_STYLE[tradeo.juego] ?? "background:#f3f4f6;color:#4b5563"}
                >
                  {tradeo.juego}
                </span>
              </div>

              {/* Ofrece / Busca */}
              <div class="flex flex-col gap-2 text-sm border-t pt-4">
                <div class="flex items-center gap-2">
                  <span class="text-gray-400 w-14 shrink-0">Ofrece</span>
                  <span class="font-medium">{tradeo.ofrece}</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-gray-400 w-14 shrink-0">Busca</span>
                  <span class="font-medium">{tradeo.busca}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WIP Banner */}
      <section class="max-w-7xl mx-auto px-8 pb-20">
        <div
          class="rounded-2xl border-2 border-dashed border-[#c9c3b8]
                 bg-[#edeae3] p-10 text-center"
        >
          <p class="text-4xl mb-4">🚧</p>
          <h3 class="text-xl font-bold mb-2">Sección en desarrollo</h3>
          <p class="text-[#5f564c] max-w-md mx-auto">
            El sistema de tradeos está siendo construido. Pronto vas a poder
            publicar, negociar y confirmar intercambios directamente desde acá.
          </p>
        </div>
      </section>

      {/* Modal */}
      <Portal mount={document.body}>
        {selected() !== null && (
          <div
            style="position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;padding:1rem;"
            onClick={() => setSelected(null)}
          >
            <div
              style="background:white;border-radius:16px;max-width:440px;width:100%;padding:2rem;display:flex;flex-direction:column;gap:1rem;"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header modal */}
              <div style="display:flex;align-items:center;justify-content:space-between;">
                <div style="display:flex;align-items:center;gap:10px;">
                  <div
                    style="width:40px;height:40px;border-radius:50%;background:#e8e4dc;
                           display:flex;align-items:center;justify-content:center;
                           font-size:12px;font-weight:600;color:#5f564c;"
                  >
                    {selected()!.avatar}
                  </div>
                  <div>
                    <p style="font-weight:600;font-size:15px;">{selected()!.usuario}</p>
                    <p style="font-size:12px;color:#9ca3af;">{selected()!.fecha}</p>
                  </div>
                </div>
                <button
                  style="color:#9ca3af;font-size:18px;cursor:pointer;background:none;border:none;"
                  onClick={() => setSelected(null)}
                >
                  ✕
                </button>
              </div>

              {/* Badge juego */}
              <span
                style={`${JUEGO_STYLE[selected()!.juego] ?? "background:#f3f4f6;color:#4b5563"};
                        font-size:12px;font-weight:500;padding:4px 12px;
                        border-radius:999px;align-self:flex-start;`}
              >
                {selected()!.juego}
              </span>

              {/* Detalle */}
              <div style="border-top:1px solid #f3f4f6;padding-top:1rem;display:flex;flex-direction:column;gap:12px;">
                <div style="display:flex;flex-direction:column;gap:4px;">
                  <p style="font-size:12px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.05em;">
                    Ofrece
                  </p>
                  <p style="font-size:16px;font-weight:600;">{selected()!.ofrece}</p>
                </div>
                <div style="display:flex;flex-direction:column;gap:4px;">
                  <p style="font-size:12px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.05em;">
                    Busca
                  </p>
                  <p style="font-size:16px;font-weight:600;">{selected()!.busca}</p>
                </div>
              </div>

              {/* CTA */}
              <div style="border-top:1px solid #f3f4f6;padding-top:1rem;display:flex;gap:8px;">
                <button
                  style="flex:1;background:#5f7866;color:white;padding:10px 16px;
                         border-radius:10px;font-weight:500;font-size:14px;cursor:pointer;border:none;"
                >
                  Proponer intercambio
                </button>
                <button
                  style="padding:10px 16px;border-radius:10px;font-size:14px;cursor:pointer;
                         border:1px solid #e5e7eb;background:white;color:#374151;"
                  onClick={() => setSelected(null)}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}
      </Portal>
    </main>
  );
}
