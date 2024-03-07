import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Homes";
import Integrantes from "./pages/Integrantes/Integrantes";
import Formulario from "./pages/Formulario/Formulario";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/integrantes" element={<Integrantes/>}/>
        <Route path="/formulario" element={<Formulario/>}/>
      </Routes>
    </BrowserRouter>
  )
}
