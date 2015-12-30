//from App

// Globals
import React, { Component } from 'react';

// Styles
import styles from './styles/Takeahike.scss';
import LanguageCard from '../organisms/LanguageCard';
import InfoIcon from '../atoms/InfoIcon';
import CardRow from '../ecosystems/CardRow';

export default class Takeahike extends Component {
  render() {
    return (
      <div className={`${styles.flexContainer}`}>
        <CardRow />
        <InfoIcon />
        <LanguageCard />
        <LanguageCard />
      </div>
    );
  }
}