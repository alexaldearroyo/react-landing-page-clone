import classNames from 'classnames';
import React from 'react';
import styles from '../styles/styles.module.scss';

// import logo from '../../public/logo.svg';

const NavBar = () => (
  <div className={styles.background}>
    <nav>
      <span className={styles.navSpan}>
        <ul className={styles.navUl}>
          <li
            className={styles.navLi}
            itemProp="https://schema.org/Organization"
          >
            <img
              itemProp="logo"
              className={styles.logo}
              src="/logo.svg"
              alt="Variable Font Course Logo"
              title="Variable Font Course Logo"
            />
            <meta itemProp="url" content="https://www.variablefontcourse.com" />
          </li>
          <li className={styles.navLiCenter}>{/* " " */}</li>
          <li className={styles.navLiEnd}>
            <a href="/checkout/?add-to-cart=101" title="Join the course">
              <span
                className={classNames(styles.joinButton, styles.spanButton)}
              >
                JOIN NOW
              </span>
            </a>
            <a href="/wp-login.php" title="Sign in">
              <span
                className={classNames(styles.signinButton, styles.spanButton)}
              >
                Sign in
              </span>
            </a>
          </li>
        </ul>
      </span>
    </nav>
  </div>
);

export default NavBar;
