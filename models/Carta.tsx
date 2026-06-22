import { InferSelectModel, InferInsertModel } from "drizzle-orm";
import { cards } from "~/db/schema";

export type Card = InferSelectModel<typeof cards>;
export type NewCard = InferInsertModel<typeof cards>;
