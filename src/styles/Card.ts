import styled from "styled-components";

export const CardElement = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  border-radius: 10px 10px 10px 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  p {
    padding: 0 20px;
  }

  img {
    width: 100%;
    border-radius: 10px 10px 0 0;
  }

  @media (min-width:375px) {
    width: 100%;
    gap: 20px;
}

@media(min-width:768px) {
    width: 31%;
    gap: 30px;
}

@media (min-width:1200px) {
    width: 31%;
    gap: 30px;
}
`;

export const SmallCard = styled(CardElement)`
  box-shadow: none;

  p {
    padding: 0;
  }

  @media(min-width:768px) {
    width: 45%;
    gap: 20px;
  }

  @media (min-width:1200px) {
    width: 23%;
    gap: 20px;
  }

`;

export const CardIndustry = styled(CardElement)`
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 10px;
  align-items: center;
  padding: 48px 32px;

  span {
    font-size: .875rem;
    padding-bottom: 20px;
    color: gray;
  }

  @media(min-width:375px) { 
    > img {
      width: 150px;
    }
  }
  @media(min-width:768px) {
    width: 45%;
    gap: 10px;
}

@media (min-width:1200px) {
    width: 22%;
    gap: 10px;
    margin: 10px 10px 40px 10px;
    >  img {
    width: 130px;
  }
}

`;

export const BallCard = styled(CardElement)`
  display: flex;
  align-items: center;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 100%;
  margin: 10px;
  min-height: auto;

  @media (min-width:375px) {
    width: 90px;
    padding: 24px;
  }
  

@media(min-width:768px) {
    width: 85px;
}

@media (min-width:1200px) {
    width: 85px;
}
`;

export const BigCard = styled(CardElement)`
  display: grid;

  @media (min-width:375px) {
    grid-template-columns: 1fr;
    > img {
      grid-area: 3/1/4/1;
    }

    > button {
      justify-self: stretch;
    }
  }

@media(min-width:768px) {
    grid-template-columns: 1fr 1fr;
    width: 100%;
    grid-template-rows: 100px 100px;
    align-items: start;
    gap: 50px;
    padding: 20px 0 0 20px;

  > img {
    grid-area: 1/2/3/2;
    align-self: flex-end;
  }

  > h1 {
    font-size: 1.75rem;
    text-align: left;
    align-content: start;
  }

  > button {
    justify-self: start;
  }

}

@media (min-width:1200px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    width: 100%;
    padding-left: 70px;

  > img {
    grid-area: 1/2/3/2;
  }

  > button {
    align-self: start;
    justify-self: start;
  }

  > h1 {
    align-self: end;
    text-align: left;
    max-width: 500px;
  }
}
`;
