import React from "react";
import "./CardForms.css";

interface CardFormsProps {
  children?: React.ReactNode
}

export const CardForms = ({children} : CardFormsProps) => {
  return (
    <div className="card-form">{children}</div>
  )
}