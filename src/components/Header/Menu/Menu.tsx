import { Link } from "react-router-dom";
import { useState } from "react";
import { ButtonMenuElement, MenuElement, Voltar } from "./Menu.style";

const MenuHeader = [
  { id: 1, text: 'Produtos', href: '#' },
  { id: 2, text: 'Indústria', href: '#' },
  { id: 3, text: 'Aprendizado', href: '#' },
  { id: 4, text: 'Suporte', href: '#' },
  { id: 5, text: 'Empresa', href: '#' },
  { id: 6, text: 'Integrantes', href: '/integrantes' },
]

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ButtonMenuElement onClick={toggleMenu}>Menu</ButtonMenuElement>
      <MenuElement className={isOpen ? 'menu open' : 'menu'}>
        <ul >
          {MenuHeader.map((item) => (
            <li key={item.id}>
              <Link to={item.href}>{item.text}</Link>
            </li>
          ))}
          <Voltar onClick={toggleMenu}><a>VOLTAR</a></Voltar>
        </ul>
      </MenuElement>
    </>
  );
};