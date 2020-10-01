import React from 'react';
import messageBg from '../../images/pages/message/message-bg.jpg';

const Message = () => {
  return (
    <section
      className="section banner-area message"
      style={{ backgroundImage: `url( ${messageBg} )` }}
    >
      <div className="banner-area__overlay message__overlay overlay">
        <div className="banner-area__inner message__inner container">
          <h2 className="banner-area__heading message__heading section__heading">
            A heart without dreams is like a bird without feathers
          </h2>

          <div className="banner-area__text message__text section__text">
            <p>
              A grateful heart is a beginning of greatness. It is an expression
              of humility.
            </p>

            <p>
              It is a foundation for the development of such virtues as prayer,
              faith, courage, contentment, happiness, love, and well-being.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Message;
