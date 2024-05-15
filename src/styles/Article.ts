import styled from "styled-components";

export const ArticleElement = styled.article`
  width: 100%;
  display: flex;
  justify-content: space-between;


@media (min-width:375px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }

@media(min-width:768px) {
    flex-direction: row;
    flex-wrap: wrap;
}

@media (min-width: 1200px) {
    flex-direction: row;
}
`;

export const ArticleElementBall = styled.article`
  display: flex;
  width: 70%;
  justify-content: center;    
  
  > div {
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

@media (min-width:375px) {
    width: 100%;
    flex-wrap: wrap;
}
`;
