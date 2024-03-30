import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}

html {
  font-family: "Salesforce Sans", sans-serif;
} 


img {
  max-width: 100%;
}
`;