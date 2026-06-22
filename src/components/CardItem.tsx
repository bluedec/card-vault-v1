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
  const [visible, setVisible] = createSignal(false);

  function openModal() {
    setExpanded(true);
    requestAnimationFrame(() => setVisible(true));
  }

  function closeModal() {
    setVisible(false);
    setTimeout(() => setExpanded(false), 250);
  }

  return (
    <>
      {/* Carta base */}
      <div
        class="w-64 bg-white rounded-xl shadow overflow-hidden mx-auto cursor-pointer
               hover:scale-[1.02] hover:shadow-md transition-transform duration-200"
        onClick={openModal}
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

      <Show when={expanded()}>
        <Portal mount={document.body}>
          {/* Overlay */}
          <div
            onClick={closeModal}
            style={`
              position: fixed; inset: 0; z-index: 9999;
              display: flex; align-items: center; justify-content: center; padding: 1rem;
              background: ${visible() ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0)"};
              transition: background 0.25s ease;
            `}
          >
            {/* Modal */}
            <div
              onClick={(e) => e.stopPropagation()}
              style={`
                background: white;
                border-radius: 16px;
                box-shadow: 0 24px 64px rgba(0,0,0,0.18);
                display: flex;
                flex-direction: row;
                max-width: 520px;
                width: 100%;
                overflow: hidden;
                transform: ${visible() ? "translateY(0) scale(1)" : "translateY(20px) scale(0.97)"};
                opacity: ${visible() ? "1" : "0"};
                transition: transform 0.25s ease, opacity 0.25s ease;
              `}
            >
              {/* Imagen */}
              <div style="width:200px;flex-shrink:0;background:#faf8f5;
                          display:flex;align-items:center;justify-content:center;padding:1rem;">
                <img
                  src={props.card.image_url}
                  alt={props.card.name}
                  style="width:100%;object-fit:contain;max-height:260px;"
                />
              </div>

              {/* Info */}
              <div style="display:flex;flex-direction:column;padding:1.5rem;gap:0.75rem;flex:1;">
                <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:8px;">
                  <div>
                    <h2 style="font-size:22px;font-weight:700;line-height:1.2;">{props.card.name}</h2>
                    <p style="font-size:13px;color:#9ca3af;margin-top:4px;">{props.card.game}</p>
                  </div>
                  <button
                    onClick={closeModal}
                    style="color:#9ca3af;font-size:18px;cursor:pointer;background:none;border:none;line-height:1;padding:2px;"
                  >
                    ✕
                  </button>
                </div>

                <span
                  style={`${rarityStyle(props.card.rarity)};
                          font-size:11px;font-weight:500;padding:3px 10px;
                          border-radius:999px;align-self:flex-start;`}
                >
                  {props.card.rarity}
                </span>

                <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;
                            border-top:1px solid #f3f4f6;padding-top:0.75rem;">
                  <div>
                    <p style="font-size:10px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:3px;">
                      N° de carta
                    </p>
                    <p style="font-weight:600;font-size:13px;">{props.card.card_number}</p>
                  </div>
                  <div>
                    <p style="font-size:10px;color:#9ca3af;text-transform:uppercase;letter-spacing:0.07em;margin-bottom:3px;">
                      Condición
                    </p>
                    <p style="font-weight:600;font-size:13px;">{props.card.condition}</p>
                  </div>
                </div>

                <Show when={props.card.description}>
                  <p style="font-size:13px;color:#5f564c;line-height:1.7;border-top:1px solid #f3f4f6;padding-top:0.75rem;">
                    {props.card.description}
                  </p>
                </Show>

                <div style="display:flex;align-items:center;justify-content:space-between;
                            border-top:1px solid #f3f4f6;padding-top:0.75rem;margin-top:auto;">
                  <span style="font-size:22px;font-weight:700;">USD {props.card.price}</span>
                  <button
                    style="background:#2f2a24;color:white;padding:9px 18px;border-radius:10px;
                           font-size:13px;font-weight:500;cursor:pointer;border:none;"
                  >
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
