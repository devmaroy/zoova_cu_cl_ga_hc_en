import React from 'react';
import Layout from '../components/layout/layout';
import Hero from '../components/pages/hero';
import About from '../components/pages/about';
import Message from '../components/pages/message';
import Events from '../components/pages/events';

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Message />
      <Events />
      <div className="space" />
    </Layout>
  );
};

export default IndexPage;
