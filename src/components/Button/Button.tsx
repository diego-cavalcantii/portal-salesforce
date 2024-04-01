import { ButtonElement } from "./Button.style";

interface ButtonProps {
  children?: React.ReactNode;
  variant?: string
}


export const Button = ({ children, variant }: ButtonProps) => {
  return (
    <ButtonElement className={`button ${variant}`}>{children}</ButtonElement>
  )
}