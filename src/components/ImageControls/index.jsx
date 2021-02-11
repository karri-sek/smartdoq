import React from 'react';
import readPdfNew from '../../files/readPdfNew.png';
import _360 from '../../files/_360.png';
import view from '../../files/view.png'
import watch from '../../files/watch.png'
const ImageControls = ({ websiteMeta, uid }) => {
  return (
    <div id="imageControls" className="container imageControlFlex">
      <img className="box img-fluid" src={readPdfNew}></img>
      <img className="box img-fluid"  src={_360}></img>
      <img className="box img-fluid"  src={view}></img>
      <img className="box img-fluid"  src={watch}></img>
    </div>
  );
};

export default ImageControls;
