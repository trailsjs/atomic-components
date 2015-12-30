// from CommandLine

// Globals
import React, { Component } from 'react';

// Styles
import styles from './styles/HelpIcon.scss';

export default class HelpIcon extends Component {
  render() {
    return (
      <div>
        <i className={`fa fa-question-circle fa-lg ${styles.HelpIcon}`}></i>
      </div>
    );
  }
}