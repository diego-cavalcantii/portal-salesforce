import React from "react";
import "./Titulo.css";

interface TituloProps {
  children?: React.ReactNode
  variant?: string
}

export const Titulo = ({ children, variant }: TituloProps) => {
  return (
    <h1 className={`titulo ${variant}`}>{children}</h1>
  )
}