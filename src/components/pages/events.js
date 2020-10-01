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
            Events of the latest events
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

          <Gallery
            images={[
              eventImg1,
              eventImg2,
              eventImg3,
              eventImg4,
              eventImg5,
              eventImg6,
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Events;
