import styled from "styled-components";


export const ButtonElement = styled.button`
  border-radius: 4px;
  font-weight: 700;
  border: none;
`;


export const BlueButton = styled(ButtonElement)`
background-color: rgb(1 118 211);
color: white;
cursor: pointer;

@media(min-width:375px) {
    padding: 18px 0;
}
@media(min-width:768px) {
  padding: 16px 42px;
}

@media(min-width:1200px) {
  padding: 16px 42px;
}
`

export const GreenButton = styled(ButtonElement)`
  background-color: #2E844B;
  color: white;

  @media(min-width:375px) {
    padding: 8px 16px;
}
@media(min-width:1200px) {
  padding: 5px 26px;
}
`;

export const WhiteBlueButton = styled(ButtonElement)`
  border: 2px solid rgb(1 118 211);
  background-color: white;
  color: rgb(1 118 211);

  @media(min-width:375px) {
    padding: 18px 0;
}
@media(min-width:768px) {
  padding: 16px 42px;
}

@media(min-width:1200px) {
  padding: 16px 42px;
}
`;

export const ButtonAstro = styled.button`
  border-radius: 4px;
  font-weight: 700;
  border: none;
  background-color: rgb(1 118 211);
  color: white;
  padding: 16px 42px;
  margin-left: 80px;
  cursor: pointer;
`