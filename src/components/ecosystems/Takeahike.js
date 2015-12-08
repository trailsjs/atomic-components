//from App
import React, { Component } from 'react';
import styles from './styles/Takeahike.scss';

import LanguageCard from '../organisms/LanguageCard';

export default class Takeahike extends Component {
  render() {
    return (
      <div>
        <LanguageCard />
        <LanguageCard />
      </div>
    );
  }
}