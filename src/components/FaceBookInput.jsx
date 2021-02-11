import styled from "styled-components";

const FaceBookInput = styled.input`
  left: 24%;
  position: absolute;
  top: 7%;
  height: 6%;
  font-size: 2.4vw;

  @media (orientation: portrait) {
    top: 10%;
    left: 31%;
    height: 6%;
    position: absolute;
    font-family: Arial;
  }
`;

export default FaceBookInput;
