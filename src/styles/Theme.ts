import { createGlobalStyle } from "styled-components"

export const Dark = createGlobalStyle`
body {
  background-color: ${props => props.theme.body};
}
p {
  color: ${props => props.theme.p};
}
h1 {
  color: ${props => props.theme.h1};
}
h2 {
  color: ${props => props.theme.h2};
}
a {
  color: ${props => props.theme.a};
}

`

export const lightTheme = {
  body: '#fff',
  p: '#000',
  h1: '#032d60',
  h2: '#032d60',
  a: 'rgb(3 45 96)',
}

export const darkTheme = {
  body: '#000',
  p: '#fff',
  h1: '#d9d9d9',
  h2: '#d9d9d9',
  a: '#00ffff',

}
