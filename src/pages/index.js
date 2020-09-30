import React from 'react';
import Layout from '../components/layout/layout';
import Hero from '../components/pages/hero';
import About from '../components/pages/about';

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  );
};

export default IndexPage;
