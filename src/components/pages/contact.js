import React, { useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Reveal, Tween } from 'react-gsap';
import BackgroundImage from 'gatsby-background-image';
import SectionHeader from '../common/sectionHeader';

// Query
const query = graphql`
  query contactImages {
    allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        name: { eq: "contact-bg" }
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

const Contact = () => {
  const triggerAnimationRef = useRef();

  const data = useStaticQuery(query);
  const image = data.allFile.nodes[0].childImageSharp.fluid;

  return (
    <BackgroundImage
      id="contact"
      fluid={image}
      Tag="section"
      className="section banner-area  contact"
    >
      <div className="banner-area__inner contact__inner container">
        <SectionHeader
          heading="Contact us"
          headingClass="banner-area__heading contact__heading"
          textClass="banner-area__text contact__text"
        >
          <p>
            If you want to help people or if you want to ask something. Do not
            hesitate to write to us.
          </p>
        </SectionHeader>

        <div
          className="contact__form section__spacing"
          ref={triggerAnimationRef}
        >
          <Reveal trigger={triggerAnimationRef.current}>
            <Tween
              from={{ autoAlpha: 0, opacity: 0 }}
              ease="power1.out"
              stagger={0.2}
            >
              <form className="form">
                <div className="form__layout">
                  <div className="form__group">
                    <label htmlFor="name" className="form__label">
                      Name
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="form__control"
                      />
                    </label>
                  </div>

                  <div className="form__group">
                    <label htmlFor="email" className="form__label">
                      Email
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="form__control"
                      />
                    </label>
                  </div>

                  <div className="form__group">
                    <label htmlFor="phone" className="form__label">
                      Phone
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="form__control"
                      />
                    </label>
                  </div>
                </div>

                <div className="form__group">
                  <label htmlFor="message" className="form__label">
                    Message
                    <textarea
                      name="message"
                      id="message"
                      className="form__control"
                    />
                  </label>
                </div>

                <div className="form__meta">
                  <button
                    type="button"
                    className="button button--outline-primary"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </Tween>
          </Reveal>
        </div>
      </div>
    </BackgroundImage>
  );
};

export default Contact;
