/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Slider from 'react-slick';
import BackgroundImage from 'gatsby-background-image';
import { Reveal, Tween } from 'react-gsap';

// Query
const query = graphql`
  query quotesImages {
    allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        name: { eq: "quotes-bg" }
      }
    ) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

const quotes = [
  {
    text: `"The way you get meaning into your life is to devote yourself to loving others, devote yourself to your community around you, and devote yourself to creating something that gives you purpose and meaning."`,
    author: 'Mitch Albom',
  },
  {
    text: `"The difference between what we do and what we are capable of doing would suffice to solve most of the world's problems."`,
    author: 'Mitch Albom',
  },
  {
    text: `"This country will not be a good place for any of us to live in unless we make it a good place for all of us to live in."`,
    author: 'Theodore Roosevelt',
  },
];

const Quotes = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
  };

  const triggerAnimationRef = useRef();

  const data = useStaticQuery(query);
  const image = data.allFile.nodes[0].childImageSharp.fluid;

  return (
    <BackgroundImage
      fluid={image}
      Tag="section"
      className="section banner-area quotes"
    >
      <div
        className="banner-area__inner quotes__inner container"
        ref={triggerAnimationRef}
      >
        <Reveal trigger={triggerAnimationRef.current}>
          <Tween from={{ autoAlpha: 0, opacity: 0 }} ease="power1.out">
            <div className="quotes__slider">
              <Slider {...settings}>
                {quotes.map(({ text, author }) => (
                  <blockquote
                    key={text}
                    className="banner-area__text quotes__text section__text"
                  >
                    {text}

                    <footer>— {author}</footer>
                  </blockquote>
                ))}
              </Slider>
            </div>
          </Tween>
        </Reveal>
      </div>
    </BackgroundImage>
  );
};

export default Quotes;
