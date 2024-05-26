import React from 'react';

const InstructorSection = () => (
  <section className="sectionStart">
    <div className="sectionContainer">
      <div className="sectionHeader">
        <h2 className="price">Meet your instructor</h2>
      </div>
      <div className="sectionContent">
        <div className="leaderGrid">
          <div
            className="leaderImg"
            style={{
              background:
                'linear-gradient(234deg,#3234FF, #DEA5B0), url("https://www.variablefontcourse.com/wp-content/uploads/2022/04/arthur.jpg") center center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
          <span>
            <p>
              <a href="https://www.typearture.com/?ref=VFC">
                Arthur Reinders Folmer
              </a>{' '}
              likes to play with typography...
            </p>
            <p>Through his type foundry, Typearture...</p>
            <p>
              Be sure to check out his{' '}
              <a href="https://www.instagram.com/typearture/">Instagram</a>.
            </p>
            <p>
              <i>
                “The absolute craziest variable color font designer on planet
                earth!”
              </i>{' '}
              – Ulrike Rausch
            </p>
          </span>
        </div>
        <div className="leaderMasonry">
          <img
            src="https://www.variablefontcourse.com/wp-content/uploads/2022/01/InitialAnimatie.gif"
            alt=""
          />
          <img
            src="https://www.variablefontcourse.com/wp-content/uploads/2022/03/Typearture-Kado_wide.gif"
            alt="Showcase Variable Color Font 'Gift box' by Typearture"
          />
          <img
            src="https://www.variablefontcourse.com/wp-content/uploads/2022/03/Typearture-BassieAdriaan.gif"
            alt="Showcase Variable Color Font Bassie en Adriaan by Typearture"
          />
          <img
            src="https://www.variablefontcourse.com/wp-content/uploads/2022/01/InitialGrowth.gif"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
);

export default InstructorSection;
