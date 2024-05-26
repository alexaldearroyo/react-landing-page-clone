import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="footerContainer">
      <ul>
        <li>
          <a href="/what-is-a-variable-font/">What is a Variable Font</a>
        </li>
        <li>
          <details>
            <summary>
              <div>Contact</div>
            </summary>
            <div className="details-modal">
              <div className="details-modal-close">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579 1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7 0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421 12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7 13.7071 1.70711Z"
                    fill="black"
                  ></path>
                </svg>
              </div>
              <div className="details-modal-title">
                <h1>Contact</h1>
              </div>
              <div className="details-modal-content">
                <p>
                  If you have any questions or concerns regarding FAQ or your
                  order, please do not hesitate and contact us at{' '}
                  <a href="mailto:info@variablefontcourse.com">
                    info@variablefontcourse.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </details>
        </li>
        <li>
          <details>
            <summary>
              <div>Terms and conditions</div>
            </summary>
            <div className="details-modal">
              <div className="details-modal-close">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579 1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7 0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421 12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7 13.7071 1.70711Z"
                    fill="black"
                  ></path>
                </svg>
              </div>
              <div className="details-modal-title">
                <h1>Terms and conditions</h1>
              </div>
              <div className="details-modal-content">
                <p>
                  For all services provided on variablefontcourse.com, part of
                  Studio Dahm, established in Delft, KvK number 20148379, the
                  following conditions apply when purchasing video training...
                </p>
              </div>
            </div>
          </details>
        </li>
        <li>
          <a href="https://variablefontcourse.eo.page/stay-in-touch">
            Join our mailing list
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
