import React from "react";
import { CardElement } from "./Card.style";

interface CardProps {
  children?: React.ReactNode;
  variant?: string
}

export const Card = ({ children, variant }: CardProps) => {
  return (
    <CardElement className={`card ${variant}`}>{children}</CardElement>
  )
}