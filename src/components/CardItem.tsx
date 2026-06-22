export default function CardItem(props: {
  card: {
    name: string;
    game: string;
    rarity: string;
    imageUrl: string;
    price: number;
  };
}) {
  return (
    <div class="w-64 bg-white rounded-xl shadow overflow-hidden mx-auto">
      {/* Image container con proporción de carta */}
      <div class="aspect-[2.5/3.5] bg-[#faf8f5]">
        <img
          src={props.card.imageUrl}
          alt={props.card.name}
          class="h-full w-full object-contain"
        />
      </div>

      <div class="p-4">
        <h3 class="text-lg font-semibold">
          {props.card.name}
        </h3>

        <p class="text-sm text-gray-500">
          {props.card.game} · {props.card.rarity}
        </p>

        <p class="mt-3 text-xl font-bold">
          USD {props.card.price}
        </p>
      </div>
    </div>
  );
}
