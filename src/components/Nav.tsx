import { A, useLocation } from "@solidjs/router";

export default function Nav() {
  const location = useLocation();

  const active = (path: string) =>
    location.pathname === path
      ? "text-[#3d342d] border-[#8a6f4d]"
      : "text-[#6b6259] border-transparent hover:text-[#3d342d] hover:border-[#b89a74]";

  return (
    <nav
      class="
        sticky top-0 z-50
        bg-[#f4f1eb]
        border-b border-[#d9d2c7]
        backdrop-blur
      "
    >
      <div
        class="
          max-w-7xl
          mx-auto
          px-6
          h-16
          flex
          items-center
          justify-between
        "
      >
        {/* Logo */}
        <A
          href="/"
          class="
            flex
            items-center
            gap-3
            font-bold
            text-xl
            text-[#3d342d]
          "
        >
          <span class="text-2xl">🃏</span>
          <span>CardVault</span>
        </A>

        {/* Links */}
        <ul class="flex items-center gap-6">
          <li
            class={`
              border-b-2
              transition-colors
              ${active("/")}
            `}
          >
            <A href="/">Mercado</A>
          </li>

          <li
            class={`
              border-b-2
              transition-colors
              ${active("/colecciones")}
            `}
          >
            <A href="/colecciones">Colecciones</A>
          </li>

          <li
            class={`
              border-b-2
              transition-colors
              ${active("/tradeos")}
            `}
          >
            <A href="/tradeos">Tradeos</A>
          </li>

          <li
            class={`
              border-b-2
              transition-colors
              ${active("/logros")}
            `}
          >
            <A href="/logros">Logros</A>
          </li>

          <li
            class={`
              border-b-2
              transition-colors
              ${active("/about")}
            `}
          >
            <A href="/about">Proyecto</A>
          </li>
        </ul>

        {/* Perfil */}
        <div class="flex items-center gap-4">
          <button
            class="
              px-4
              py-2
              rounded-lg
              bg-[#5f7866]
              text-white
              hover:opacity-90
              transition
            "
          >
            Publicar Carta
          </button>

          <div
            class="
              h-10
              w-10
              rounded-full
              bg-[#d9d2c7]
              flex
              items-center
              justify-center
            "
          >
            👤
          </div>
        </div>
      </div>
    </nav>
  );
}
