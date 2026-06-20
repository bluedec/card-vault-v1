import { JSX, onMount } from "solid-js";

import { login } from "~/stores/auth";

interface Props {
  children: JSX.Element;
}

export default function AuthProvider(props: Props) {
  onMount(() => {
    const username = localStorage.getItem("username");

    if (username) {
      login(username);
    }
  });

  return props.children;
}
