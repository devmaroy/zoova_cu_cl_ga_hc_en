import React from 'react';
import Layout from '../components/layout/layout';
import Hero from '../components/pages/hero';
import About from '../components/pages/about';
import Message from '../components/pages/message';

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Message />
      <div className="space" />
    </Layout>
  );
};

export default IndexPage;
