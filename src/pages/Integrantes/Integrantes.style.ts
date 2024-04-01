import styled from "styled-components";

export const IntegrantesElement = styled.section`
      display: flex;
    justify-content: space-evenly;
    margin-bottom: 30px;

    @media(min-width:375px){
        flex-wrap: wrap;
        width: 100%;
        gap: 30px;
 }
 @media(min-width:1200px){
        width: 80%;
        margin: 0 auto; 
 }
`

export const CaixaIntegrantesElement = styled.article`

 & div {
    background-color: #cfcfcf;
    border-radius: 15px;
    margin-top: 5%;
 }

 & div p {
    padding: 3%;
    text-align: center;
 }

 @media(min-width:375px){
    width: 40%;
 }

 @media(min-width:768px){
    width: 33%;
 }

 @media(min-width:1200px){
    width: 20%;   
 }
`