import styled from "styled-components";

export const HeaderElement = styled.header`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(min-width:375px) {
    padding: 10px 18px;
    gap: 20px;
}

@media(min-width:768px) {
    padding: 10px 35px;
    gap: 20px;
}

@media(min-width:1200px) {
    padding: 26px 40px 0 40px;
    gap: 30px;
}
`

export const ContatoElement = styled.div`
  & p {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  font-weight: 400;
  text-transform: underline;
  font-size: .875rem;
}

& p+p {
  margin-top: 5px;
}

@media(min-width:375px) {
    display: none;
}

@media(min-width:768px) {
    display: none;
}

@media(min-width:1200px) {
    display: block;
}
`

export const LogoElement = styled.img`
  @media(min-width:375px) {
    width: 50px;
}
@media(min-width:1200px) {
  width: 70px;
}

`