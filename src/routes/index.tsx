import { For } from "solid-js";
import RecentlyAddedCards from "~/components/RecentlyAddedCards";
import { getLatestCards } from "~/server/cards";
import { query, createAsync } from "@solidjs/router";
import CardItem from "~/components/CardItem";

const destacadas = [
  {
    id: "1",
    name: "Charizard",
    game: "Pokemon",
    rarity: "Legendary",
    set: "Base Set",
    price: 450,
    imageUrl:
    "https://images.pokemontcg.io/base1/4_hires.png",
  },
  {
    id: "2",
    name: "Lugia",
    game: "Pokemon",
    rarity: "Legendary",
    set: "Neo Genesis",
    price: 300,
    imageUrl:
    "https://images.pokemontcg.io/neo1/9_hires.png",
  },
  {
    id: "3",
    name: "Blastoise",
    game: "Pokemon",
    rarity: "Legendary",
    set: "Base Set",
    price: 250,
    imageUrl:
    "https://images.pokemontcg.io/base1/2_hires.png",
  },
];


export const route = {
  load: ({ params }: any) => getLatestCards()
};

export default function Home() {
  const cards: any = createAsync(() => getLatestCards())
  console.log(cards())

  return (
    <main class="min-h-screen bg-[#f4f1eb] text-[#2f2a24]">
      {/* Hero */}
      <section class="max-w-7xl mx-auto px-8 py-20">
        <h1 class="text-6xl font-bold">
          Compra, vende e intercambia cartas coleccionables.
        </h1>

        <p class="mt-6 text-xl text-[#5f564c] max-w-3xl">
          Marketplace especializado para Pokémon, Yu-Gi-Oh!,
          Magic y otros TCG. Publicaciones verificadas,
          reputación de vendedores y seguimiento de colección.
        </p>

        <div class="flex gap-4 mt-10">
          <button class="px-6 py-3 rounded-xl bg-[#5f7866] text-white">
            Explorar mercado
          </button>

          <button class="px-6 py-3 rounded-xl border border-[#8b8175]">
            Registrar colección
          </button>
        </div>
      </section>

      {/* Estadísticas */}
      <section class="max-w-7xl mx-auto px-8 mb-20">
        <div class="grid md:grid-cols-4 gap-6">
          <div class="bg-white rounded-xl p-6 shadow">
            <p class="text-sm text-gray-500">Cartas registradas</p>
            <h2 class="text-3xl font-bold">52.341</h2>
          </div>

          <div class="bg-white rounded-xl p-6 shadow">
            <p class="text-sm text-gray-500">Usuarios</p>
            <h2 class="text-3xl font-bold">4.120</h2>
          </div>

          <div class="bg-white rounded-xl p-6 shadow">
            <p class="text-sm text-gray-500">Tradeos exitosos</p>
            <h2 class="text-3xl font-bold">8.902</h2>
          </div>

          <div class="bg-white rounded-xl p-6 shadow">
            <p class="text-sm text-gray-500">Sets completados</p>
            <h2 class="text-3xl font-bold">1.437</h2>
          </div>
        </div>
      </section>




      {/* Destacadas */}
      <section class="max-w-7xl mx-auto px-8 pb-20">
        <h2 class="text-3xl font-bold mb-8">
          Publicaciones destacadas
        </h2>

        <div class="grid md:grid-cols-3 gap-8">
          <For each={destacadas}>
            {(card) => <CardItem card={card} />}
          </For>
        </div>
      </section>


      <section class="mt-8">
        <h2 class="text-2xl font-bold mb-4">
          Últimas cartas agregadas
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <For each={cards()}>
            {(card) => <CardItem card={card} />}
          </For>

        </div>
      </section>

    </main>
  );
}
