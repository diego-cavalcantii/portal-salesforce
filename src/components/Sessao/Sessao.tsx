import { SessaoElement } from "./Sessao.style";

interface SessaoProps {
  children?: React.ReactNode
}

export const Sessao = ({ children }: SessaoProps) => {
  return (
    <SessaoElement>{children}</SessaoElement>
  )
}