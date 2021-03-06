import React from 'react';
// eslint-disable-next-line no-unused-vars
import FontAwesomeLibrary from '../libraries/fontAwesome';
import Layout from '../components/layout/layout';
import SEO from '../components/common/seo';
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
      <SEO />
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
