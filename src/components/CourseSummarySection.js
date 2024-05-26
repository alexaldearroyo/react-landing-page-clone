import React from 'react';

const CourseSummarySection = () => (
  <section className="sectionStart learn">
    <div className="learnTopShape"></div>
    <div className="sectionContainer">
      <div className="sectionHeader">
        <h2 className="price transition">What you will learn</h2>
        <p>The course consists of 11 video lessons...</p>
      </div>
      <div className="sectionContent">
        <ul className="learnSummaryGrid">
          <li className="learnSummaryGridItem">
            <div className="learnSummaryGridItemCenter">
              <img
                src="https://www.variablefontcourse.com/wp-content/uploads/2022/03/vfc_learn01.svg"
                alt=""
              />
            </div>
            <p>
              <strong>Create a basic typeface in Glyphs 3</strong>
            </p>
          </li>
          <li className="learnSummaryGridItem">
            <div className="learnSummaryGridItemCenter">
              <img
                src="https://www.variablefontcourse.com/wp-content/uploads/2022/03/vfc_learn02.svg"
                alt=""
              />
            </div>
            <p>
              <strong>Add variables to your typeface</strong>
            </p>
          </li>
          <li className="learnSummaryGridItem">
            <div className="learnSummaryGridItemCenter">
              <img
                src="https://www.variablefontcourse.com/wp-content/uploads/2022/03/vfc_learn03.svg"
                alt=""
              />
            </div>
            <p>
              <strong>Add colors to it</strong>
            </p>
          </li>
          <li className="learnSummaryGridItem">
            <div className="learnSummaryGridItemCenter">
              <img
                src="https://www.variablefontcourse.com/wp-content/uploads/2022/03/vfc_learn04.svg"
                alt=""
              />
            </div>
            <p>
              <strong>Export your variable color font to use on the web</strong>
            </p>
          </li>
          <li className="learnSummaryGridItem">
            <div className="learnSummaryGridItemCenter">
              <img
                src="https://www.variablefontcourse.com/wp-content/uploads/2022/03/vfc_learn05.svg"
                alt=""
              />
            </div>
            <p>
              <strong>Implement it in HTML and CSS</strong>
            </p>
          </li>
          <li className="learnSummaryGridItem">
            <div className="learnSummaryGridItemCenter">
              <img
                src="https://www.variablefontcourse.com/wp-content/uploads/2022/03/vfc_learn06.svg"
                alt=""
              />
            </div>
            <p>
              <strong>Animate it in the browser</strong>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default CourseSummarySection;
