import styled from "styled-components";

export const ArticleElement = styled.article`
&.article {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

&.ball-article {
  width: 70%;
  justify-content: center;
}
&.ball-article > div {
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

@media (min-width:375px) {
  &.article {
    flex-direction: column;
    flex-wrap: nowrap;
  }

  &.ball-article {
    width: 100%;
    flex-wrap: wrap;
    flex-direction: row;
  }

  &.row-article>div {
    width: 150px;
    margin-bottom: 10px;
  }
}

@media(min-width:768px) {
  &.article {
    flex-direction: row;
    flex-wrap: wrap;
  }

  &.row-article {
    flex-wrap: nowrap;
    gap: 30px;
    align-items: center;
    justify-content: start;
  }

  &.row-article>div {
    max-width: 300px;
    min-width: 150px;
  }

}

@media (min-width: 1200px) {
  &.article {
    flex-direction: row;
  }

  &.row-article {
    flex-wrap: nowrap;
    gap: 20px;
  }

  &.row-article>div {
    width: 350px;
  }
}

`