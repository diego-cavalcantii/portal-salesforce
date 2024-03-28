import "./Sessao.css";

interface SessaoProps {
  children?: React.ReactNode
  variant?: string
}

export const Sessao = ({ children, variant }: SessaoProps) => {
  return (
    <section className={`sessao ${variant}`}>{children}</section>
  )
}