import React from 'react'

const MenuBurger = ({ bgColor, openOverlay }) => (
    <div>
    <button
    className="hamburger hamburger--boring"
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

export default MenuBurger
