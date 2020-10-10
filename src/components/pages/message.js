import React, { useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import SectionHeader from '../common/sectionHeader';

// Query
const query = graphql`
  query messageImages {
    allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        name: { eq: "message-bg" }
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

const Message = () => {
  const triggerAnimationRef = useRef();

  const data = useStaticQuery(query);
  const image = data.allFile.nodes[0].childImageSharp.fluid;

  return (
    <BackgroundImage
      fluid={image}
      Tag="section"
      className="section banner-area message"
    >
      <div
        className="banner-area__inner message__inner container"
        ref={triggerAnimationRef}
      >
        <SectionHeader
          heading="A heart without dreams is like a bird without feathers"
          headingClass="message__heading"
          textClass="message__text"
        >
          <p>
            A grateful heart is a beginning of greatness. It is an expression of
            humility.
          </p>

          <p>
            It is a foundation for the development of such virtues as prayer,
            faith, courage, contentment, happiness, love, and well-being.
          </p>
        </SectionHeader>
      </div>
    </BackgroundImage>
  );
};

export default Message;
