import React, { Component } from 'react';
import styles from './styles/App.scss';

import Header from '../ecosystems/Header';
import Takeahike from '../ecosystems/Takeahike';

export default class App extends Component {
  render() {
    return (
      <div className={styles.flexContainer}>
        <Header />
        <Takeahike />
      </div>
    );
  }
}