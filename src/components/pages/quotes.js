import React from 'react';
import quotesBg from '../../images/pages/quotes/quotes-bg.jpg';

const Quotes = () => {
  return (
    <section
      className="section banner-area quotes"
      style={{ backgroundImage: `url( ${quotesBg} )` }}
    >
      <div className="banner-area__inner quotes__inner container">
        <blockquote className="banner-area__text quotes__text section__text">
          <p>
            &quot;This country will not be a good place for any of us to live in
            unless we make it a good place for all of us to live in.&quot;
          </p>

          <footer>— Theodore Roosevelt</footer>
        </blockquote>
      </div>
    </section>
  );
};

export default Quotes;
