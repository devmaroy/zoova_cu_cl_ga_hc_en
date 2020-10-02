import React from 'react';
import contactBg from '../../images/pages/contact/contact-bg.jpg';

const Contact = () => {
  return (
    <section
      className="section banner-area contact"
      style={{ backgroundImage: `url( ${contactBg} )` }}
    >
      <div className="banner-area__overlay contact__overlay overlay">
        <div className="banner-area__inner contact__inner container">
          <h2 className="banner-area__heading contact__heading section__heading">
            Contact us
          </h2>

          <div className="banner-area__text contact__text section__text">
            <p>
              If you want to help people or if you want to ask something. Do not
              hesitate to write to us.
            </p>
          </div>

          <div className="contact__form section__spacing">
            <form className="form">
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
                  type="submit"
                  className="button button--outline-primary"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
