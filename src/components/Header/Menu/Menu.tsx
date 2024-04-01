import { Link } from "react-router-dom";
import { useState } from "react";
import "./Menu.css";

const MenuHeader = [
  { id: 1, text: 'Produtos', href: '#' },
  { id: 2, text: 'Indústria', href: '#' },
  { id: 3, text: 'Aprendizado', href: '#' },
  { id: 4, text: 'Suporte', href: '#' },
  { id: 5, text: 'Empresa', href: '#' },
]

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button id="menu-button" className="menu-button" onClick={toggleMenu}>Menu</button>
      <nav className={isOpen ? 'menu open' : 'menu'}>
        <ul >
          {MenuHeader.map((item) => (
            <li key={item.id}>
              <Link to={item.href}>{item.text}</Link>
            </li>
          ))}
          <li id="close" onClick={toggleMenu}><a>VOLTAR</a></li>
        </ul>
      </nav>
    </>
  );
};