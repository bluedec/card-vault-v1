import { createSignal, Show } from "solid-js";
import { Portal } from "solid-js/web";

type Card = {
  id: number;
  name: string;
  game: string;
  rarity: string;
  image_url: string;
  price: number;
  card_number: string;
  condition: string;
  description?: string;
};

function rarityStyle(rarity: string): string {
  switch (rarity) {
    case "Uncommon":   return "background:#dcfce7;color:#15803d";
    case "Rare":       return "background:#dbeafe;color:#1d4ed8";
    case "Rare Holo":  return "background:#f3e8ff;color:#7e22ce";
    case "Ultra Rare": return "background:#fef9c3;color:#a16207";
    default:           return "background:#f3f4f6;color:#4b5563";
  }
}

export default function CardItem(props: { card: Card }) {
  const [expanded, setExpanded] = createSignal(false);

  return (
    <>
      {/* Carta base */}
      <div
        class="w-64 bg-white rounded-xl shadow overflow-hidden mx-auto cursor-pointer hover:scale-[1.02] hover:shadow-md transition-transform duration-200"
        onClick={() => setExpanded(true)}
      >
        <div class="aspect-[2.5/3.5] bg-[#faf8f5]">
          <img
            src={props.card.image_url}
            alt={props.card.name}
            class="h-full w-full object-contain"
          />
        </div>
        <div class="p-4">
          <h3 class="text-lg font-semibold">{props.card.name}</h3>
          <p class="text-sm text-gray-500">
            {props.card.game} · {props.card.rarity}
          </p>
          <p class="mt-3 text-xl font-bold">USD {props.card.price}</p>
        </div>
      </div>

      {/* Modal fuera del DOM del grid */}
      <Show when={expanded()}>
        <Portal mount={document.body}>
          <div
            class="fixed inset-0 z-50 flex items-center justify-center p-4"
            style="background:rgba(0,0,0,0.5)"
            onClick={() => setExpanded(false)}
          >
            <div
              class="bg-white rounded-2xl shadow-2xl flex flex-col sm:flex-row max-w-lg w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div class="sm:w-56 shrink-0 flex items-center justify-center p-4" style="background:#faf8f5">
                <img
                  src={props.card.image_url}
                  alt={props.card.name}
                  class="w-full object-contain"
                  style="max-height:260px"
                />
              </div>

              <div class="flex flex-col p-6 gap-3 flex-1">
                <div class="flex items-start justify-between gap-2">
                  <div>
                    <h2 class="text-2xl font-bold leading-tight">{props.card.name}</h2>
                    <p class="text-sm text-gray-500 mt-1">{props.card.game}</p>
                  </div>
                  <button
                    class="text-gray-400 hover:text-gray-600 text-lg leading-none"
                    onClick={() => setExpanded(false)}
                    aria-label="Cerrar"
                  >
                    ✕
                  </button>
                </div>

                <span
                  class="self-start text-xs font-medium px-3 py-1 rounded-full"
                  style={rarityStyle(props.card.rarity)}
                >
                  {props.card.rarity}
                </span>

                <dl class="grid grid-cols-2 gap-x-4 gap-y-3 text-sm mt-1">
                  <div>
                    <dt class="text-gray-400 text-xs uppercase tracking-wide">N° de carta</dt>
                    <dd class="font-medium mt-0.5">{props.card.card_number}</dd>
                  </div>
                  <div>
                    <dt class="text-gray-400 text-xs uppercase tracking-wide">Condición</dt>
                    <dd class="font-medium mt-0.5">{props.card.condition}</dd>
                  </div>
                </dl>

                <Show when={props.card.description}>
                  <p class="text-sm text-gray-600 leading-relaxed border-t pt-3">
                    {props.card.description}
                  </p>
                </Show>

                <div class="flex items-center justify-between mt-auto pt-3 border-t">
                  <span class="text-2xl font-bold">USD {props.card.price}</span>
                  <button class="bg-black text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-800">
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Portal>
      </Show>
    </>
  );
}
