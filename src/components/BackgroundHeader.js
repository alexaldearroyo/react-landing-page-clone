// src/components/BackgroundHeader.js

import classNames from 'classnames';
import React from 'react';
import styles from '../styles/styles.module.scss';

const BackgroundHeader = ({ children }) => {
  return (
    <div className={classNames(styles.backgroundHeader, styles.background)}>
      {children}
    </div>
  );
};

export default BackgroundHeader;
