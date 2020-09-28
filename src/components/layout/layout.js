import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <>
      <div className="site-content">
        <Header />

        <main className="main">{children}</main>

        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
