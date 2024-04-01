import { Menu, Icons, Button } from "..";
import { Photos } from "../Photos";
import { Link } from "react-router-dom";
import { ContatoElement, HeaderElement, LogoElement } from "./Header.style";

export const Header = () => {
  return (
    <>
      <HeaderElement>
        <Link to={"/"}>
          <LogoElement src={Photos.logo} alt="Logo da Salesforce" />
        </Link>
        <Menu />
        <ContatoElement>
          <p><u>Entre em contato</u></p>
          <p>0800 891 1887</p>
        </ContatoElement>
        <Icons />
        <Button variant="green">Teste grátis</Button>
      </HeaderElement>
    </>
  )
}