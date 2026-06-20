export interface Publicacion {
  id: string;

  vendedorId: string;

  ejemplarId: string;

  precio: number;

  estado:
    | "ACTIVA"
    | "RESERVADA"
    | "VENDIDA"
    | "CANCELADA";

  fechaCreacion: Date;
}
