import { LinksElement } from "./Links.style";

interface LinksProps {
  children?: React.ReactNode;
  variant?: string
}

export const Links = ({ children, variant }: LinksProps) => {
  return (
    <LinksElement href="#" className={`link ${variant}`}>{children}</LinksElement>
  )
} 