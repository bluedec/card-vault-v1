// src/routes/colecciones.tsx
import { createSignal, For, Show } from "solid-js";
import { Portal } from "solid-js/web";

type Card = {
  id: number;
  name: string;
  game: string;
  rarity: string;
  card_number: string;
  condition: string;
  image_url: string;
  description: string;
  price: number;
};

const coleccion: Card[] = [
  {
    id: 1,
    name: "Charizard",
    game: "Pokémon TCG",
    rarity: "Rare Holo",
    card_number: "006/102",
    condition: "Near Mint",
    image_url: "https://images.pokemontcg.io/base1/4_hires.png",
    description: "El Pokémon llama icónico de la Base Set original. Una de las cartas más codiciadas de la historia del TCG.",
    price: 450,
  },
  {
    id: 2,
    name: "Lugia",
    game: "Pokémon TCG",
    rarity: "Rare Holo",
    card_number: "009/111",
    condition: "Excellent",
    image_url: "https://images.pokemontcg.io/neo1/9_hires.png",
    description: "Guardián del mar. Carta emblemática de Neo Genesis con una de las ilustraciones más recordadas del juego.",
    price: 300,
  },
  {
    id: 3,
    name: "Blastoise",
    game: "Pokémon TCG",
    rarity: "Rare Holo",
    card_number: "002/102",
    condition: "Good",
    image_url: "https://images.pokemontcg.io/base1/2_hires.png",
    description: "Tortuga cañón de la Base Set. Pieza fundamental para cualquier colección completa de primera generación.",
    price: 250,
  },
  {
    id: 4,
    name: "Blue-Eyes White Dragon",
    game: "Yu-Gi-Oh!",
    rarity: "Ultra Rare",
    card_number: "SDK-001",
    condition: "Near Mint",
    image_url: "https://images.ygoprodeck.com/images/cards/89631139.jpg",
    description: "El dragón más legendario de Yu-Gi-Oh!. Versión SDK en perfecto estado, ideal para coleccionistas serios.",
    price: 180,
  },
  {
    id: 5,
    name: "Dark Magician",
    game: "Yu-Gi-Oh!",
    rarity: "Rare",
    card_number: "SDK-006",
    condition: "Excellent",
    image_url: "https://images.ygoprodeck.com/images/cards/46986414.jpg",
    description: "El mago de las tinieblas, monstruo emblema de Yugi. Arte original en excelente estado de conservación.",
    price: 95,
  },
  {
    id: 6,
    name: "Black Lotus",
    game: "Magic: The Gathering",
    rarity: "Rare",
    card_number: "Alpha Edition",
    condition: "Good",
    image_url: "https://cards.scryfall.io/large/front/b/d/bd8fa327-dd41-4737-8f19-2cf5eb1f7cdd.jpg",
    description: "La carta más famosa de Magic. Alpha Edition en buen estado, una pieza histórica del coleccionismo mundial.",
    price: 8500,
  },
  {
    id: 7,
    name: "Pikachu Illustrator",
    game: "Pokémon TCG",
    rarity: "Ultra Rare",
    card_number: "CoroCoro Promo",
    condition: "Near Mint",
    image_url: "https://images.pokemontcg.io/swsh45sv/SV122_hires.png",
    description: "Una de las cartas más raras del mundo. Otorgada exclusivamente a ganadores de concursos de ilustración en Japón.",
    price: 12000,
  },
  {
    id: 8,
    name: "Ancestral Recall",
    game: "Magic: The Gathering",
    rarity: "Rare",
    card_number: "Beta Edition",
    condition: "Excellent",
    image_url: "https://cards.scryfall.io/large/front/2/4/2492a6e2-8a3e-4bfc-b8e4-ee5f3350abd8.jpg",
    description: "Parte del Power Nine. Permite robar tres cartas por un solo maná azul. Beta Edition en excelente estado.",
    price: 3200,
  },
];

const RARITY_STYLE: Record<string, string> = {
  "Common":     "background:#f3f4f6;color:#4b5563",
  "Uncommon":   "background:#dcfce7;color:#15803d",
  "Rare":       "background:#dbeafe;color:#1d4ed8",
  "Rare Holo":  "background:#f3e8ff;color:#7e22ce",
  "Ultra Rare": "background:#fef9c3;color:#a16207",
};

