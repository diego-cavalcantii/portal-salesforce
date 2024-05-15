import styled from "styled-components";

export const SessaoElement = styled.section`
  display: flex;
  flex-direction: column;
  gap: 70px;
  align-items: center;
`;

export const SessaoGuiaElement = styled(SessaoElement)`
  &.section-guia {
  width: 80%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
}

&.section-guia h1 {
  font-family: "Archivo Black", sans-serif;
  text-align: left;
  letter-spacing: 2px;
  max-width: 700px;
  text-transform: uppercase;
}

@media(min-width:375px) {
    flex-direction: column;
    padding: 50px 15px;
    gap: 30px;

  > h1 {
    line-height: 30px;
    font-size: 1.125rem;
  }
}

@media(min-width:1200px) {
    flex-direction: row;
    padding: 50px 15px;
    gap: 80px;

  > h1 {
    line-height: 50px;
    font-size: 2.5rem;
  }
}
`;

export const SessaoGuiaReverseElement = styled(SessaoGuiaElement)`
    flex-direction: row-reverse;
`;