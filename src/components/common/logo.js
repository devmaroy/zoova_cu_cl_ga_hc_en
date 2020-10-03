import React from 'react';
import { Link } from 'gatsby';

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/" className="logo__link">
        <span className="logo__highlight">Zoova</span> Foundation
      </Link>
    </div>
  );
};

export default Logo;
