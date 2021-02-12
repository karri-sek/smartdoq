import styled from "styled-components";

const PrismicLogo = styled.input`
  right: 5%;
  bottom: 2%;
  position: absolute;
  width: 10%;
  cursor: default;
  outline: none;
  @media screen and (max-width: 800px) and (orientation: portrait) {
    width: 15%;
    bottom: 5%;
  }
`;

export default PrismicLogo;
