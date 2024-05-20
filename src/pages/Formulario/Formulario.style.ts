import styled from "styled-components";

export const PageForm = styled.main`
  display: grid;
  gap: 50px;



@media(min-width:375px) {
        grid-template-columns: auto;
        padding: 30px 30px;

    & form {
        grid-area: 5/1/6/1;
    }

  }

  @media(min-width:768px) {
        grid-template-columns: 1fr 1fr;
        padding: 30px 80px;

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
    :last-child h1 {
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

export const CardFormsElement = styled.div`
  display: flex;
  background-color: #e1e1e1;
  gap: 20px;
  border-radius: 25px;
  width: 95%;
  padding: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

> p {
  align-self: center;
  text-align: left;
}

@media(min-width:375px) {
  &.card-form {
    flex-direction: column;
  }
}

@media(min-width:1200px) {
    flex-direction: row;

  > img {
    max-width: 220px;
    min-width: 220px;
    border-radius: 25px;
  }
}
`;

export const CardHistory = styled(CardFormsElement)`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    border: 1px solid;

    > button {
        border-radius: 10px
    }
@media(min-width: 375px) {
    width: 95%;
  > img {
        max-width: none;
        min-width: auto;
    }

 > a > button {
        width: 100%;
    }
}

@media(min-width: 768px) {
        width: 100%;

  > a {
        display: flex;
        align-items: self-end;
        flex-grow: 1;
        text-align: center;
    }

}


@media(min-width: 1200px) {
    width: 90%;
    flex-direction: column;
    
 > img {
        max-width: none;
        min-width: auto;
    }
  > a {
        display: flex;
        align-items: self - end;
        flex-grow: 1;
        width: 70%;
        margin: 0 auto;
    }
}
`;

