import { SubTituloElement } from "./SubTitulo.style";

interface SubTituloProps {
  children?: React.ReactNode;
  variant?: string
}

export const SubTitulo = ({ children, variant }: SubTituloProps) => {
  return (
    <SubTituloElement className={`subtitulo ${variant}`}>{children}</SubTituloElement>
  )
}