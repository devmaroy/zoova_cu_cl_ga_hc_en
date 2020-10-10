import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Tween } from 'react-gsap';
import BackgroundImage from 'gatsby-background-image';

// Query
const query = graphql`
  query heroImages {
    allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        name: { eq: "hero-bg-2" }
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

const Hero = () => {
  const data = useStaticQuery(query);
  const image = data.allFile.nodes[0].childImageSharp.fluid;

  return (
    <BackgroundImage
      fluid={image}
      className="banner-area banner-area--top banner-area--large hero"
    >
      <div className="banner-area__inner hero__inner container">
        <Tween
          from={{ autoAlpha: 0, y: '-50', opacity: 0 }}
          ease="power1.out"
          stagger={0.2}
        >
          <h1 className="hero__heading">Zoova Foundation</h1>

          <div className="hero__text">
            <p>A grateful heart is a beginning of greatness.</p>
          </div>
        </Tween>

        <Tween
          from={{ autoAlpha: 0, opacity: 0 }}
          ease="power1.out"
          stagger={0.2}
        >
          <div className="hero__meta">
            <Link to="/" className="button button--primary">
              View gallery
            </Link>

            <Link to="/" className="button button--link">
              Contact us
            </Link>
          </div>
        </Tween>
      </div>
    </BackgroundImage>
  );
};

export default Hero;
