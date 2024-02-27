import React from "react";
import "./Card.css";

interface CardProps {
  children?: React.ReactNode;
}

export const Card = ({children} : CardProps) => {
  return (
    <article className="card">{children}</article>
  )
}