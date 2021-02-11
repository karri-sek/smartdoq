import React from 'react'
import PropTypes from 'prop-types'
import {Modal, Carousel} from 'react-bootstrap';

function VideoOverlay({ data, removeOverlay }) {
  console.log(" data ", data);
  const videoHtml = data.video_url.html;
  return (
    <div className="overlay">
      <button
        type="button"
        className="overlay-close"
        onClick={e => removeOverlay()}
      >
        Close
      </button>

      <Carousel className="videoCarousel">
  <Carousel.Item>
    <div  dangerouslySetInnerHTML={{ __html: videoHtml }} />
  </Carousel.Item>
  <Carousel.Item>
  <div dangerouslySetInnerHTML={{ __html: data.video_url_1.html }} />
  </Carousel.Item>
  <Carousel.Item>
  <div dangerouslySetInnerHTML={{ __html:  data.video_url_2.html }} />

  </Carousel.Item>
</Carousel>

      {/* <div className= "iframe-video-div" dangerouslySetInnerHTML={{ __html: videoHtml }} />
        */}
      </div>
  )
}

VideoOverlay.defaultProps = {
  embedVideoHtml: '',
}

VideoOverlay.propTypes = {
  removeOverlay: PropTypes.func,
  embedVideoHtml: PropTypes.string
}
export default VideoOverlay
