import React from 'react';
import { Link } from 'gatsby';

const About = () => {
  return (
    <section className="about divider-space-section">
      <div className="container">
        <div className="about__inner">
          <h2 className="about__heading">Help people along with us</h2>

          <div className="about__text">
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
            <div className="card">
              <div className="card__image" />

              <div className="card__date">
                <time>May 15, 2018</time>
              </div>

              <h3 className="card__heading">A Cup Of Tea With People</h3>

              <div className="card__text">
                <p>
                  If you haven&apos;t got any charity in your heart, you have
                  the worst kind of heart trouble.
                </p>

                <p>
                  Charity must become a fundamental state of mind and heart that
                  guides us in all we do.
                </p>
              </div>

              <div className="card__meta">
                <Link to="/" className="card__button">
                  Learn more
                </Link>
              </div>
            </div>

            <div className="card">
              <div className="card__icon" />

              <h3 className="card__heading">235.154 Participants</h3>

              <div className="card__text">
                <p>
                  See how our foundation grows. With a lot of wonderful and nice
                  people.
                </p>
              </div>

              <div className="card__meta">
                <Link to="/" className="card__button">
                  Learn more
                </Link>
              </div>
            </div>

            <div className="card">
              <div className="card__icon" />

              <h3 className="card__heading">1046 Events</h3>

              <div className="card__text">
                <p>
                  See how our foundation grows. With a lot of wonderful and nice
                  people.
                </p>
              </div>

              <div className="card__meta">
                <Link to="/" className="card__button">
                  Learn more
                </Link>
              </div>
            </div>

            <div className="card">
              <div className="card__icon" />

              <h3 className="card__heading">713 Sponsors</h3>

              <div className="card__text">
                <p>
                  See how our foundation grows. With a lot of wonderful and nice
                  people.
                </p>
              </div>

              <div className="card__meta">
                <Link to="/" className="card__button">
                  Learn more
                </Link>
              </div>
            </div>

            <div className="card">
              <div className="card__icon" />

              <h3 className="card__heading">$5.647.147 Donated</h3>

              <div className="card__text">
                <p>
                  See how our foundation grows. With a lot of wonderful and nice
                  people.
                </p>
              </div>

              <div className="card__meta">
                <Link to="/" className="card__button">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
