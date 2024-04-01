import styled from "styled-components"

export const IconesElemet = styled.div`
  display: flex;
  gap: 30px;

  & img {
  width: 18px;
}

  @media(min-width:375px) {
    gap: 20px;
    flex-grow: 1;
    justify-content: end;
}

@media(min-width:1200px) {
    gap: 20px;
    flex-grow: 0;
    justify-content: center;
}
`

export const UserElement = styled.div`
  display: flex;
  gap: 6px;

& p {
  font-weight: 700;
}

@media(min-width:375px) {
  & p {
    display: none;
  }
}

@media(min-width:1200px) {
  & p {
    display: block;
  }
}
`

export const GlobeElement = styled.img`

@media(min-width:375px) {
  display: none;
}

@media(min-width:1200px) {
  display: block;
}
`