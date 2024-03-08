import React from "react";
import "./CardForms.css";

interface CardFormsProps {
  children?: React.ReactNode
  variant?: string
}

export const CardForms = ({children,variant} : CardFormsProps) => {
  return (
    <div className={`card-form ${variant}`}>{children}</div>
  )
}