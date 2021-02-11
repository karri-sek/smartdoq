import React from 'react';

const LogoDesc = ({logo, desc }) => {
  return (
    <div id="LogoDesc" className="logoDescContainer">
      <img className="box img-fluid" src={logo}></img>
      <div className="align-self" dangerouslySetInnerHTML={{ __html: desc }} />
    </div>
  );
};

export default LogoDesc;
