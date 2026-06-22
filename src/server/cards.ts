import { query } from "@solidjs/router";
import { db } from "~/db/database";
import { cards } from "~/db/schema";
import { desc } from "drizzle-orm";

export const getLatestCards = query(async () => {
  "use server";
  return await db
    .select()
    .from(cards)
    .orderBy(desc(cards.createdAt))
    .limit(3);;
}, "latest-cards");

