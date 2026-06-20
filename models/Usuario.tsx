import { Reputacion } from "~/enums";

export interface Usuario {
  id: string;
  nombre: string;
  email: string;

  reputacion: Reputacion;

  fechaRegistro: Date;
}
