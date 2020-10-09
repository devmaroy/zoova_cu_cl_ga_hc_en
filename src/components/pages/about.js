import React, { useRef } from 'react';
import { Reveal, Tween } from 'react-gsap';
import SectionHeader from '../common/sectionHeader';
import Card from '../common/card';
import cardImage from '../../images/pages/about/event-01.jpg';
import cardIconUsers from '../../images/icons/users.svg';
import cardIconEvent from '../../images/icons/event.svg';
import cardIconHeart from '../../images/icons/heart.svg';
import cardIconMoney from '../../images/icons/money.svg';

const About = () => {
  const triggerAnimationCardsRef = useRef();

  return (
    <section id="about" className="section about divider-space-section">
      <div className="container">
        <div className="about__inner">
          <SectionHeader
            heading="Help people along with us"
            headingClass="about__heading"
            textClass="about__text"
          >
            <p>
              See how many people are already helping and how many sponsors
              dotated their money to people.
            </p>

            <p>
              We also organize a lot of events. The current event is{' '}
              <strong>A Cup Of Tea With People</strong>
            </p>
          </SectionHeader>

          <div
            className="about__overview section__spacing"
            ref={triggerAnimationCardsRef}
          >
            <Reveal trigger={triggerAnimationCardsRef.current}>
              <Tween from={{ opacity: 0 }} ease="power1.out" stagger={0.2}>
                <div className="about__item">
                  <Card
                    featured
                    image={cardImage}
                    date="May 15, 2018"
                    heading="A Cup Of Tea With People"
                  >
                    <p>
                      If you haven&apos;t got any charity in your heart, you
                      have the worst kind of heart trouble.
                    </p>

                    <p>
                      Charity must become a fundamental state of mind and heart
                      that guides us in all we do.
                    </p>
                  </Card>
                </div>

                <div className="about__item">
                  <Card
                    icon={cardIconUsers}
                    heading="Participants"
                    headingHighlight="235.154"
                  >
                    <p>
                      See how our foundation grows. With a lot of wonderful and
                      nice people.
                    </p>
                  </Card>
                </div>

                <div className="about__item">
                  <Card
                    icon={cardIconEvent}
                    heading="Events"
                    headingHighlight="1046"
                  >
                    <p>
                      See how our foundation grows. With a lot of wonderful and
                      nice people.
                    </p>
                  </Card>
                </div>

                <div className="about__item">
                  <Card
                    icon={cardIconHeart}
                    heading="Sponsors"
                    headingHighlight="713"
                  >
                    <p>
                      See how our foundation grows. With a lot of wonderful and
                      nice people.
                    </p>
                  </Card>
                </div>

                <div className="about__item">
                  <Card
                    icon={cardIconMoney}
                    heading="Donated"
                    headingHighlight="$5.647.147"
                  >
                    <p>
                      See how our foundation grows. With a lot of wonderful and
                      nice people.
                    </p>
                  </Card>
                </div>
              </Tween>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
