//from Takeahike
import React, { Component } from 'react';
import localStyles from './styles/LanguageCard.scss';

const styles = Object.assign({}, localStyles);

export default class LanguageCard extends Component {
  render() {
    return (
      <div className={`${styles.card}`}>
        <span className={`${styles.devicons}`}></span>
      </div>
    );
  }
}