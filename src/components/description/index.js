import React from 'react'
function Description({ desc }) {
  return (
    <div className="flex-item description">
      {desc}
    </div>
  )
}

Description.defaultProps = {}

Description.propTypes = {}

export default Description
