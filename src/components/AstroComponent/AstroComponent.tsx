import { Astros } from '../Imgs';
import { ImageElement } from './AstroComponent.style';

export interface AstroData {
  id: number;
  text: string;
  link: string;
}

interface AstroComponentProps {
  data: AstroData[];
  filterId: number;
}

export const AstroComponent = ({ data, filterId }: AstroComponentProps) => {
  const filteredData = data.filter(item => item.id === filterId);

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


