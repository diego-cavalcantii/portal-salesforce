import styled from "styled-components";

export const PageForm = styled.main`
  display: grid;
  gap: 50px;

  & h1:last-child {
    text-align: left;
}

@media(min-width:375px) {
        grid-template-columns: auto;
        padding: 30px 30px;

    & form {
        grid-area: 5/1/6/1;
    }

    & h1 {
        font-size: 1.25rem;
        line-height: 25px;
    }
  }

  @media(min-width:768px) {
        grid-template-columns: 1fr 1fr;
        padding: 30px 80px;

    & .row-article {
        grid-column: span 2;
    }

    & form {
        grid-area: 2/2/7/2;
        align-self: self-start;
    }
  }

  @media(min-width:1200px) {
        grid-template-columns: 1.2fr 1fr;
        padding: 30px 80px;

    & form {
        grid-area: 1/2/5/2;
        align-self: self-start;
        margin-left: 125px;
    }

    & .row-article {
        grid-area: 1/1/2/1;
    }

    & h1 {
        font-size: 1.5625rem;
        line-height: 36px;
    }
  }
`

export const Historys = styled.article`
  display: grid;
  gap: 30px;
  

@media(min-width:375px) {
  grid-template-columns: auto;

& h1 {
    grid-area: 1/1/2/1;
}
}

@media(min-width:768px) {
    grid-template-columns: 1fr 1fr;

& h1 {
    grid-area: 1/1/2/3;
}
}

@media(min-width:1200px) {
    grid-template-columns: 1fr 1fr;

& h1 {
    grid-area: 1/1/2/3;
}
}
`