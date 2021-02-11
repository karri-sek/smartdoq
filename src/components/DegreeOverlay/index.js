import React from 'react'
import PropTypes from 'prop-types'
import Iframe from "react-iframe";

function DegreeOverlay({ removeOverlay, data }) {
  return (
    <div className="overlay">
     <button
        type="button"
        className="overlay-close"
        onClick={e => removeOverlay()}
      >
        Close
      </button>
     <div id="iframe-wrapper" className="iframe-wrapper">
      <Iframe
        url={data.three_sixty_degree_url.url}
        width="100%"
        height="100%"
        id="myId"
        className="myClassname"
        display="initial"
        position="absolute"
        
      />
      </div>
    </div>
  )
}

DegreeOverlay.defaultProps = {
  modelUrl: '',
}

DegreeOverlay.propTypes = {
  removeOverlay: PropTypes.func,
  modelUrl: PropTypes.string
}
export default DegreeOverlay
