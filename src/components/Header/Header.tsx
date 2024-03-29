import "./Header.css"
import { Menu, Icons, Button } from "..";
import { Photos } from "../Photos";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className="header">
        <img className="bars" src={Photos.bars} />
        <Link to={"/"}>
          <img className="logo" src={Photos.logo} alt="Logo da Salesforce" />
        </Link>
        <Menu />
        <Icons />
        <Button variant="green">Teste grátis</Button>
      </div>
    </>
  )
}