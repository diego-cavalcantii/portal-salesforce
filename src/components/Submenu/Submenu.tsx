import { SubMenuElement } from "./Submenu.style";

interface SubMenuProps {
  children?: React.ReactNode
}

export const Submenu = ({ children }: SubMenuProps) => {
  return (
    <SubMenuElement>{children}</SubMenuElement>
  )
}