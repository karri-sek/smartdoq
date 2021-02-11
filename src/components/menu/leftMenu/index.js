import styled from "styled-components";

const LeftMenu = styled.input`
  left: 1%;
  top: 1%;
  position: absolute;
  outline: none;
  width: 3%;

  @media screen and (max-width: 800px) and (orientation: portrait) {
    width: 10%;
  }
  @media screen and (max-width: 1024px) and (orientation: landscape) {
    width: 8%;
  }
`;

export default LeftMenu;
