import styled from "styled-components"

export const FormElement = styled.section`
background-color: #e4e4e4;
  padding: 50px 40px 40px 40px;
  display: flex;
  flex-direction: column;

  @media(min-width:375px) {
    padding: 60px 20px 60px 20px;
    border-radius: 25px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    gap: 40px;
  }
  @media(min-width:768px) {
    border-radius: 0;
    box-shadow: none;
  }
  @media(min-width:1200px) {
    padding: 50px 40px 40px 40px;
    gap: 50px;
  }
`

export const BoxLogin = styled.div`
background-color: white;
  border: 1px solid black;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  &>img{
    width: 20px;
  }

@media(min-width:375px) {
  padding: 15px 0;
  margin-bottom: 15px;
}
@media(min-width:1200px) {
  padding: 20px 0;
  margin-bottom: 20px;
}
`

export const InputsElement = styled.div`
display: flex;
  justify-content: space-between;
  gap: 10px;
`

export const CheckboxElement = styled.div`
display: flex;
  gap: 10px;

  &>input{
    width: auto;
  }
`

export const StyledInput = styled.input`
padding: 10px 10px;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 20px;
`