export interface Carta {
  id: string;

  nombre: string;

  juego:
    | "POKEMON"
    | "YUGIOH"
    | "MAGIC";

  expansion: string;

  numeroColeccion: string;

  imagenOficial: string;
}
