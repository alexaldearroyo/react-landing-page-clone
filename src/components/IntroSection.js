import classNames from 'classnames';
import React from 'react';
import styles from '../styles/styles.module.scss';

const IntroSection = () => (
  <section className={styles.sectionStart}>
    <div className={styles.sectionContainer}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.price}>
          Learn how to create your own variable color font
        </h2>
        <p className={styles.introTextBody}>
          Variable fonts are an exciting new way to express typography. In my
          work, I'm pushing the limits of this technique. I’m thrilled to share
          my knowledge with the rest of the world in this video course!
        </p>
        <div className={styles.intoCourseLeader}>
          <img
            className={styles.instructorImage}
            src="https://www.variablefontcourse.com/wp-content/uploads/2021/08/arthur_mattmo_crop.jpeg"
            alt=""
          />
          <div className={styles.display}>
            <p className={styles.instructorName}> Arthur Reinders Folmer</p>
            <p className={styles.instructor}>Instructor</p>
          </div>
        </div>
        <div className={styles.contentBoxGrid}>
          <p className={styles.contentBoxPrice}>Full course, only €179</p>
          <a
            href="https://www.variablefontcourse.com/checkout/?add-to-cart=101"
            title="Join Now"
          >
            <span className={classNames(styles.enroll, styles.enrollButton)}>
              Join Now
            </span>
          </a>
        </div>
      </div>
    </div>
    <div className={styles.contentBox}> </div>
  </section>
);

export default IntroSection;
