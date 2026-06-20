export interface Trade {
  id: string;

  usuarioOrigenId: string;

  usuarioDestinoId: string;

  estado:
    | "PENDIENTE"
    | "ACEPTADO"
    | "RECHAZADO"
    | "COMPLETADO";
}
