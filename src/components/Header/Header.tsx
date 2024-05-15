import { Menu, Icons } from "..";
import { Logos } from "../Imgs";
import { Link } from "react-router-dom";
import { ContatoElement, HeaderElement, LogoElement } from "./Header.style";
import { GreenButton } from "../../styles/Button";

export const Header = () => {
  return (
    <>
      <HeaderElement>
        <Link to={"/"}>
          <LogoElement src={Logos.logo} alt="Logo da Salesforce" />
        </Link>
        <Menu />
        <ContatoElement>
          <p><u>Entre em contato</u></p>
          <p>0800 891 1887</p>
        </ContatoElement>
        <Icons />
        <GreenButton>Teste grátis</GreenButton>
      </HeaderElement>
    </>
  )
}