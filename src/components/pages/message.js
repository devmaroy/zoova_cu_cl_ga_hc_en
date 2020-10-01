import React from 'react';
import messageBg from '../../images/pages/message/message-bg.jpg';

const Message = () => {
  return (
    <section
      className="message"
      style={{ backgroundImage: `url( ${messageBg} )` }}
    >
      <div className="message__overlay overlay">
        <div className="message__inner container">
          <h2 className="message__heading">
            A heart without dreams is like a bird without feathers
          </h2>

          <div className="message__text section-text">
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
