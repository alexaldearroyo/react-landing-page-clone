import React from 'react';

const TrailerSection = () => (
  <section className="sectionStart">
    <div className="sectionContainer">
      <div id="trailer" className="sectionHeader">
        <h2 className="price">Watch the trailer</h2>
      </div>
      <div className="sectionContent trailer">
        <div className="embed-container">
          <iframe
            title="Variable Font Course"
            src="https://player.vimeo.com/video/695357111?dnt=1&app_id=122963"
            width="640"
            height="360"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
);

export default TrailerSection;
