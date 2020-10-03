import React from 'react';
import Layout from '../components/layout/layout';
import Hero from '../components/pages/hero';
import About from '../components/pages/about';
import Message from '../components/pages/message';
import Events from '../components/pages/events';
import Quotes from '../components/pages/quotes';
import FAQ from '../components/pages/faq';
import Contact from '../components/pages/contact';

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Message />
      <Events />
      <Quotes />
      <FAQ />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
