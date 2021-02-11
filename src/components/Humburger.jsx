import styled from "styled-components";

const Humburger = styled.input`
  left: 19px;
  position: absolute;
  width: 40px;
  height: 40px;
  top: 24px;
  z-index: 1;
  @media (max-width: 767px) {
    left: 1%;
    position: absolute;
    width: 30px;
    height: 30px;
    top: 1%;
    z-index: 1;
  }

  @media (orientation: portrait) {
    position: absolute;
    top: 1%;
    left: 1%;
    height: 30px;
    width: 30px;
    opacity: 1;
  }
`;

export default Humburger;
