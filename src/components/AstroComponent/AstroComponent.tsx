import React, { useEffect, useState } from 'react';
import { Astros } from '../Imgs';
import { ImageElement } from './AstroComponent.style';

interface AstroComponentProps {
  filterId: number;
}
export interface AstroData {
  id: number;
  text: string;
  link: string;
}

export const AstroComponent = ({ filterId }: AstroComponentProps) => {
  const [astro, setAstro] = useState<AstroData[]>([]);
  const filteredData = astro.filter(item => item.id === filterId);
  const [isLoading, setIsLoading] = useState(false);

  const getAstro = async () => {
    const url = "http://localhost:9090/astro";
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();

      setAstro(data);

    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (astro.length) {
      return;
    }

    return () => {
      getAstro();
    };
  }, []);

  return (
    <>
      {filteredData.map(({ id, link, text }) => (
        <a href={`${link}`} key={id} target="blank">
          <ImageElement>
            <p>{text}</p>
            <div>
              <img src={Astros.astroGuia} alt="imagem do Astro Guia"></img>
            </div>
          </ImageElement>
        </a>
      ))}
    </>
  )
}


