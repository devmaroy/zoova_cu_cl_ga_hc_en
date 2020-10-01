import React from 'react';
import Gallery from '../common/gallery';
import eventImg1 from '../../images/pages/events/event-01.jpg';
import eventImg2 from '../../images/pages/events/event-02.jpg';
import eventImg3 from '../../images/pages/events/event-03.jpg';
import eventImg4 from '../../images/pages/events/event-04.jpg';
import eventImg5 from '../../images/pages/events/event-05.jpg';
import eventImg6 from '../../images/pages/events/event-06.jpg';

const Events = () => {
  return (
    <section className="section events divider-space-section">
      <div className="container">
        <div className="events__inner">
          <h2 className="events__heading section__heading">
            Gallery of the latest events
          </h2>

          <div className="events__text section__text">
            <p>
              Check out our latest events. We hold concerts, marathons,
              performances, lunches, dinners and other events. You too can be
              part of it!{' '}
              <span role="img" aria-label="winking face">
                😉
              </span>
            </p>
          </div>

          <div className="events__gallery">
            <Gallery
              items={[
                {
                  image: eventImg1,
                  heading: 'Marathon',
                  headingHighlight: 'Zoova',
                },
                {
                  image: eventImg2,
                  heading: 'Concert',
                  headingHighlight: 'Public',
                },
                {
                  image: eventImg3,
                  heading: 'Gym Class',
                  headingHighlight: 'Open',
                },
                {
                  image: eventImg4,
                  heading: 'Lunch',
                  headingHighlight: 'Free',
                },
                {
                  image: eventImg5,
                  heading: 'Dance Class',
                  headingHighlight: 'Sponsored',
                },
                {
                  image: eventImg6,
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
