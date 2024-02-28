import React from "react";
import "./Card.css";

interface CardProps {
  children?: React.ReactNode;
  variant ?: string
}

export const Card = ({children,variant} : CardProps) => {
  return (
    <article className={`card ${variant}`}>{children}</article>
  )
}