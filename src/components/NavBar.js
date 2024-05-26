import React from 'react';

// import logo from '../../public/logo.svg';

const NavBar = () => (
  <nav>
    <span>
      <ul>
        <li itemProp="https://schema.org/Organization">
          <img
            itemProp="logo"
            className="logo"
            src="/logo.svg"
            alt="Variable Font Course Logo"
            title="Variable Font Course Logo"
          />
          <meta itemProp="url" content="https://www.variablefontcourse.com" />
        </li>
        {/* <li className="navLiCenter"></li> */}
        <li>
          <a href="/checkout/?add-to-cart=101" title="Join the course">
            <span className="signin">JOIN NOW</span>
          </a>
          <a href="/wp-login.php" title="Sign in">
            <span className="signin">Sign in</span>
          </a>
        </li>
      </ul>
    </span>
  </nav>
);

export default NavBar;
