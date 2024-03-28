import { Header, CardForms } from "../../components";
import { useState } from 'react';
import { Photos } from "../../components/Photos";
import "./SobreNos.css";
import { Footer } from "../../components/Footer/Footer";

interface Slide {
  id: number;
}

export default function SobreNosTeste() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides: Slide[] = [
    { id: 1 },
    { id: 2 },
    { id: 3 }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const anterior = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex - 1));
  };

  return (
    <>
      <Header />
      <div className="slides">
        {currentIndex === 0 && (
          <div className="slide">
            <div className="img-responsivo">
              <img src={Photos.astroGuia} alt="" />
            </div>
          </div>
        )}
        {currentIndex === 1 && (
          <div className="slide">
            <CardForms>
              <p>O CRM, ou Customer Relationship Management, é um software estratégico utilizado por empresas para gerenciar e otimizar as interações com clientes. Essa ferramenta atua como um ponto centralizado para armazenar dados valiosos, como histórico de compras, preferências e feedbacks dos clientes.

                Ele é como um assistente digital que anota o que os clientes gostam, compram e resolve problemas rapidinho, tornando a experiência de compra mais personalizada. Ele é o intermédio perfeito para aproximar a empresa ao cliente.
              </p>
              <img src={Photos.crm} alt="" />
            </CardForms>
          </div>
        )}
        {currentIndex === 2 && (
          <div className="slide">
            <h1>Tchau</h1>
          </div>
        )}
        <div className="nextBtn">
          <button onClick={anterior}>Anterior</button>
          <button onClick={nextSlide}>Próximo</button>
        </div>
      </div>
      <Footer />
    </>
  )
}