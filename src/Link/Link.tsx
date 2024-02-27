import "./Link.css";

interface LinkProps {
  children?:React.ReactNode;
}

export const Link = ({children} : LinkProps) => {
  return (
    <a href="#" className="link">{children}</a>
  )
} 