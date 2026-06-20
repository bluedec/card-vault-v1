import { createStore } from "solid-js/store";

export const [auth, setAuth] = createStore({
  username: "",
  isLoggedIn: false,
});

export function login(username: string) {
  setAuth({
    username,
    isLoggedIn: true,
  });

  localStorage.setItem("username", username);
}

export function logout() {
  setAuth({
    username: "",
    isLoggedIn: false,
  });

  localStorage.removeItem("username");
}
