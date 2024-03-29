import { useState } from "react";


export const BotaoTeste = () => {
  const [theme, setTheme] = useState("light")

  const themeToggler = () => {
    theme === "light" ? setTheme('dark') : setTheme('light')
  }

  return (
    <>
      <button onClick={() => themeToggler()}>Change Theme</button>
    </>
  )


}