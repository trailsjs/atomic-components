//from Takeahike

// Globals
import React, { Component } from 'react';

// Styles
import localStyles from './styles/InfoIcon.scss';
const styles = Object.assign({}, localStyles);

export default class InfoIcon extends Component {
  render() {
    return (
      <div className={`${styles.InfoIcon}`}>
        <i className="fa fa-info-circle fa-3x"></i>
      </div>
    );
  }
}