import "./Links.css";

interface LinksProps {
  children?: React.ReactNode;
  variant?: string
}

export const Links = ({ children, variant }: LinksProps) => {
  return (
    <a href="#" className={`link ${variant}`}>{children}</a>
  )
} 