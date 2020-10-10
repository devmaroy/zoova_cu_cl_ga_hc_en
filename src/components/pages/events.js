import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import SectionHeader from '../common/sectionHeader';
import Gallery from '../common/gallery';

// Query
const query = graphql`
  query eventsImages {
    allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "pages/events" }
      }
      sort: { fields: [name], order: ASC }
    ) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

const Events = () => {
  const data = useStaticQuery(query);
  const images = data.allFile.nodes;

  return (
    <section id="events" className="section events divider-space-section">
      <div className="container">
        <div className="events__inner">
          <SectionHeader
            heading="Gallery of the latest events"
            headingClass="events__heading"
            textClass="events__text"
          >
            <p>
              Check out our latest events. We hold concerts, marathons,
              performances, lunches, dinners and other events. You too can be
              part of it!{' '}
              <span role="img" aria-label="winking face">
                😉
              </span>
            </p>
          </SectionHeader>

          <div className="events__gallery section__spacing">
            <Gallery
              items={[
                {
                  image: images[0].childImageSharp.fluid,
                  heading: 'Marathon',
                  headingHighlight: 'Zoova',
                },
                {
                  image: images[1].childImageSharp.fluid,
                  heading: 'Concert',
                  headingHighlight: 'Public',
                },
                {
                  image: images[2].childImageSharp.fluid,
                  heading: 'Gym Class',
                  headingHighlight: 'Open',
                },
                {
                  image: images[3].childImageSharp.fluid,
                  heading: 'Lunch',
                  headingHighlight: 'Free',
                },
                {
                  image: images[4].childImageSharp.fluid,
                  heading: 'Dance Class',
                  headingHighlight: 'Sponsored',
                },
                {
                  image: images[5].childImageSharp.fluid,
                  heading: 'Together',
                  headingHighlight: 'Travel',
                },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
