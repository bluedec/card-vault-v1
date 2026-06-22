import { createAsync } from "@solidjs/router";
import { For } from "solid-js";

type Card = {
  id: number;
  name: string;
  game: string;
  rarity: string;
  imageUrl: string;
  price: number;
  createdAt: number | Date;
};

export default function RecentlyAddedCards() {
  return (
      <h2 class="text-2xl font-bold mb-4">
        Últimas cartas agregadas
      </h2>

  );
}
