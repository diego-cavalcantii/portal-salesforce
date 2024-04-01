import styled from "styled-components";

export const CardElement = styled.article`
  &.card {
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  border-radius: 10px 10px 10px 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  }
  &.card p {
  padding: 0 20px;
}

  &.card img {
  width: 100%;
  border-radius: 10px 10px 0 0;
}

&.small-card {
  box-shadow: none;
}

&.small-card p {
  padding: 0;
}

&.card-industry {
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 10px;
  align-items: center;
  padding: 48px 32px;
}

&.card-industry span {
  font-size: .875rem;
  padding-bottom: 20px;
  color: gray;
}

&.ball-card {
  display: flex;
  align-items: center;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 100%;
  margin: 10px;
  min-height: auto;
}

&.big-card {
  display: grid;
}

@media (min-width:375px) {
  &.card {
    width: 100%;
    gap: 20px;
  }

  &.card-industry img {
    width: 150px;
  }

  &.ball-card {
    width: 90px;
    padding: 24px;
  }

  &.big-card {
    grid-template-columns: 1fr;
  }

  &.big-card img {
    grid-area: 3/1/4/1;
  }

  &.big-card button {
    justify-self: stretch;
  }
}

@media(min-width:768px) {
  &.card {
    width: 31%;
    gap: 30px;
  }

  &.small-card {
    width: 45%;
    gap: 20px;
  }

  &.card-industry {
    width: 45%;
    gap: 10px;
  }

  &.ball-card {
    width: 85px;
  }

  &.big-card {
    grid-template-columns: 1fr 1fr;
    width: 100%;
    grid-template-rows: 100px 100px;
    align-items: start;
    gap: 50px;
    padding: 20px 0 0 20px;
  }

  &.big-card img {
    grid-area: 1/2/3/2;
    align-self: flex-end;
  }

  &.big-card h1 {
    font-size: 1.75rem;
    text-align: left;
    align-content: start;
  }

  &.big-card button {
    justify-self: start;
  }

}

@media (min-width:1200px) {
  &.card {
    width: 31%;
    gap: 30px;
  }

  &.small-card {
    width: 23%;
    gap: 20px;
  }

  &.card-industry {
    width: 22%;
    gap: 10px;
    margin: 10px 10px 40px 10px;

  }

  &.card-industry img {
    width: 130px;
  }

  &.ball-card {
    width: 85px;
  }

  &.big-card {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    width: 100%;
    padding-left: 70px;
  }

  &.big-card img {
    grid-area: 1/2/3/2;
  }

  &.big-card button {
    align-self: start;
    justify-self: start;
  }

  &.big-card h1 {
    align-self: end;
    text-align: left;
    max-width: 500px;
  }
}
`