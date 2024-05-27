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
          Variable fonts are an exciting new way to express typography...
        </p>
        <div className={styles.intoCourseLeader}>
          <img
            src="https://www.variablefontcourse.com/wp-content/uploads/2021/08/arthur_mattmo_crop.jpeg"
            alt=""
          />
          <div>
            <p>Arthur Reinders Folmer</p>
            <p>Instructor</p>
          </div>
        </div>
        <div className={styles.contentBoxGrid}>
          <p className={styles.contentBoxPrice}>Full course, only €179</p>
          <a
            href="https://www.variablefontcourse.com/checkout/?add-to-cart=101"
            title="Join Now"
          >
            <button className={styles.enroll}>Join Now</button>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default IntroSection;
