import React from "react";
import { TituloElement } from "./Titulo.style";

interface TituloProps {
  children?: React.ReactNode
  variant?: string
}

export const Titulo = ({ children, variant }: TituloProps) => {
  return (
    <TituloElement className={`titulo ${variant}`}>{children}</TituloElement>
  )
}