import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  nombre: text("nombre").notNull(),
  email: text("email"),
});

export const cards = sqliteTable("cards", {
  id: integer("id").primaryKey({ autoIncrement: true }),

  name: text("name").notNull(),

  game: text("game").notNull(),

  rarity: text("rarity").notNull(),

  cardNumber: text("card_number").notNull(),

  condition: text("condition").notNull(),

  imageUrl: text("image_url").notNull(),

  description: text("description"),

  price: integer("price"),
});
