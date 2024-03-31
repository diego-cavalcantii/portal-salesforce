import { ContainerAstroElement } from "./ContainerAstro.style"

interface ContainerAstroProps {
  children?: React.ReactNode
  variant?: string
}

export const ContainerAstro = ({ children, variant }: ContainerAstroProps) => {
  return (
    <ContainerAstroElement className={`primary ${variant}`}>{children}</ContainerAstroElement>
  )
}