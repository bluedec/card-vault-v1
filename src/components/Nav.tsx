import { A, useLocation } from "@solidjs/router";
import { Show, createSignal} from "solid-js";
import { auth } from "~/stores/auth";
import { login, logout } from "~/stores/auth";


export default function Nav() {
  const location = useLocation();

  const active = (path: string) =>
    location.pathname === path
      ? "text-[#3d342d] border-[#8a6f4d]"
      : "text-[#6b6259] border-transparent hover:text-[#3d342d] hover:border-[#b89a74]";

  const [menuOpen, setMenuOpen] = createSignal(false);
  const [usernameInput, setUsernameInput] = createSignal("");

  const handleLogin = () => {
    const username = usernameInput().trim();

    if (!username) return;

    login(username);

    setUsernameInput("");
    setMenuOpen(false);
  };

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
              active("/colecciones"),
            ].join(" ")}
          >
            <A href="/">Mercado</A>
          </li>

          <li
            class={[
              "border-b-2",
              "transition-colors",
              active("/colecciones"),
            ].join(" ")}
          >
            <A href="/colecciones">Colecciones</A>
          </li>

          <li
            class={[
              "border-b-2",
              "transition-colors",
              active("/colecciones"),
            ].join(" ")}
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
            class={[
              "border-b-2",
              "transition-colors",
              active("/colecciones"),
            ].join(" ")}
          >
            <A href="/about">Proyecto</A>
          </li>
        </ul>

        {/* Perfil */}
        <div class="flex items-center gap-4">
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

            <div class="relative">
              <button
                onClick={() => setMenuOpen(!menuOpen())}
                class="
                h-10
                w-10
                rounded-full
                bg-[#d9d2c7]
                flex
                items-center
                justify-center
                hover:bg-[#cfc6ba]
                transition
                "
              >
                👤
              </button>

              <Show when={menuOpen()}>
                <div
                  class="
                  absolute
                  right-0
                  mt-2
                  w-72
                  bg-white
                  border
                  border-[#e4ddd3]
                  rounded-xl
                  shadow-lg
                  p-4
                  "
                >
                  <Show
                    when={auth.isLoggedIn}
                    fallback={
                      <>
                        <h3 class="font-semibold text-[#3d342d] mb-3">
                          Iniciar sesión
                        </h3>

                        <input
                          value={usernameInput()}
                          onInput={(e) => setUsernameInput(e.currentTarget.value)}
                          placeholder="Nombre de usuario"
                          class="
                          w-full
                          px-3
                          py-2
                          border
                          border-[#d9d2c7]
                          rounded-lg
                          mb-3
                          "
                        />

                        <button
                          onClick={handleLogin}
                          class="
                          w-full
                          bg-[#5f7866]
                          text-white
                          py-2
                          rounded-lg
                          hover:opacity-90
                          "
                        >
                          Entrar
                        </button>
                      </>
                    }
                  >
                    <div class="space-y-3">
                      <div>
                        <p class="font-semibold text-[#3d342d]">
                          {auth.username}
                        </p>

                        <p class="text-sm text-[#8f8478]">
                          Coleccionista
                        </p>
                      </div>

                      <hr />

                      <A
                        href="/perfil"
                        class="block hover:text-[#5f7866]"
                      >
                        👤 Mi perfil
                      </A>
                      <A
                        href="/colecciones"
                        class="block hover:text-[#5f7866]"
                      >
                        📚 Mis colecciones
                      </A>

                      <A
                        href="/publicaciones"
                        class="block hover:text-[#5f7866]"
                      >
                        🃏 Mis publicaciones
                      </A>

                      <A
                        href="/tradeos"
                        class="block hover:text-[#5f7866]"
                      >
                        🔄 Mis intercambios
                      </A>

                      <button
                        onClick={() => {
                          logout();
                          setMenuOpen(false);
                        }}
                        class="
                        w-full
                        text-left
                        text-red-600
                        hover:text-red-700
                        hover:cursor-pointer
                        "
                      >
                        Cerrar sesión
                      </button>
                    </div>
                  </Show>
                </div>
              </Show>
            </div>
          </div>       </div>
      </div>
    </nav>
  );
}
