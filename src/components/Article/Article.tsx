import { ArticleElement } from "./Article.style";

interface ArtigoPros {
  children?: React.ReactNode;
  variant?: string
}

export const Article = ({ children, variant }: ArtigoPros) => {
  return (
    <ArticleElement className={`article ${variant}`}>{children}</ArticleElement>
  )
}