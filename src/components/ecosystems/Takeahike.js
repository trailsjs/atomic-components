//from App

// Globals
import React, { Component } from 'react';

// Components
import CardRow from '../ecosystems/CardRow';

// Styles
import styles from './styles/Takeahike.scss';

export default class Takeahike extends Component {
  render() {
    return (
      <div className={`${styles.Takeahike}`}>
        <div className={`${styles.flexLeft}`}></div>
        <div className={`${styles.flexMiddle}`}>
          <CardRow />
          <CardRow />
          <CardRow />
          <CardRow />
        </div>
        <div className={`${styles.flexRight}`}></div>
      </div>
    );
  }
}