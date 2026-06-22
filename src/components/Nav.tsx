import { A, useLocation } from "@solidjs/router";
import { ProfileButton } from "./ProfileButton";

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
            class={[
              "border-b-2",
              "transition-colors",
              active("/"),
            ].join(" ")}
          >
            <A href="/">Mercado</A>
          </li>
          <li
            class={[
              "border-b-2",
              "transition-colors",
              active("/user/collections"),
            ].join(" ")}
          >
            <A href="/user/collections">Mi Coleccion</A>
          </li>

          <li
            class={[
              "border-b-2",
              "transition-colors",
              active("/shop"),
            ].join(" ")}
          >
            <A href="/shop">Tienda</A>
          </li>

          <li
            class={[
              "border-b-2",
              "transition-colors",
              active("/trades"),
            ].join(" ")}
          >
            <A href="/trades">Tradeos</A>
          </li>

          <li
            class={[
              "border-b-2",
              "transition-colors",
              active("/user/achievements"),
            ].join(" ")}
          >
            <A href="/user/achievements">Logros</A>
          </li>

          <li
            class={[
              "border-b-2",
              "transition-colors",
              active("/about"),
            ].join(" ")}
          >
            <A href="/about">Proyecto</A>
          </li>
        </ul>
        <ProfileButton />
      </div>
    </nav>
  );
}
