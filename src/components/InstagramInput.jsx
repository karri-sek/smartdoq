import styled from "styled-components";

const InstagramInput = styled.input`
  left: 28%;
  position: absolute;
  top: 7%;
  height: 6%;
  font-size: 2.4vw;

  @media (orientation: portrait) {
    top: 10%;
    left: 7%;
    height: 6%;
    color: black;
    position: absolute;
    font-size: 2.4vw;
    font-family: Arial;
  }
`;

export default InstagramInput;
