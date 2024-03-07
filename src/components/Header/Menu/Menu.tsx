import { Link } from "react-router-dom";
import "./Menu.css";

const MenuHeader = [
  {id:1,text:'Produtos',href:'#'},
  {id:2,text:'Indústria',href:'#'},
  {id:3,text:'Aprendizado',href:'#'},
  {id:4,text:'Suporte',href:'#'},
  {id:5,text:'Empresa',href:'#'},
  {id:6,text:'Integrantes',href:'/integrantes'},
  {id:7,text:'Formulario',href:'/formulario'},
]

export const Menu = () => {
  return (
    <nav>
      <ul className="menu">
        {MenuHeader.map((item) => (
          <li key={item.id}>
            <Link to={item.href}>{item.text}</Link>
          </li>
        ))}
      </ul>
      <div className="contato">
        <p><u>Entre em contato</u></p>
        <p>0800 891 1887</p>
      </div>
    </nav>
  );
};