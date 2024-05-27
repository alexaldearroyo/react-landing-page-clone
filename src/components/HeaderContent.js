// import classNames from 'classnames';
import React from 'react';
import styles from '../styles/styles.module.scss';

const HeaderContent = () => {
  return (
    <div className={styles.headerContent}>
      <div className={styles.displayVariable}>
        <div
          className="variable"
          style={{
            fontVariationSettings: '"wdth" 397.017',
            fontFamily: 'var(--your-variable-font), sans-serif',
          }}
        >
          Your own <br />
          variable <br />
          font
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;
