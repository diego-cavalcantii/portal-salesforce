import "./Header.css"
import { Logo } from "./Logo/Logo";
import { Menu } from "./Menu/Menu";
import { Icons } from "./Icons/Icons";
import { Button } from "../Button/Button";
import bars from "../../assets/bars-solid.svg";

export const Header = () => {
  return (
    <div className="header">
      <img className="bars" src={bars} />
      <Logo />
      <Menu />
      <Icons />
      <Button variant="green">Teste grátis</Button>
    </div>
  )
}