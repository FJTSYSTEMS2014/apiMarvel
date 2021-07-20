import React from 'react';
import LogoImage1 from '../../src/img/marvel-logo.png';

let sectionStyle = {
  width: '100vh',
  height: '20%',
  backgroundSize: 'cover',
  backgroundImage: `url(${LogoImage1})`,
};

function Header () {
  return <div style={sectionStyle} />;
}

export default Header;
