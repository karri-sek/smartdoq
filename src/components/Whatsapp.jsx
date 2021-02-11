import styled from "styled-components";

const Whatsapp = styled.input`
  right: 24%;
  position: absolute;
  top: 7%;
  height: 6%;
  font-size: 2.4vw;

  @media (orientation: portrait) {
    top: 10%;
    height: 6%;
    right: 30%;
    color: black;
    position: absolute;
    font-size: 2.4vw;
    font-family: Arial;
  }
`;

export default Whatsapp;
