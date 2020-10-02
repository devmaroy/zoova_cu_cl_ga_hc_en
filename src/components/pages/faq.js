import React from 'react';
import Accordion from '../common/accordion';

const FAQ = () => {
  return (
    <section className="section faq divider-space-section">
      <div className="container">
        <div className="faq__inner">
          <h2 className="faq__heading section__heading">How can you help</h2>

          <div className="faq__text section__text">
            <p>
              If you are interested to join us and start helping people
              together, we have several questions already answered for you.
            </p>
          </div>

          <div className="faq__items section__spacing">
            <Accordion
              items={[
                {
                  id: '9ed27dcc-cc36-4310-b8e1-3c1b1d310c0e',
                  heading: 'How old should I be?',
                  text: (
                    <p>
                      It does not matter how old you are. It is not necessary to
                      contribute financially, you can donate clothes,
                      participate in events and so on.
                    </p>
                  ),
                },
                {
                  id: '474a51dd-b89c-4ee8-971d-6d7d85fe360c',
                  heading: 'Can I organize the event myself?',
                  text: (
                    <p>
                      Not quite. The event is organized by our foundation, but
                      it is possible to negotiate and co-organize the event.
                    </p>
                  ),
                },
                {
                  id: '08f0b94f-379c-4cdf-923f-bd390a4d4c49',
                  heading: 'Can I bring friends to an event?',
                  text: (
                    <p>
                      Of course! We will be glad to welcome your friends, family
                      members and other people. There is an unlimited number of
                      people you can take with you.
                    </p>
                  ),
                },
              ]}
            />

            <Accordion
              items={[
                {
                  id: '96b655b1-5c3c-4e8a-9093-d96c254205d4',
                  heading: 'Can we show sponsors?',
                  text: (
                    <p>
                      Sponsors. This is the detailed answer. It is a long
                      established fact that a reader will be distracted by the
                      readable content of a page when looking at its layout.
                    </p>
                  ),
                },
                {
                  id: '7ebda409-3314-491c-921f-c6a87ce442c6',
                  heading: 'Can I donate money via paypal?',
                  text: (
                    <p>
                      Yes. Paying money with PayPal is possible. After sending
                      the money, please contact us by e-mail and provide your
                      name, email and amount.
                    </p>
                  ),
                },
                {
                  id: '0c27fb29-d06d-4d97-8d71-2d17e2ac403f',
                  heading: 'Can I offer my coaching services?',
                  text: (
                    <p>
                      If you are a fitness coach and would like to help us with
                      the organization of public training, then yes, it is
                      possible. Write us an email, give us your experience, idea
                      and place.
                    </p>
                  ),
                },
              ]}
            />

            <Accordion
              items={[
                {
                  id: '4c9ce770-26ae-44d3-a411-aeb88719e28e',
                  heading: 'I live abroad, can I participate?',
                  text: (
                    <p>
                      Yes! The only condition is fluent English because all
                      communication with people, organizers is in English.
                    </p>
                  ),
                },
                {
                  id: '3561ff80-9315-46d5-a9dd-886d43f1c192',
                  heading: 'Is it possible to organize an event abroad?',
                  text: (
                    <p>
                      Unfortunately, no. Events are organized only in our
                      country. The only way to participate is to come to us.
                    </p>
                  ),
                },
                {
                  id: 'd80d8625-cc49-4e5d-8500-21b45cd430a9',
                  heading: 'Can I tell other people about you?',
                  text: (
                    <p>
                      Of course yes!{' '}
                      <span
                        role="img"
                        aria-label="grinning face with squinting eyes"
                      >
                        😄
                      </span>{' '}
                      We will be very happy if you share our mission with your
                      friends, colleagues, family and other people. You can
                      share our posts on facebook, twitter and let us know about
                      sponsors, other foundations and people who would like to
                      help with us!
                    </p>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
