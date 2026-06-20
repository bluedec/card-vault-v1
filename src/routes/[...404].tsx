import { A } from "@solidjs/router";

export default function NotFound() {
  return (
    <main class="min-h-screen bg-[#f4f1eb] flex items-center justify-center px-6">
      <div class="max-w-2xl text-center">
        <div class="text-8xl mb-6">🃏</div>

        <h1 class="text-7xl font-bold text-[#3d342d]">
          404
        </h1>

        <h2 class="mt-4 text-3xl font-semibold text-[#5f564c]">
          Esta carta no se encuentra en la colección.
        </h2>

        <p class="mt-6 text-lg text-[#7a7168] leading-relaxed">
          La página que intentas visitar no existe o ha sido movida.
          Tal vez la publicación fue retirada, la colección cambió
          o simplemente llegaste a una dirección incorrecta.
        </p>

        <div class="mt-10 flex flex-wrap justify-center gap-4">
          <A
            href="/"
            class="
              px-6 py-3
              rounded-xl
              bg-[#5f7866]
              text-white
              hover:opacity-90
              transition
            "
          >
            Volver al Mercado
          </A>

          <A
            href="/about"
            class="
              px-6 py-3
              rounded-xl
              border
              border-[#b9ad9d]
              text-[#5f564c]
              hover:bg-white
              transition
            "
          >
            Acerca del Proyecto
          </A>
        </div>

        <div
          class="
            mt-12
            p-6
            rounded-2xl
            bg-white
            shadow-sm
            border
            border-[#e4ddd3]
          "
        >
          <p class="text-sm uppercase tracking-wider text-[#8f8478]">
            Consejo de Coleccionista
          </p>

          <p class="mt-2 text-[#5f564c]">
            Completa sets, registra tu colección, intercambia cartas
            con otros usuarios y consigue insignias por tus logros
            dentro de CardVault.
          </p>
        </div>
      </div>
    </main>
  );
}
