import React, { Component } from 'react';
import 'src/assets/styles/globals.scss';
import localStyles from './styles/TrailsMix.scss';

import Header from '../ecosystems/Header';
import Takeahike from '../ecosystems/Takeahike';

export default class TrailsMix extends Component {
  render() {
    return (
      <div className={`${localStyles.flexContainer} ${localStyles.containerStyles}`}>
        <Header />
        <Takeahike />
      </div>
    );
  }
}