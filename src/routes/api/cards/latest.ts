import { json } from "@solidjs/router";
import { db } from "~/db/database";
import { cards } from "~/db/schema";
import { desc } from "drizzle-orm";

export const GET = async () => {
  const latest = await db
    .select()
    .from(cards)
    .orderBy(desc(cards.createdAt))
    .limit(3);

  return json(latest);
};
