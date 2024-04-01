import styled from "styled-components";

export const FooterElement = styled.footer`
width: 100%;
  background-color: #032d60;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  &  p {
    color: white;
  }
  @media(min-width:375px) {
    padding: 30px 50px;
    text-align: center;
}
@media(min-width:768px) {
    padding: 30px 0;
    text-align: center;
}
@media(min-width:1200px) {
    padding: 30px 0;
    text-align: center;
}
`