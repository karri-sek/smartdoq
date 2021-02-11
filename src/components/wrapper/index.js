import React from 'react'
import PropTypes from 'prop-types'

function Wrapper({ bgurl, children }) {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="d-flex flex-container body-bg-image" style={{backgroundImage: "url("+bgurl+")"}}>
          <div className="flex-item">{children}</div>
        </div>
      </div>
    </>
  )
}

Wrapper.defaultProps = {
  bgurl: '',
}

Wrapper.propTypes = {
  bgurl: PropTypes.string,
}
export default Wrapper
