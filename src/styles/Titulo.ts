import styled from "styled-components";

export const TituloElement = styled.h1`

@font-face {
  font-family: 'ITC Avant';
  src: url('../../../avant-garde-gothic-2-medium.otf') format('truetype');
}
  text-align: center;
  max-width: 1000px;
  letter-spacing: -0.128px;
  line-height: 40px;
  font-family: "ITC Avant", sans-serif;
  font-weight: 600;
  overflow-y: hidden;

@media (min-width:375px) {
    font-size: 1.875rem;
}

@media(min-width:768px) {
    font-size: 2.5rem;
}

@media (min-width:1200px) {
    font-size: 2.5rem;
}

`

export const TituloLeft = styled(TituloElement)`
  text-align: left;
`;


export const TituloForms = styled(TituloElement)`

@media(min-width:375px) {
  font-size: 1.25rem;
  line-height: 25px;
}
@media(min-width:768px) {
    grid-column: span 2;
    font-size: 1.8rem;
    line-height: 38px;
}

@media(min-width:1200px) {
    grid-area: 1/1/2/1;
    font-size: 2rem;
    line-height: 36px;
    text-align: left;
}

`;