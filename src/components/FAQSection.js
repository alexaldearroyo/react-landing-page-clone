import React from 'react';

const FAQSection = () => (
  <section
    className="sectionStart faq"
    itemscope
    itemtype="https://schema.org/FAQPage"
  >
    <div className="sectionContainer faqBox">
      <div className="sectionHeader">
        <h2 className="price">Frequently Asked Questions</h2>
      </div>
      <div className="sectionContent">
        <span
          itemscope
          itemprop="mainEntity"
          itemtype="https://schema.org/Question"
        >
          <button className="accordion">
            <span itemprop="name">For whom is this course?</span>
          </button>
          <div
            itemscope
            itemprop="acceptedAnswer"
            itemtype="https://schema.org/Answer"
            className="panel"
          >
            <p itemprop="text">
              For everyone who wants to experiment with variable fonts...
            </p>
          </div>
        </span>
        <span
          itemscope
          itemprop="mainEntity"
          itemtype="https://schema.org/Question"
        >
          <button className="accordion">
            <span itemprop="name">
              I have never made a font before, and never worked with Glyphs...
            </span>
          </button>
          <div
            itemscope
            itemprop="acceptedAnswer"
            itemtype="https://schema.org/Answer"
            className="panel"
          >
            <p itemprop="text">
              No problem. Basic graphic design skills are required...
            </p>
          </div>
        </span>
        <span
          itemscope
          itemprop="mainEntity"
          itemtype="https://schema.org/Question"
        >
          <button className="accordion">
            <span itemprop="name">What topics do the lessons cover?</span>
          </button>
          <div
            itemscope
            itemprop="acceptedAnswer"
            itemtype="https://schema.org/Answer"
            className="panel"
          >
            <p itemprop="text">We have created 11 video lessons...</p>
          </div>
        </span>
        <span
          itemscope
          itemprop="mainEntity"
          itemtype="https://schema.org/Question"
        >
          <button className="accordion">
            <span itemprop="name">Which font drawing tool do I need?</span>
          </button>
          <div
            itemscope
            itemprop="acceptedAnswer"
            itemtype="https://schema.org/Answer"
            className="panel"
          >
            <p itemprop="text">
              - A vector drawing program like Illustrator...
            </p>
          </div>
        </span>
        <span
          itemscope
          itemprop="mainEntity"
          itemtype="https://schema.org/Question"
        >
          <button className="accordion">
            <span itemprop="name">What software skills do I need?</span>
          </button>
          <div
            itemscope
            itemprop="acceptedAnswer"
            itemtype="https://schema.org/Answer"
            className="panel"
          >
            <p itemprop="text">
              You know how to draw in a vector based program...
            </p>
          </div>
        </span>
        <span
          itemscope
          itemprop="mainEntity"
          itemtype="https://schema.org/Question"
        >
          <button className="accordion">
            <span itemprop="name">Do you offer discounts?</span>
          </button>
          <div
            itemscope
            itemprop="acceptedAnswer"
            itemtype="https://schema.org/Answer"
            className="panel"
          >
            <p itemprop="text">
              We launch the course with a big (but temporary) discount...
            </p>
          </div>
        </span>
        <span
          itemscope
          itemprop="mainEntity"
          itemtype="https://schema.org/Question"
        >
          <button className="accordion">
            <span itemprop="name">Can I give the course as a gift?</span>
          </button>
          <div
            itemscope
            itemprop="acceptedAnswer"
            itemtype="https://schema.org/Answer"
            className="panel"
          >
            <p itemprop="text">Want a great idea. Yes, it’s possible...</p>
          </div>
        </span>
        <span
          itemscope
          itemprop="mainEntity"
          itemtype="https://schema.org/Question"
        >
          <button className="accordion">
            <span itemprop="name">
              How long do I have access to the course?
            </span>
          </button>
          <div
            itemscope
            itemprop="acceptedAnswer"
            itemtype="https://schema.org/Answer"
            className="panel"
          >
            <p itemprop="text">How does lifetime access sound?...</p>
          </div>
        </span>
        <span
          itemscope
          itemprop="mainEntity"
          itemtype="https://schema.org/Question"
        >
          <button className="accordion">
            <span itemprop="name">I have another question</span>
          </button>
          <div
            itemscope
            itemprop="acceptedAnswer"
            itemtype="https://schema.org/Answer"
            className="panel"
          >
            <p itemprop="text">
              Sure - contact us at{' '}
              <a href="mailto:info@variablefontcourse.com">
                info@variablefontcourse.com
              </a>
              .
            </p>
          </div>
        </span>
      </div>
    </div>
  </section>
);

export default FAQSection;
