import "./SubTitulo.css";

interface SubTituloProps {
  children ?: React.ReactNode;
}

export const SubTitulo = ({children} : SubTituloProps) => {
  return (
    <h2 className="subtitulo">{children}</h2>
  )
}