const GAME_STYLE: Record<string, string> = {
  "Pokémon TCG":           "background:#dcfce7;color:#15803d",
  "Yu-Gi-Oh!":             "background:#fef9c3;color:#a16207",
  "Magic: The Gathering":  "background:#ede9fe;color:#6d28d9",
};

const CONDITION_DOT: Record<string, string> = {
  "Near Mint": "#22c55e",
  "Excellent":  "#84cc16",
  "Good":       "#eab308",
  "Played":     "#f97316",
  "Poor":       "#ef4444",
};

export default function Shop() {
  const [selected, setSelected] = createSignal<Card | null>(null);
  const [visible, setVisible] = createSignal(false);

  function openModal(card: Card) {
    setSelected(card);
    requestAnimationFrame(() => setVisible(true));
  }

  function closeModal() {
    setVisible(false);
    setTimeout(() => setSelected(null), 300);
  }

  return (
    <main class="min-h-screen bg-[#f4f1eb] text-[#2f2a24]">

      {/* Header */}
      <section class="max-w-7xl mx-auto px-8 py-20">
        <p class="text-sm font-medium text-[#5f7866] mb-3 uppercase tracking-widest">
          Tienda oficial
        </p>
        <h1 class="text-6xl font-bold leading-tight max-w-2xl">
          Colección a la venta.
        </h1>
        <p class="mt-6 text-xl text-[#5f564c] max-w-2xl">
          Cartas verificadas y en stock, listas para enviar.
          Cada pieza inspeccionada y clasificada por nuestro equipo.
        </p>
      </section>

      {/* Lista */}
      <section class="max-w-7xl mx-auto px-8 pb-32">

        {/* Header de columnas */}
        <div
          style="display:grid;grid-template-columns:2fr 1fr 1fr 1fr 100px;
                 gap:16px;padding:0 16px 10px;border-bottom:1.5px solid #d6d0c8;"
        >
          {["Carta", "Juego", "Rareza", "Condición", "Precio"].map((h) => (
            <p style="font-size:11px;font-weight:600;color:#8b8175;text-transform:uppercase;letter-spacing:0.07em;">
              {h}
            </p>
          ))}
        </div>

        {/* Rows */}
        <div style="display:flex;flex-direction:column;">
          <For each={coleccion}>
            {(card, i) => (
              <div
                onClick={() => openModal(card)}
                style={`display:grid;grid-template-columns:2fr 1fr 1fr 1fr 100px;
                        gap:16px;padding:14px 16px;align-items:center;cursor:pointer;
                        border-bottom:0.5px solid #e2ddd7;
                        background:${i() % 2 === 0 ? "white" : "#faf8f5"};
                        transition:background 0.15s;border-radius:0;`}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#edeae3")}
                onMouseLeave={(e) => (e.currentTarget.style.background = i() % 2 === 0 ? "white" : "#faf8f5")}
              >
                {/* Nombre + imagen thumbnail */}
                <div style="display:flex;align-items:center;gap:12px;">
                  <img
                    src={card.image_url}
                    alt={card.name}
                    style="width:36px;height:50px;object-fit:contain;border-radius:4px;background:#f4f1eb;"
                  />
                  <span style="font-weight:600;font-size:15px;">{card.name}</span>
                </div>

                {/* Juego */}
                <span
                  style={`${GAME_STYLE[card.game] ?? "background:#f3f4f6;color:#4b5563"};
                          font-size:11px;font-weight:500;padding:3px 10px;
                          border-radius:999px;width:fit-content;`}
                >
                  {card.game}
                </span>

                {/* Rareza */}
                <span
                  style={`${RARITY_STYLE[card.rarity] ?? "background:#f3f4f6;color:#4b5563"};
                          font-size:11px;font-weight:500;padding:3px 10px;
                          border-radius:999px;width:fit-content;`}
                >
                  {card.rarity}
                </span>

                {/* Condición */}
                <div style="display:flex;align-items:center;gap:6px;">
                  <span
                    style={`width:7px;height:7px;border-radius:50%;
                            background:${CONDITION_DOT[card.condition] ?? "#9ca3af"};
                            flex-shrink:0;`}
                  />
                  <span style="font-size:13px;color:#5f564c;">{card.condition}</span>
                </div>

                {/* Precio */}
                <span style="font-size:15px;font-weight:700;">
                  USD {card.price.toLocaleString()}
                </span>
              </div>
            )}
          </For>
        </div>
      </section>

      {/* Modal */}
      <Portal mount={document.body}>
        <Show when={selected() !== null}>
          <div
            onClick={closeModal}
            style={`position:fixed;inset:0;z-index:9999;
                    display:flex;align-items:center;justify-content:center;padding:1rem;
                    background:${visible() ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0)"};
                    transition:background 0.3s ease;`}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={`background:white;border-radius:20px;max-width:520px;width:100%;
                      display:flex;flex-direction:column;overflow:hidden;
                      transform:${visible() ? "translateY(0) scale(1)" : "translateY(24px) scale(0.97)"};
                      opacity:${visible() ? "1" : "0"};
                      transition:transform 0.3s ease, opacity 0.3s ease;`}
            >
              {/* Imagen */}
              <div style="background:#faf8f5;display:flex;align-items:center;justify-content:center;padding:2rem;height:220px;">
                <img
                  src={selected()!.image_url}
                  alt={selected()!.name}
                  style="height:100%;object-fit:contain;"
                />
              </div>

              {/* Contenido */}
              <div style="padding:1.75rem;display:flex;flex-direction:column;gap:1rem;">

                {/* Nombre y close */}
                <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px;">
                  <div>
                    <h2 style="font-size:24px;font-weight:700;line-height:1.2;">{selected()!.name}</h2>
                    <p style="font-size:13px;color:#9ca3af;margin-top:4px;">{selected()!.game}</p>
                  </div>
                  <button
                    onClick={closeModal}
                    style="color:#9ca3af;font-size:20px;cursor:pointer;background:none;border:none;line-height:1;padding:4px;"
                  >
                    ✕
                  </button>
                </div>

                {/* Badges */}
                <div style="display:flex;gap:8px;flex-wrap:wrap;">
                  <span
                    style={`${RARITY_STYLE[selected()!.rarity] ?? "background:#f3f4f6;color:#4b5563"};
                            font-size:12px;font-weight:500;padding:4px 12px;border-radius:999px;`}
                  >
                    {selected()!.rarity}
                  </span>
                  <span
                    style={`${GAME_STYLE[selected()!.game] ?? "background:#f3f4f6;color:#4b5563"};
                            font-size:12px;font-weight:500;padding:4px 12px;border-radius:999px;`}
                  >
                    {selected()!.game}
                  </span>
                </div>

                {/* Metadata */}
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;padding:1rem 0;border-top:0.5px solid #f3f4f6;border-bottom:0.5px solid #f3f4f6;">
                  <div>
                    <p style="font-size:11px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:4px;">N° de carta</p>
                    <p style="font-weight:600;font-size:14px;">{selected()!.card_number}</p>
                  </div>
                  <div>
                    <p style="font-size:11px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:4px;">Condición</p>
                    <div style="display:flex;align-items:center;gap:6px;">
                      <span style={`width:7px;height:7px;border-radius:50%;background:${CONDITION_DOT[selected()!.condition] ?? "#9ca3af"};`} />
                      <p style="font-weight:600;font-size:14px;">{selected()!.condition}</p>
                    </div>
                  </div>
                </div>

                {/* Descripción */}
                <p style="font-size:14px;color:#5f564c;line-height:1.7;">{selected()!.description}</p>

                {/* Precio y CTA */}
                <div style="display:flex;align-items:center;justify-content:space-between;margin-top:0.5rem;">
                  <span style="font-size:28px;font-weight:700;">
                    USD {selected()!.price.toLocaleString()}
                  </span>
                  <button
                    style="background:#5f7866;color:white;padding:12px 24px;border-radius:12px;
                           font-weight:600;font-size:14px;cursor:pointer;border:none;"
                  >
                    Comprar ahora
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Show>
      </Portal>
    </main>
  );
}
