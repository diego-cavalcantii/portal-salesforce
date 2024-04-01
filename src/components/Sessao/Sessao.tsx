import { SessaoElement } from "./Sessao.style";

interface SessaoProps {
  children?: React.ReactNode
  variant?: string
}

export const Sessao = ({ children, variant }: SessaoProps) => {
  return (
    <SessaoElement className={`section ${variant}`}>{children}</SessaoElement>
  )
}