//from Takeahike
import React, { Component } from 'react';
import styles from './styles/LanguageCard.scss';

export default class LanguageCard extends Component {
  render() {
    return (
      <div className={`${styles.card}`}>
        <span className={`${styles.devicons}`}></span>
      </div>
    );
  }
}