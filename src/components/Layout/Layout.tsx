import { useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { lightTheme } from "../../styles/Theme";
import { darkTheme } from "../../styles/Theme";
import { Dark } from "../../styles/Theme";
import { Header } from "..";
import { Link } from "react-router-dom";
import { Icones } from "../Imgs";
import { GuideElement, SubMenuElement, ChangeFont, CaixaSubMenuElement, AcessibilityElement, MoonElement } from "../Submenu/Submenu.style";

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
              <img src={Icones.guide} alt="icone de placas" />
            </Link>
          </GuideElement>
          <GuideElement>
            <span>Formulário</span>
            <Link to={"/formulario"}>
              <img src={Icones.form} alt="icone fomulario" />
            </Link>
          </GuideElement>
          <AcessibilityElement>
            <MoonElement onClick={() => themeToggler()}><img src={Icones.moon} alt="icone de lua "></img></MoonElement>
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