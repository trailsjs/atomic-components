// from Header

// Globals
import React, { Component } from 'react';

// Styles
import localStyles from './styles/Title.scss';
const styles = Object.assign({}, localStyles);

export default class Title extends Component {
  render() {
    return (
      <div className="styles.flexContainer">
        <img src={require('src/assets/images/logo.svg')} className={`${styles.logo}`} />
        <div className={`${styles.subtitle} ${styles.sharedTitle} ${styles.insetText}`}>
          <span>Blaze Your Own Trails</span>
        </div>
      </div>
    );
  }
}