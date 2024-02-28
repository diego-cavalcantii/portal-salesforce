import "./SubTitulo.css";

interface SubTituloProps {
  children ?: React.ReactNode;
  variant ?: string
}

export const SubTitulo = ({children,variant} : SubTituloProps) => {
  return (
    <h2 className={`subtitulo ${variant}`}>{children}</h2>
  )
}