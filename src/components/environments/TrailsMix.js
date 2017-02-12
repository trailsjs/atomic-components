// from Index

// Globals
import React, { Component } from 'react';

// Components
import Header from '../ecosystems/Header';
import Takeahike from '../ecosystems/Takeahike';

// Styles
import 'src/assets/styles/globals.scss';
import localStyles from './styles/TrailsMix.scss';

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
