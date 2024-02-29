import "./Artigo.css";

interface ArtigoPros {
  children?: React.ReactNode;
  variant ?: string
}

export const Artigo = ({children, variant} : ArtigoPros) => {
  return (
    <article className={`artigo ${variant}`}>{children}</article>
  )
}