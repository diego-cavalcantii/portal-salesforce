import "./Artigo.css";

interface ArtigoPros {
  children?: React.ReactNode;
}

export const Artigo = ({children} : ArtigoPros) => {
  return (
    <article className="artigo">{children}</article>
  )
}