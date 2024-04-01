import styled from "styled-components"

export const MenuElement = styled.div`
  &.menu {
  margin-right: 150px;
}

  &.menu a {
  font-weight: 700;
  text-decoration: none;
}

@media(min-width:375px) {
  &.menu {
    position: absolute;
    top: 0;
    left: -220%;
  }
  &.open {
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 100;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 0px;
  }

  &.open ul {
    background-color: white;
    width: 100%;
  }

  &.open ul li {
    padding: 10px;
  }

  &.open li a {
    color: darkblue;
    font-weight: 600;
    transition: all 0.2s;
    padding: 10px 30px;
  }

  &.open li:hover {
    background-color: darkblue;
  }

  &.open li a:hover {
    color: white;
  }
}

@media (min-width:1200px) {
  &.menu {
    position: relative;
    left: 0;
  }

  & ul {
    display: flex;
    gap: 30px;

  }
}
`

export const ButtonMenuElement = styled.button`
  @media(min-width:375px) {
    border: none;
    padding: 6px 0;
    width: 60px;
    box-shadow: 1px 1px 3px 0px rgba(0, 0, 0, 0.5);
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;

  &:hover {
    background-color: #004e9c;
    color: white;
  }
}

@media (min-width:1200px) {
    display: none;
}`

export const Voltar = styled.li`
  @media(min-width:375px) {

  & a {
    color: darkred;
    cursor: pointer;
  }

  &:hover {
    background-color: darkred;
  }

  & a:hover {
    color: white;
  }
}

@media (min-width:1200px) {
  & {
    display: none;
  }
}

`