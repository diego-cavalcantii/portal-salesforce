import "./Sessao.css";

interface SessaoProps {
  children?:React.ReactNode
}

export const Sessao = ({children} : SessaoProps) => {
  return (
    <section className="sessao">{children}</section>
  )
}