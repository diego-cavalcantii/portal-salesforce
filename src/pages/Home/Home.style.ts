import styled from "styled-components";

export const ContainerElement = styled.main`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  gap: 70px;

  @media(min-width:375px) {
    padding: 10px 30px 48px 30px;
  }
  @media(min-width:768px) {
    padding: 5px 80px 64px 80px;
  }
  @media(min-width:1200px) {
    padding: 5px 80px 50px 80px;
  }
`

export const GridSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  margin-top: 50px;

  & img {
  width: 700px;
  align-self: end;
  justify-self: end;
  border-radius: 16px;
}

& h1 {
  grid-area: 1/1/2/1;
  font-family: "ITC Avant", sans-serif;
  overflow-y: hidden;
}

& p {
  grid-area: 2/1/3/1;
}

& div {
  grid-area: 3/1/4/1;
  display: flex;
}

  @media(min-width:375px) {
  grid-template-columns: 1fr;
  gap: 30px;

  & img {
    grid-area: 4/1/5/1;
  }

  & h1 {
    font-size: 2.5rem;
    line-height: 48px;
  }

  & p {
    font-size: 1.125rem;
    line-height: 30px;
  }

  & div {
    flex-direction: column;
    gap: 15px;
  }


}
@media(min-width:768px) {
  gap: 45px;

  & img {
    width: 100%;
  }

  & h1 {
    font-size: 3rem;
    line-height: 56px;
    letter-spacing: -.48px;
  }

  & p {
    font-size: 1.25rem;
    line-height: 30px;
    letter-spacing: -.24px;
  }

  & div {
    flex-direction: row;
  }


}
@media(min-width:1200px) {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  & img {
    grid-area: 1/2/3/2;
  }

  & h1 {
    font-size: 3.5rem;
    line-height: 64px;
    letter-spacing: -.24px;
    align-self: flex-end;
    max-width: 500px;
  }

  & p {
    font-size: 1.125rem;
    line-height: 30px;
    max-width: 500px;
  }

  & div {
    flex-direction: row;
    gap: 30px;
  }
}
`

export const WrappenElement = styled.article`

width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;

  & p {
  max-width: 750px;
  text-align: center;
  font-size: 1.125rem;
  line-height: 28px;
}

& img {
  width: 100%;
}

@media(min-width:375px) {
  align-items: normal;
}

@media(min-width:768px) {
    align-items: center;
  }
  @media(min-width:1200px) {
  align-items: center;
}
`

export const BubleElement = styled.span`
  font-size: .875rem;
  background-color: #eaf5fe;
  border-radius: 30px;
  padding: 10px;
  color: #000;
  align-self: start;
  margin-left: 20px;
`

export const BgElement = styled.img`
  width: 100%;
`

export const GridWhatsCrm = styled.div`
  display: grid;
  grid-template-rows: auto;
  align-items: end;
  justify-items: start;

  & img {
  grid-area: 1/2/4/2;
  width: 100%;
}

& p {
  letter-spacing: -0.0216px;
  line-height: 28px;
  font-size: 1.125rem;
  max-width: 99%;
}

@media(min-width:375px) {
gap: 40px;


& img {
  grid-area: 4/1/5/1;
}

& .button {
  justify-self: stretch;
}
}

@media(min-width:768px) {
& .button {
  justify-self: start;
}
}

@media(min-width:1200px) {
& img {
  grid-area: 1/2/4/2;
}

& .button {
  justify-self: start;
}
}

`