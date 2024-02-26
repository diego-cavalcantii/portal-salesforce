import "./Button.css";

interface ButtonProps {
  children?: React.ReactNode;
}


export const Button = ({ children }: ButtonProps) => {
  return (
    <a href="#" className="button">{children}</a>
  )
}