import { useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { lightTheme } from "../../styles/Theme";
import { darkTheme } from "../../styles/Theme";
import { Dark } from "../../styles/Theme";
import { Header } from "..";
import { Link } from "react-router-dom";
import { Photos } from "../Photos";
import { ButtonSubMenuElement, GuideElement, SubMenuElement, ChangeFont, CaixaSubMenuElement, AcessibilityElement } from "../Submenu/Submenu.style";

interface LayoutProps {
  children?: React.ReactNode
}

const FontAcessibility = createGlobalStyle<{ fontSize: number }>`
html {
    font-size: ${({ fontSize }) => `${fontSize}px`};
  }
`;

export const Layout = ({ children }: LayoutProps) => {
  const [theme, setTheme] = useState("light")

  const themeToggler = () => {
    theme === "light" ? setTheme('dark') : setTheme('light')
  }

  const [fontSize, setFontSize] = useState<number>(16); // Tamanho da fonte inicial (em pixels)

  const increaseFontSize = () => {
    setFontSize(prevSize => prevSize + 1); // Aumenta o tamanho da fonte em 2 pixels
  };

  const decreaseFontSize = () => {
    setFontSize(prevSize => prevSize - 1); // Diminui o tamanho da fonte em 2 pixels
  };




  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <FontAcessibility fontSize={fontSize} />
      <Header />
      <Dark />
      <SubMenuElement>
        <CaixaSubMenuElement>
          <GuideElement>
            <span>Primeiro <br /> contato?</span>
            <Link to={"/sobre-nos"}>
              <img src={Photos.guide} alt="icone de placas" />
            </Link>
          </GuideElement>
          <GuideElement>
            <span>Formulário</span>
            <Link to={"/formulario"}>
              <img src={Photos.form} alt="icone fomulario" />
            </Link>
          </GuideElement>
          <AcessibilityElement>
            <ButtonSubMenuElement onClick={() => themeToggler()}><img src={Photos.moon} alt="icone de lua "></img></ButtonSubMenuElement>
            <ChangeFont>
              <button onClick={() => increaseFontSize()}>A+</button>
              <button onClick={() => decreaseFontSize()}>A-</button>
            </ChangeFont>
          </AcessibilityElement>
        </CaixaSubMenuElement>
      </SubMenuElement>
      {children}
    </ThemeProvider>
  )


}