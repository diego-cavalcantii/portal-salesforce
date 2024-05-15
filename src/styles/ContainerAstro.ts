import styled from "styled-components";

export const ContainerAstroElement = styled.div`
  display: flex;
  position: absolute;
  z-index: 20;
  max-width: 450px;
  margin-left: 50px;
  margin-top: 80px;

  > a {
    text-decoration: none;
  }


  @media(min-width:375px) {
      margin-top: 350px;
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
