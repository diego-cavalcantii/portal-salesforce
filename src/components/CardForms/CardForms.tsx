import React from "react";
import { CardFormsElement } from "./CardFoms.style";

interface CardFormsProps {
  children?: React.ReactNode
  variant?: string
}

export const CardForms = ({ children, variant }: CardFormsProps) => {
  return (
    <CardFormsElement className={`card-form ${variant}`}>{children}</CardFormsElement>
  )
}