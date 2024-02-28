import "./Link.css";

interface LinkProps {
  children?:React.ReactNode;
  variant ?: string
}

export const Link = ({children,variant} : LinkProps) => {
  return (
    <a href="#" className={`link ${variant}`}>{children}</a>
  )
} 