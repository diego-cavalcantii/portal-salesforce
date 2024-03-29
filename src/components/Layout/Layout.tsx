import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../styles/Theme";
import { darkTheme } from "../../styles/Theme";
import { Dark } from "../../styles/Theme";
import { Header } from "..";
import { Link } from "react-router-dom";
import { Photos } from "../Photos";

interface LayoutProps {
  children?: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const [theme, setTheme] = useState("light")

  const themeToggler = () => {
    theme === "light" ? setTheme('dark') : setTheme('light')
  }


  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Dark />
      <Header />
      <div className="sub-menu">
        <div className="caixa-sub-menu">
          <Link to={"/formulario"}>
            <img src={Photos.form} alt="icone fomulario" />
          </Link>
          <button onClick={() => themeToggler()}>Change Theme</button>
        </div>
      </div>
      {children}
    </ThemeProvider>
  )


}