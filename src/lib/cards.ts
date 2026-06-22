import { query } from "@solidjs/router";
import { turso } from "./turso";
import { Card } from "../../models/Carta";

// Create a server-side query function (this never runs on the client)
export const getCards = query(async () => {
  "use server"
  try {
    const rs = await turso.execute("SELECT * FROM cards");
    return rs.rows as unknown as Card[];
  } catch (e) {
    console.error(e);
    return [];
  }
}, "getCards");
