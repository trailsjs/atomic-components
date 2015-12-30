//from Takeahike

// Globals
import React, { Component } from 'react';

// Styles
import localStyles from './styles/LanguageCard.scss';
const styles = Object.assign({}, localStyles);

export default class LanguageCard extends Component {
  render() {
    return (
      <div className={`${styles.LanguageCard}`}>
        <img className={`${styles.image}`} src={require('src/assets/images/logos/bower.svg')}></img>
      </div>
    );
  }
}