import { For } from "solid-js";
import CreateCardForm from "~/components/CreateCardForm";

const listings = [
  {
    id: 1,
    nombre: "Charizard",
    juego: "Pokémon",
    precio: 250000,
    imagen:
    "https://images.pokemontcg.io/base1/4_hires.png",
  },
  {
    id: 2,
    nombre: "Blastoise",
    juego: "Pokémon",
    precio: 180000,
    imagen:
    "https://images.pokemontcg.io/base1/2_hires.png",
  },
  {
    id: 3,
    nombre: "Venusaur",
    juego: "Pokémon",
    precio: 150000,
    imagen:
    "https://images.pokemontcg.io/base1/15_hires.png",
  },
];

export default function Perfil() {
  return (
    <main class="min-h-screen bg-[#f4f1eb] text-[#3d342d]">
      <div class="max-w-7xl mx-auto px-6 py-8">

        {/* Banner */}
        <div
          class="
          h-48
          rounded-2xl
          bg-gradient-to-r
          from-[#6d5845]
          via-[#8a6f4d]
          to-[#b89a74]
          "
        />

        {/* Header */}
        <div class="bg-white rounded-2xl shadow-sm -mt-16 p-6 mx-6">
          <div class="flex justify-between items-start">
            <div class="flex gap-6">
              <div
                class="
                h-28
                w-28
                rounded-full
                bg-[#d9d2c7]
                flex
                items-center
                justify-center
                text-5xl
                border-4
                border-white
                "
              >
                👤
              </div>

              <div>
                <h1 class="text-3xl font-bold">
                  Jesus
                </h1>

                <p class="text-[#7a7168]">
                  @jesus
                </p>

                <p class="mt-2 text-sm text-[#8f8478]">
                  Coleccionista desde 2026
                </p>
              </div>
            </div>

            <button
              class="
              px-4
              py-2
              rounded-lg
              bg-[#5f7866]
              text-white
              "
            >
              Editar Perfil
            </button>
          </div>

          {/* Descripción */}
          <div class="mt-6">
            <h2 class="font-semibold mb-2">
              Sobre mí
            </h2>

            <p class="text-[#5f564c]">
              Fanático de Pokémon TCG.
              Actualmente busco completar el set Base Set
              y conseguir cartas en excelente estado.
            </p>
          </div>

          {/* Stats */}
          <div class="grid grid-cols-3 gap-4 mt-6">
            <div class="bg-[#f8f6f2] rounded-xl p-4 text-center">
              <p class="text-2xl font-bold">23</p>
              <p>Cartas</p>
            </div>

            <div class="bg-[#f8f6f2] rounded-xl p-4 text-center">
              <p class="text-2xl font-bold">5</p>
              <p>Ventas</p>
            </div>

            <div class="bg-[#f8f6f2] rounded-xl p-4 text-center">
              <p class="text-2xl font-bold">2</p>
              <p>Tradeos</p>
            </div>
          </div>
        </div>

        {/* Logros */}
        <section class="mt-8">
          <h2 class="text-2xl font-bold mb-4">
            Logros
          </h2>

          <div
            class="
            bg-white
            rounded-2xl
            p-6
            shadow-sm
            "
          >
            <div class="flex gap-4 text-5xl">
              <span>🏆</span>
              <span>🥈</span>

              <div
                class="
                h-14
                w-14
                rounded-full
                border-2
                border-dashed
                border-[#d9d2c7]
                "
              />

              <div
                class="
                h-14
                w-14
                rounded-full
                border-2
                border-dashed
                border-[#d9d2c7]
                "
              />

              <div
                class="
                h-14
                w-14
                rounded-full
                border-2
                border-dashed
                border-[#d9d2c7]
                "
              />
            </div>
          </div>
        </section>

        <CreateCardForm />
        {/* Crear Carta */}
        <section class="mt-8">
          <h2 class="text-2xl font-bold mb-4">
            Publicar Nueva Carta
          </h2>

          <div
            class="
            bg-white
            rounded-2xl
            p-6
            shadow-sm
            "
          >
            <form
              class="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-4
              "
            >
              <div>
                <label class="block mb-2 font-medium">
                  Nombre de la Carta
                </label>

                <input
                  type="text"
                  placeholder="Charizard"
                  class="
                  w-full
                  border
                  border-[#d9d2c7]
                  rounded-lg
                  px-4
                  py-2
                  focus:outline-none
                  "
                />
              </div>

              <div>
                <label class="block mb-2 font-medium">
                  Juego
                </label>

                <select
                  class="
                  w-full
                  border
                  border-[#d9d2c7]
                  rounded-lg
                  px-4
                  py-2
                  "
                >
                  <option>Pokémon</option>
                  <option>Magic: The Gathering</option>
                  <option>Yu-Gi-Oh!</option>
                  <option>One Piece</option>
                </select>
              </div>

              <div>
                <label class="block mb-2 font-medium">
                  Rareza
                </label>

                <select
                  class="
                  w-full
                  border
                  border-[#d9d2c7]
                  rounded-lg
                  px-4
                  py-2
                  "
                >
                  <option>Común</option>
                  <option>Poco Común</option>
                  <option>Rara</option>
                  <option>Ultra Rara</option>
                  <option>Legendaria</option>
                </select>
              </div>

              <div>
                <label class="block mb-2 font-medium">
                  Precio
                </label>

                <input
                  type="number"
                  placeholder="250000"
                  class="
                  w-full
                  border
                  border-[#d9d2c7]
                  rounded-lg
                  px-4
                  py-2
                  "
                />
              </div>

              <div>
                <label class="block mb-2 font-medium">
                  Estado
                </label>

                <select
                  class="
                  w-full
                  border
                  border-[#d9d2c7]
                  rounded-lg
                  px-4
                  py-2
                  "
                >
                  <option>Mint</option>
                  <option>Near Mint</option>
                  <option>Excellent</option>
                  <option>Good</option>
                  <option>Poor</option>
                </select>
              </div>

              <div>
                <label class="block mb-2 font-medium">
                  Número de Carta
                </label>

                <input
                  type="text"
                  placeholder="4/102"
                  class="
                  w-full
                  border
                  border-[#d9d2c7]
                  rounded-lg
                  px-4
                  py-2
                  "
                />
              </div>

              <div class="md:col-span-2">
                <label class="block mb-2 font-medium">
                  Imagen de la Carta
                </label>

                <input
                  type="url"
                  placeholder="https://..."
                  class="
                  w-full
                  border
                  border-[#d9d2c7]
                  rounded-lg
                  px-4
                  py-2
                  "
                />
              </div>

              <div class="md:col-span-2">
                <label class="block mb-2 font-medium">
                  Descripción
                </label>

                <textarea
                  rows="4"
                  placeholder="Información adicional sobre la carta..."
                  class="
                  w-full
                  border
                  border-[#d9d2c7]
                  rounded-lg
                  px-4
                  py-2
                  "
                />
              </div>

              <div class="md:col-span-2 flex justify-end">
                <button
                  type="submit"
                  class="
                  px-6
                  py-3
                  rounded-lg
                  bg-[#5f7866]
                  text-white
                  hover:opacity-90
                  transition
                  "
                >
                  Publicar Carta
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Cartas publicadas */}
        <section class="mt-8">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-2xl font-bold">
              Cartas Publicadas
            </h2>

            <button
              class="
              px-4
              py-2
              rounded-lg
              bg-[#5f7866]
              text-white
              "
            >
              Publicar Carta
            </button>
          </div>

          <div
            class="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
            "
          >
            <For each={listings}>
              {(card) => (
                <div
                  class="
                  bg-white
                  rounded-2xl
                  overflow-hidden
                  shadow-sm
                  hover:shadow-md
                  transition
                  "
                >
                  <img
                    src={card.imagen}
                    alt={card.nombre}
                    class="
                    h-72
                    w-full
                    object-cover
                    "
                  />

                  <div class="p-4">
                    <h3 class="font-bold">
                      {card.nombre}
                    </h3>

                    <p class="text-sm text-[#8f8478]">
                      {card.juego}
                    </p>

                    <p
                      class="
                      mt-2
                      text-xl
                      font-bold
                      text-[#5f7866]
                      "
                    >
                      ${card.precio.toLocaleString()}
                    </p>
                  </div>
                </div>
              )}
            </For>
          </div>
        </section>
      </div>
    </main>
  );
}
