import styled from 'styled-components'

const RightMenuBurger = styled.input`
  right: 0%;
  top: 0%;
  position: absolute;
  width: 3%;
  outline: none;
  background-color: white;
  border-radius: 40px;

  @media (orientation: portrait) {
    top: 0%;
    width: 12%;
    outline: none;
   
    border-radius: 40px;
    right: 1%;
    outline: none;
  }

  @media (orientation: landscape) {
    top: 0%;
    outline: none;
   
    right: 1%;
  }

  @media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {
    width: 5%;
  }
`

export default RightMenuBurger
