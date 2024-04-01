import "./Header.css"
import { Menu, Icons, Button } from "..";
import { Photos } from "../Photos";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className="header">
        <Link to={"/"}>
          <img className="logo" src={Photos.logo} alt="Logo da Salesforce" />
        </Link>
        <Menu />
        <div className="contato">
          <p><u>Entre em contato</u></p>
          <p>0800 891 1887</p>
        </div>
        <Icons />
        <Button variant="green">Teste grátis</Button>
      </div>
    </>
  )
}