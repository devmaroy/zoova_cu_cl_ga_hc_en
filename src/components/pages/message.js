import React, { useRef } from 'react';
import SectionHeader from '../common/sectionHeader';
import messageBg from '../../images/pages/message/message-bg.jpg';

const Message = () => {
  const triggerAnimationRef = useRef();

  return (
    <section
      className="section banner-area message"
      style={{ backgroundImage: `url( ${messageBg} )` }}
    >
      <div
        className="banner-area__inner message__inner container"
        ref={triggerAnimationRef}
      >
        <SectionHeader heading="A heart without dreams is like a bird without feathers">
          <p>
            A grateful heart is a beginning of greatness. It is an expression of
            humility.
          </p>

          <p>
            It is a foundation for the development of such virtues as prayer,
            faith, courage, contentment, happiness, love, and well-being.
          </p>
        </SectionHeader>
      </div>
    </section>
  );
};

export default Message;
