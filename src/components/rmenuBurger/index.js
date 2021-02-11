import React from 'react'

const RMenuBurger = ({ bgColor, openOverlay }) => (
    <div>
    <button
    className="hamburger hamburger--boring top-right rmenu-burger"
    type="button"
    onClick={() => openOverlay()}
    style={{backgroundColor: bgColor}}
  >
    <span className="hamburger-box">
      <span className="hamburger-inner" />
    </span>
  </button>
  </div>
)

export default RMenuBurger
