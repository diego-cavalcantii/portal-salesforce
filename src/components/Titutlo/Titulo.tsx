import React from "react";
import "./Titulo.css";

interface TituloProps {
  children ?: React.ReactNode
}

export const Titulo = ({children} : TituloProps) => {
  return (
    <h1 className="titulo">{children}</h1>
  )
}