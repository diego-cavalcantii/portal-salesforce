import styled from "styled-components";

export const ButtonElement = styled.button`
  &.button {
    border-radius: 4px;
  font-weight: 700;
  border: none;
  }

  &.green {
  background-color: #2E844A;
  color: white;
}

&.blue {
  background-color: rgb(1 118 211);
  color: white;
}
&.white-blue {
  border: 2px solid rgb(1 118 211);
  background-color: white;
  color: rgb(1 118 211);
}

@media(min-width:375px) {
  &.green {
    padding: 8px 16px;
  }

  &.blue,
  &.white-blue {
    padding: 18px 0;
  }
}
@media(min-width:768px) {

&.blue,
&.white-blue {
  padding: 16px 42px;
}
}

@media(min-width:1200px) {
&.green {
  padding: 5px 26px;
}

&.blue,
&.white-blue {
  padding: 16px 42px;
}
}
`