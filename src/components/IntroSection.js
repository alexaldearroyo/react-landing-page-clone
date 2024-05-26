import React from 'react';

const IntroSection = () => (
  <section className="sectionStart">
    <div className="sectionContainer">
      <div className="sectionHeader">
        <h2 className="price">
          Learn how to create your own variable color font
        </h2>
        <p className="introTextBody">
          Variable fonts are an exciting new way to express typography...
        </p>
        <div className="intoCourseLeader">
          <img
            src="https://www.variablefontcourse.com/wp-content/uploads/2021/08/arthur_mattmo_crop.jpeg"
            alt=""
          />
          <div>
            <p>Arthur Reinders Folmer</p>
            <p>Instructor</p>
          </div>
        </div>
        <div className="contentBoxGrid">
          <p className="contentBoxPrice">Full course, only €179</p>
          <a
            href="https://www.variablefontcourse.com/checkout/?add-to-cart=101"
            title="Join Now"
          >
            <button className="enroll">Join Now</button>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default IntroSection;
