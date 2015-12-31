//from Takeahike

// Globals
import React, { Component } from 'react';

// Components
import CardName from '../atoms/CardName'

// Styles
import localStyles from './styles/LanguageCard.scss';
const styles = Object.assign({}, localStyles);

export default class LanguageCard extends Component {
  render() {
    return (
      <div className={`${styles.LanguageCard}`}>
        <div>
          <img className={`${styles.image}`} src={require('src/assets/images/logos/grunt.svg')}></img>
        </div>
        <CardName />
      </div>
    );
  }
}