import React from 'react';
function EmptyOverlayModel({ menuData, removeOverlay }) {
  return (
    <div className="overlay">
      <button type="button" className="overlay-close" onClick={e => removeOverlay()} />
      <div className="rightContainerFlex">
        <img
          className="box img-fluid"
          src={menuData.menu_right_image_1.url}
          onClick={() => {
            window.location = menuData.menu_right_image_url_1.url;
          }}
        />
        <img
          className="box img-fluid"
          src={menuData.menu_right_image_2.url}
          onClick={() => {
            window.location = menuData.menu_right_image_url_2.url;
          }}
        />
        <img
          className="box img-fluid"
          src={menuData.menu_right_image_3.url}
          onClick={() => {
            window.location = menuData.menu_right_image_url_3.url;
          }}
        />
      </div>
    </div>
  );
}

EmptyOverlayModel.defaultProps = {};

EmptyOverlayModel.propTypes = {};
export default EmptyOverlayModel;
