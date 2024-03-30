import styled from "styled-components";

export const SubMenuElement = styled.div`
display: flex;
  width: 100%;
  justify-content: center;
`

export const CaixaSubMenuElement = styled.div`
display: flex;
gap: 50px;
  padding: 10px;
  margin: 10px;
  border-radius: 0 0 10px 10px;
  background-color: #fff;
  -webkit-box-shadow: 0px 3px 6px -3px #000000;
  box-shadow: 0px 3px 6px -3px #000000;
`

export const ButtonSubMenuElement = styled.button`
  border: none;
  background-color: #fff;
  cursor: pointer;
`

export const GuideElement = styled.div`
display: flex;
gap: 8px;
align-items: center;

& > a {
  text-transform: none;
}
`

export const ChangeFont = styled.button`
  border: none;
  background-color: white;
  font-weight: 900;
  cursor: pointer;
  font-size: 1.25rem;
`
