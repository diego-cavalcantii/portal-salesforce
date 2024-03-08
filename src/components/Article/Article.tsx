import "./Article.css";

interface ArtigoPros {
  children?: React.ReactNode;
  variant ?: string
}

export const Article = ({children, variant} : ArtigoPros) => {
  return (
    <article className={`article ${variant}`}>{children}</article>
  )
}