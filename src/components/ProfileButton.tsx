import { Show, createSignal} from "solid-js";
import { auth, login, logout } from "~/stores/auth";
import { A } from "@solidjs/router";


export function ProfileButton(props: any) {
  const [menuOpen, setMenuOpen] = createSignal(false);
  const [menuVisible, setMenuVisible] = createSignal(false);

  function openMenu() {
    setMenuOpen(true);
    requestAnimationFrame(() => setMenuVisible(true));
  }

  function closeMenu() {
    setMenuVisible(false);
    setTimeout(() => setMenuOpen(false), 200);
  }

  function toggleMenu() {
    if (menuOpen()) closeMenu();
      else openMenu();
  }  const [usernameInput, setUsernameInput] = createSignal("");

  const handleLogin = () => {
    const username = usernameInput().trim();

    if (!username) return;

    login(username);

    setUsernameInput("");
    setMenuOpen(false);
  };
  return (
    <>
      {/* Perfil */}
      <div class="flex items-center gap-4">

        <div class="relative">
          {/* Avatar */}
          <button
            onClick={toggleMenu}
            class="h-10 w-10 rounded-full bg-[#d9d2c7] flex items-center justify-center
            hover:bg-[#cfc6ba] transition"
            style={`
            outline: ${menuOpen() ? "2px solid #5f7866" : "2px solid transparent"};
            outline-offset: 2px;
            transition: outline-color 0.2s ease;
            `}
          >
            👤
          </button>

          {/* Dropdown */}
          <Show when={menuOpen()}>
            <div
              style={`
              position: absolute;
              right: 0;
              margin-top: 10px;
              width: 288px;
              background: white;
              border: 1px solid #e4ddd3;
              border-radius: 16px;
              box-shadow: 0 8px 32px rgba(0,0,0,0.12);
              padding: 1rem;
              transform-origin: top right;
              transform: ${menuVisible() ? "scale(1) translateY(0)" : "scale(0.95) translateY(-8px)"};
              opacity: ${menuVisible() ? "1" : "0"};
              transition: transform 0.2s ease, opacity 0.2s ease;
              z-index: 50;
              `}
            >
              <Show
                when={auth.isLoggedIn}
                fallback={
                  <div style="display:flex;flex-direction:column;gap:12px;">
                    <h3 style="font-weight:600;color:#3d342d;font-size:15px;">
                      Iniciar sesión
                    </h3>

                    <input
                      value={usernameInput()}
                      onInput={(e) => setUsernameInput(e.currentTarget.value)}
                      placeholder="Nombre de usuario"
                      style="width:100%;padding:8px 12px;border:1px solid #d9d2c7;
                      border-radius:8px;font-size:14px;outline:none;box-sizing:border-box;"
                    />

                    <button
                      onClick={handleLogin}
                      style="width:100%;background:#5f7866;color:white;padding:9px;
                      border-radius:8px;font-weight:500;cursor:pointer;border:none;
                      font-size:14px;"
                    >
                      Entrar
                    </button>
                  </div>
                }
              >
                <div style="display:flex;flex-direction:column;gap:4px;">
                  {/* Info usuario */}
                  <div style="padding-bottom:12px;border-bottom:1px solid #f3f0eb;margin-bottom:4px;">
                    <div style="display:flex;align-items:center;gap:10px;">
                      <div style="width:36px;height:36px;border-radius:50%;background:#e8e4dc;
                        display:flex;align-items:center;justify-content:center;font-size:16px;">
                        👤
                      </div>
                      <div>
                        <p style="font-weight:600;color:#3d342d;font-size:14px;">{auth.username}</p>
                        <p style="font-size:12px;color:#8f8478;">Coleccionista</p>
                      </div>
                    </div>
                  </div>

                  {/* Links */}
                  {[
                    { href: "/user/profile",        icon: "👤", label: "Mi perfil" },
                    { href: "/user/collections",   icon: "📚", label: "Mis colecciones" },
                    { href: "/publicaciones", icon: "🃏", label: "Mis publicaciones" },
                    { href: "/trades",       icon: "🔄", label: "Mis intercambios" },
                  ].map((item) => (
                      <A
                        href={item.href}
                        onClick={closeMenu}
                        style="display:flex;align-items:center;gap:10px;padding:8px 6px;
                        border-radius:8px;font-size:14px;color:#3d342d;text-decoration:none;
                        transition:background 0.15s;"
                        onMouseEnter={(e: any) => (e.currentTarget.style.background = "#f4f1eb")}
                        onMouseLeave={(e: any) => (e.currentTarget.style.background = "transparent")}
                      >
                        <span style="font-size:16px;">{item.icon}</span>
                        {item.label}
                      </A>
                    ))}

                  {/* Cerrar sesión */}
                  <div style="border-top:1px solid #f3f0eb;margin-top:4px;padding-top:8px;">
                    <button
                      onClick={() => { logout(); closeMenu(); }}
                      style="width:100%;text-align:left;padding:8px 6px;border-radius:8px;
                      font-size:14px;color:#dc2626;cursor:pointer;background:none;border:none;
                      transition:background 0.15s;"
                      onMouseEnter={(e) => (e.currentTarget.style.background = "#fef2f2")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                    >
                      Cerrar sesión
                    </button>
                  </div>
                </div>
              </Show>
            </div>
          </Show>
        </div>
      </div>
    </>
  );

}
