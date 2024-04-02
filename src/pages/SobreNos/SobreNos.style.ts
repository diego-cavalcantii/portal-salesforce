import styled from "styled-components"

export const ContainerGap = styled.main`
  display: flex;
  flex-direction: column;
  gap: 80px;

  & p {
  font-size: 1.125rem;
}
`


export const ImgResposivoElement = styled.div`
  filter: drop-shadow(3px 8px 3px #222);
  object-fit: contain;

@media(min-width:375px) {
  width: 200px;
}
@media(min-width:1200px) {
  width: 300px;
}
`

export const SectionCardGuia = styled.section`
  display: flex;
  gap: 40px;
  margin: 10px auto;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  border-radius: 25px;

  & h1 {
  margin-bottom: 20px;
}

@media(min-width:375px) {
  flex-direction: column;
  padding-bottom: 30px;

& img {
  height: 170px;
  width: 400px;
  object-fit: contain;
}
}

@media(min-width:768px) {
  & img {
    align-self: center;
    height: 200px;
    width: 400px;
    object-fit: contain;
  }
}


@media(min-width:1200px) {
  flex-direction: row;
  padding-bottom: 0;
& img {
  height: 300px;
  width: 500px;
  object-fit: contain;
}
}
`

export const ExplaningCrm = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #e1e1e1;
  padding: 30px;
  max-width: 500px;
  gap: 20px;

  & p {
  text-align: justify;
}
`

export const SectionCardsInfo = styled.section`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 60px;
`

export const CardInfo = styled.article`
  display: flex;
  flex-direction: column-reverse;
  gap: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: #d9d9d9;
  text-align: center;

  &:last-child {
    width: auto;
  }

& p {
  flex-grow: 1;
}

@media(min-width:375px) {
  width: 100%;
}

@media(min-width:1200px) {
  width: 45%;
}
`

export const AstroElement = styled.div`
  @media(min-width:375px) {
  width: 45%;
}

@media(min-width:768px) {
  width: 25%;
}

@media(min-width:1200px) {
  width: 18%;
}
`

export const SeguirViagem = styled.div`
  display: flex;
  margin: 0 10px;

  & .button {
    cursor: pointer;
    text-transform: uppercase;
  }
  @media(min-width:375px){
    justify-content: center;
  }
  @media(min-width:1200px){
    justify-content: end;
  }


`