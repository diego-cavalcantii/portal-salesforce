import styled from "styled-components";

export const SubTituloElement = styled.h2`
  font-family: "ITC Avant", sans-serif;
  letter-spacing: -0.08px;
  padding: 0 20px;
  font-weight: 400;

@media(min-width:375px) {
    font-size: 1.25rem;
    font-weight: 800;
}

@media(min-width:768px) {
    font-size: 1.125rem;
    line-height: 24px;
    overflow-y: hidden;
    font-weight: 800;
}

@media(min-width:1200px) {
    font-size: 1.25rem;
    line-height: 28px;
    font-weight: 700;
}
`;

export const SmallSubTituloElement = styled(SubTituloElement)`
  padding: 0;
  `;

export const SublimeTituloElement = styled(SubTituloElement)`
  text-decoration: underline;
  
`;
