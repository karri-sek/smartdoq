import React from 'react';
import PropTypes from 'prop-types';
import * as Icon from 'react-feather';

function VideoOverlay({ data, removeOverlay }) {
  console.log(data);
    let noOfDocuments = 3;
    const videoHtml = data.video_url.html;
    let [imageIndex, setImageIndex] = React.useState(1);
    let [videoURL, setVideoURL] = React.useState(videoHtml);

    const handleRightClick = async (isEnd) => {
        imageIndex = isEnd ? 1 : imageIndex + 1;
        if(imageIndex == 1){
          setVideoURL(data.video_url.html);
        }
        if(imageIndex == 2){
          setVideoURL(data.video_url_1.html);
        }
        if(imageIndex == 3){
          setVideoURL(data.video_url_2.html);
        }
        await setImageIndex(imageIndex);
    };
    const handleLeftClick = async (isEnd) => {
        imageIndex = isEnd ? noOfDocuments : imageIndex - 1;
        if(imageIndex == 1){
          setVideoURL(data.video_url.html);
        }
        if(imageIndex == 2){
          setVideoURL(data.video_url_1.html);
        }
        if(imageIndex == 3){
          setVideoURL(data.video_url_2.html);
        }
        await setImageIndex(imageIndex);
    };
    return (
        <div className="overlay">
            <button type="button" className="overlay-close" onClick={(e) => removeOverlay()}>
                Close
            </button>
            <div className="pdf-container">
                <div className="pdf-flex-item">
                    <div dangerouslySetInnerHTML={{ __html: videoURL }} />
                </div>

                <div className="pdf-flex-bottom-item">
                    <Icon.ArrowLeftCircle
                        onClick={() => {
                            if (imageIndex === 1) {
                                handleLeftClick(true);
                            } else {
                                handleLeftClick(false);
                            }
                        }}
                    />
                    <p>{imageIndex}</p>
                    <Icon.ArrowRightCircle
                        onClick={() => {
                            if (imageIndex === noOfDocuments) {
                                handleRightClick(true);
                            } else {
                                handleRightClick(false);
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

VideoOverlay.defaultProps = {
    embedVideoHtml: '',
};

VideoOverlay.propTypes = {
    removeOverlay: PropTypes.func,
    embedVideoHtml: PropTypes.string,
};
export default VideoOverlay;
