import { createSignal } from "solid-js";

export default function CreateCardForm() {
  const [name, setName] = createSignal("");
  const [game, setGame] = createSignal("");
  const [rarity, setRarity] = createSignal("");
  const [cardNumber, setCardNumber] = createSignal("");
  const [condition, setCondition] = createSignal("");
  const [imageUrl, setImageUrl] = createSignal("");
  const [description, setDescription] = createSignal("");
  const [price, setPrice] = createSignal<number>(0);

  const [loading, setLoading] = createSignal(false);
  const [success, setSuccess] = createSignal(false);

  const submit = async (e: Event) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch("/api/cards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name(),
          game: game(),
          rarity: rarity(),
          cardNumber: cardNumber(),
          condition: condition(),
          imageUrl: imageUrl(),
          description: description(),
          price: price(),
        }),
      });

      if (!res.ok) throw new Error("Error creando carta");

      setSuccess(true);

      // reset
      setName("");
      setGame("");
      setRarity("");
      setCardNumber("");
      setCondition("");
      setImageUrl("");
      setDescription("");
      setPrice(0);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={submit}
      class="bg-white p-6 rounded-2xl shadow-sm space-y-4"
    >
      <h2 class="text-xl font-bold text-[#3d342d]">
        Crear Carta
      </h2>

      <input placeholder="Nombre"
        value={name()}
        onInput={(e) => setName(e.currentTarget.value)}
        class="w-full p-2 border rounded"
      />

      <input placeholder="Juego"
        value={game()}
        onInput={(e) => setGame(e.currentTarget.value)}
        class="w-full p-2 border rounded"
      />

      <input placeholder="Rareza"
        value={rarity()}
        onInput={(e) => setRarity(e.currentTarget.value)}
        class="w-full p-2 border rounded"
      />

      <input placeholder="Número de carta"
        value={cardNumber()}
        onInput={(e) => setCardNumber(e.currentTarget.value)}
        class="w-full p-2 border rounded"
      />

      <input placeholder="Condición"
        value={condition()}
        onInput={(e) => setCondition(e.currentTarget.value)}
        class="w-full p-2 border rounded"
      />

      <input placeholder="URL de imagen"
        value={imageUrl()}
        onInput={(e) => setImageUrl(e.currentTarget.value)}
        class="w-full p-2 border rounded"
      />

      <textarea placeholder="Descripción"
        value={description()}
        onInput={(e) => setDescription(e.currentTarget.value)}
        class="w-full p-2 border rounded"
      />

      <input type="number"
        placeholder="Precio"
        value={price()}
        onInput={(e) => setPrice(Number(e.currentTarget.value))}
        class="w-full p-2 border rounded"
      />

      <button
        type="submit"
        disabled={loading()}
        class="w-full bg-[#5f7866] text-white py-2 rounded-lg"
      >
        {loading() ? "Creando..." : "Crear carta"}
      </button>

      {success() && (
        <p class="text-green-600 text-sm">
          Carta creada correctamente ✔
        </p>
      )}
    </form>
  );
}
