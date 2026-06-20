export interface Carta {
  id: string;

  nombre: string;

  juego:
    | "POKEMON"
    | "YUGIOH"
    | "MAGIC";

  expansion: string; // En el futuro debera ser un enum

  numeroColeccion: string;

  imagenOficial: string;
}
