import styled from "styled-components";

export const SubTituloElement = styled.h2`
&.subtitulo{
  font-family: "ITC Avant", sans-serif;
  letter-spacing: -0.08px;
  padding: 0 20px;
  font-weight: 400;
}
&.small-subtitulo {
  padding: 0;
}
&.sublime-titulo {
  text-decoration: underline;
}
@media(min-width:375px) {
  &.subtitulo {
    font-size: 1.25rem;
    font-weight: 800;
  }
}

@media(min-width:768px) {
  &.subtitulo {
    font-size: 1.125rem;
    line-height: 24px;
    overflow-y: hidden;
    font-weight: 800;
  }
}

@media(min-width:1200px) {
  &.subtitulo {
    font-size: 1.25rem;
    line-height: 28px;
    font-weight: 700;
  }
}


`