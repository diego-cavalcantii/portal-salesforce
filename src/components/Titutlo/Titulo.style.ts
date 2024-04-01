import styled from "styled-components";

export const TituloElement = styled.h1`

@font-face {
  font-family: 'ITC Avant';
  src: url('../../../avant-garde-gothic-2-medium.otf') format('truetype');
}

&.titulo {
  text-align: center;
  max-width: 1000px;
  letter-spacing: -0.128px;
  line-height: 40px;
  font-family: "ITC Avant", sans-serif;
  font-weight: 600;
  overflow-y: hidden;
}

&.titulo-left {
  text-align: left;
}

@media (min-width:375px) {
  &.titulo {
    font-size: 1.875rem;
  }
}

@media(min-width:768px) {
  &.titulo {
    font-size: 2.5rem;
  }
}

@media (min-width:1200px) {
  &.titulo {
    font-size: 2.5rem;
  }
}

`