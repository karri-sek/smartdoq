import React from 'react';
function PdfViewer({ fileURL, closePreview }) {
        return (
            <>
                <button type="button" className="overlay-close pdf-viewer-close" onClick={e => closePreview()}>
                    Close
                </button>
    
                <div className="scroll-wrapper">
                    <iframe title="image" src={fileURL} frameBorder="0" allowFullScreen />
                </div>
            </>
        );
}

PdfViewer.defaultProps = {};

PdfViewer.propTypes = {};

export default PdfViewer;
