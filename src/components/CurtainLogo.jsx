import styled from "styled-components";

const CurtainLogo = styled.input`
  left: 29%;
  position: absolute;
  cursor: default;
  outline:none;
  top: 15%;
  height:30%;

  @media (orientation: portrait) {
    top: 6%;
    left: 8%;
    position: absolute;

  }
  

  @media screen and (min-width: 320px) and (max-width: 812px) and (orientation: landscape) {
    top: 8%;
    left: 25%;
    position: absolute;
    height:35%;
  }
`;

export default CurtainLogo;
