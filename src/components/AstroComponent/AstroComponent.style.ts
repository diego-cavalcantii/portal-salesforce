import styled from "styled-components";

export const ContainerAstroElement = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 20;
  max-width: 450px;
  margin-left: 50px;
  margin-top: 80px;
  background-color: white;
  border: 3px solid darkblue;
  border-radius: 10px;
  padding: 8px;

  > a {
    text-decoration: none;
  }


  @media(min-width:375px) {
    margin-top: 350px;
    margin-right: 15px;
  }
  @media(min-width:1200px) {
      margin-top: 80px;
  }
`;

export const ContainerAstroElementRight = styled(ContainerAstroElement)`
    right: 0;
`;

export const ContainerAstroElementLeft = styled(ContainerAstroElement)`
    left: 0;
`;


export const CloseAstroElement = styled.button`
  width: min-content;
  border: none;
  background-color: #FAFAFA;
  padding: 0px 5px;
  color: crimson;
  font-weight: 800;
  font-size: 1.2rem;
  cursor: pointer;

  `

export const ImageElement = styled.div`
display: flex;
align-items: center;
gap: 20px;
& p {
  text-decoration: none;
}
&>div {
  width: 50%;
  display: flex;
  align-items: center;
}

& div img {
  filter: drop-shadow(3px 3px 3px #222);
object-fit: contain;
padding: 5px;
}


`