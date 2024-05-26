import React from 'react';

const ReviewsSection = () => (
  <section className="sectionStart review">
    <div className="sectionContainer reviewM">
      <div
        className="sectionHeader"
        itemscope
        itemtype="https://schema.org/Review"
      >
        <h2 className="price">What our students say</h2>
      </div>
      <div className="sectionContent">
        <ul
          itemprop="itemReviewed"
          itemscope
          itemtype="https://schema.org/Course"
        >
          <meta itemprop="name" content="Variable Font Course" />
          <meta
            itemprop="description"
            content="Arthur Reinders Folmer from Typearture teaches you in 11 lessons how to create a working variable color font and implement it in a website."
          />
          <meta itemprop="provider" content="variablefontcourse.com" />
          <li>
            <img
              src="https://www.variablefontcourse.com/wp-content/uploads/2022/01/Mandy-Michael-1.png"
              alt=""
            />
            <span>
              <p className="reviewQuote" itemprop="reviewBody">
                I can finally make my own Variable Fonts...
              </p>
              <p
                className="reviewName"
                itemprop="author"
                itemscope
                itemtype="https://schema.org/Person"
              >
                <a
                  itemprop="name"
                  href="https://twitter.com/Mandy_Kerr"
                  title="Vist website Mandy Michael"
                >
                  Mandy Michael
                </a>
              </p>
              <p className="reviewRole">Front end developer</p>
            </span>
          </li>
          <li>
            <img
              src="https://www.variablefontcourse.com/wp-content/uploads/2022/01/Richard-McDonald-1.jpg"
              alt=""
            />
            <span>
              <p className="reviewQuote" itemprop="reviewBody">
                Arthur is able to share his knowledge...
              </p>
              <p
                className="reviewName"
                itemprop="author"
                itemscope
                itemtype="https://schema.org/Person"
              >
                <a
                  itemprop="name"
                  href="https://www.instagram.com/richardmcdonald/"
                  title="Vist website Richard McDonald"
                >
                  Richard McDonald
                </a>
              </p>
              <p className="reviewRole">Graphic designer</p>
            </span>
          </li>
          <li>
            <img
              src="https://www.variablefontcourse.com/wp-content/uploads/2022/01/Niyati-Mehta-1.png"
              alt=""
            />
            <span>
              <p className="reviewQuote" itemprop="reviewBody">
                I’ve always been a fan of kinetic typography...
              </p>
              <p
                className="reviewName"
                itemprop="author"
                itemscope
                itemtype="https://schema.org/Person"
              >
                <a
                  itemprop="name"
                  href="https://niyatimehta.design/?ref=VFC"
                  title="Vist website Niyati Mehta"
                >
                  Niyati Mehta
                </a>
              </p>
              <p className="reviewRole">Designer</p>
            </span>
          </li>
          <li>
            <img
              src="https://www.variablefontcourse.com/wp-content/uploads/2022/01/robdebree-1.png"
              alt=""
            />
            <span>
              <p className="reviewQuote" itemprop="reviewBody">
                Exploring the near future of type design...
              </p>
              <p
                className="reviewName"
                itemprop="author"
                itemscope
                itemtype="https://schema.org/Person"
              >
                <a
                  itemprop="name"
                  href="https://www.burobree.nl/?ref=VFC"
                  title="Vist website Rob de Bree"
                >
                  Rob de Bree
                </a>
              </p>
              <p className="reviewRole">Brand designer</p>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default ReviewsSection;
