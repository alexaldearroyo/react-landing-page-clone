import React from 'react';

const ReadySection = () => (
  <section className="sectionStart ready">
    <div className="readyWhite"></div>
    <div className="sectionContainer">
      <div className="readyTitle">
        <p>Ready?</p>
      </div>
      <div className="readyBox">
        <h2 className="readyBoxPrice">One-time purchase</h2>
        <p className="readyBoxTitle">
          Get instant lifetime access to the Variable Font Course
        </p>
        <span className="readyBoxTitle">
          <small></small>
        </span>
        <p className="readyBoxPrice">€179</p>
        <p className="readyBoxTitle">
          <small>(Normal price €399)</small>
        </p>
        <ul>
          <li>11 video lessons, including transcriptions</li>
          <li>3 bonus lessons</li>
          <li>
            Everything is covered, from designing the font to implementation on
            the web
          </li>
          <li>Learn in your own tempo</li>
          <li>World class instructor</li>
          <li>Unlimited access forever</li>
        </ul>
        <div>
          <a href="https://www.variablefontcourse.com/checkout/?add-to-cart=101">
            <button alt="Join the course today">Join now</button>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ReadySection;
