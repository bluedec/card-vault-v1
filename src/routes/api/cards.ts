import { eq } from "drizzle-orm";
import { db } from "~/db/database";
import { cards } from "~/db/schema";

export const POST = async ({ request }: any) => {
  const body = await request.json();

  const inserted = await db
    .insert(cards)
    .values({
      name: body.name,
      game: body.game,
      rarity: body.rarity,
      cardNumber: body.cardNumber,
      condition: body.condition,
      imageUrl: body.imageUrl,
      description: body.description ?? null,
      price: body.price,
      createdAt: new Date(),
    })
    .returning();

  return Response.json({
    success: true,
    card: inserted[0],
  });
};
export const GET = async ({ request }: any) => {
  const url = new URL(request.url);

  const name = url.searchParams.get("name");

  if (!name) {
    return Response.json({
      error: "Missing card name",
    }, {
      status: 400,
    });
  }

  const result = await db
    .select()
    .from(cards)
    .where(eq(cards.name, name));

  return Response.json(result);
};

