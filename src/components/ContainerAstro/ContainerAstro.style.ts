import styled from "styled-components";

export const ContainerAstroElement = styled.div`

&.primary {
  display: flex;
  position: absolute;
  z-index: 20;
  max-width: 450px;
  margin-left: 50px;
  margin-top: 80px;
}

  &.primary a {
    text-decoration: none;
  }
  &.right {
    right: 0;
  }
  &.left {
    left: 0;
  }

  @media(min-width:375px) {
    &.primary {
      margin-top: 350px;
    }
  }
  @media(min-width:1200px) {
    &.primary {
      margin-top: 80px;
    }
  }
`