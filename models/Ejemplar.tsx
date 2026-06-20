export interface Ejemplar {
  id: string;

  cartaId: string;

  propietarioId: string;

  condicion:
    | "MINT"
    | "NEAR_MINT"
    | "LIGHT_PLAYED"
    | "MODERATE_PLAYED"
    | "HEAVY_PLAYED";

  fotoFrontal: string;

  fotoTrasera: string;

  fechaRegistro: Date;
}
