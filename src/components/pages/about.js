import React from 'react';
import Card from '../common/card';
import cardImage from '../../images/pages/about/event-01.jpg';
import cardIconUsers from '../../images/icons/users.svg';
import cardIconEvent from '../../images/icons/event.svg';
import cardIconHeart from '../../images/icons/heart.svg';
import cardIconMoney from '../../images/icons/money.svg';

const About = () => {
  return (
    <section className="about divider-space-section">
      <div className="container">
        <div className="about__inner">
          <h2 className="about__heading">Help people along with us</h2>

          <div className="about__text section-text">
            <p>
              See how many people are already helping and how many sponsors
              dotated their money to people.
            </p>

            <p>
              We also organize a lot of events. The current event is{' '}
              <strong>A Cup Of Tea With People</strong>
            </p>
          </div>

          <div className="about__overview">
            <Card
              featured
              image={cardImage}
              date="May 15, 2018"
              heading="A Cup Of Tea With People"
            >
              <p>
                If you haven&apos;t got any charity in your heart, you have the
                worst kind of heart trouble.
              </p>

              <p>
                Charity must become a fundamental state of mind and heart that
                guides us in all we do.
              </p>
            </Card>

            <Card
              icon={cardIconUsers}
              heading="Participants"
              headingHighlight="235.154"
            >
              <p>
                See how our foundation grows. With a lot of wonderful and nice
                people.
              </p>
            </Card>

            <Card icon={cardIconEvent} heading="Events" headingHighlight="1046">
              <p>
                See how our foundation grows. With a lot of wonderful and nice
                people.
              </p>
            </Card>

            <Card
              icon={cardIconHeart}
              heading="Sponsors"
              headingHighlight="713"
            >
              <p>
                See how our foundation grows. With a lot of wonderful and nice
                people.
              </p>
            </Card>

            <Card
              icon={cardIconMoney}
              heading="Donated"
              headingHighlight="$5.647.147"
            >
              <p>
                See how our foundation grows. With a lot of wonderful and nice
                people.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
