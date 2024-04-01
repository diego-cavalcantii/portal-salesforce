import styled from "styled-components";

export const CardFormsElement = styled.div`
&.card-form {
  display: flex;
  background-color: #e1e1e1;
  gap: 20px;
  border-radius: 25px;
  width: 95%;
  padding: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

&.card-form p {
  align-self: center;
  text-align: left;
}

&.card-history {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  border: 1px solid;
}

.card-history button {
  border-radius: 10px;
}

@media(min-width:375px) {
  &.card-form {
    flex-direction: column;
  }

  &.card-history img {
    max-width: none;
    min-width: auto;
  }

  &.card-history {
    width: 95%;
  }

  &.card-history>div>button {
    width: 100%;
  }
}

@media(min-width:768px) {
  &.card-history {
    width: 100%;
  }

  &.card-history div {
    display: flex;
    align-items: self-end;
    flex-grow: 1;
    text-align: center;
  }

}


@media(min-width:1200px) {
  &.card-form {
    flex-direction: row;
  }

  &.card-form img {
    max-width: 220px;
    min-width: 220px;
    border-radius: 25px;
  }

  &.card-history>img {
    max-width: none;
    min-width: auto;
  }

  &.card-history {
    width: 90%;
    flex-direction: column;
  }

  &.card-history div {
    display: flex;
    align-items: self-end;
    flex-grow: 1;
    width: 70%;
    margin: 0 auto;
  }
}
`