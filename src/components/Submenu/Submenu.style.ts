import styled from "styled-components";

export const SubMenuElement = styled.div`
display: flex;
  width: 100%;
  justify-content: center;
`

export const CaixaSubMenuElement = styled.div`

  display: flex;
    padding: 10px;
    margin: 10px 10px 30px 10px;
    gap: 50px;
    border-radius: 0 0 10px 10px;
    background-color: #fff;
    -webkit-box-shadow: 0px 3px 6px -3px #000000;
    box-shadow: 0px 3px 6px -3px #000000;
`

export const ButtonSubMenuElement = styled.button`
  border: none;
  background-color: #fff;
  cursor: pointer;


  @media(min-width:375px){
    display: block;
  }
  
  @media(min-width:1200px){
    display: none;
  }
`

export const GuideElement = styled.div`
display: flex;
gap: 8px;
align-items: center;

& > a {
  text-transform: none;
}

@media(min-width:375px){
  gap: 2px;
  &>span {
    display: none;
  }
}
@media(min-width:768px){
  gap: 8px;
  &>span {
    display: block;
  }
}
@media(min-width:1200px){
  gap: 8px;
  &>span {
    display: block;
  }
}
`

export const ChangeFont = styled.div`
  display: flex;
  gap: 3px;

  &>button {
    border: none;
    background-color: white;
    font-weight: 900;
    cursor: pointer;
    font-size: 1.25rem;
  }
`

export const AcessibilityElement = styled.div`
  display: flex;
  gap: 15px;
`
