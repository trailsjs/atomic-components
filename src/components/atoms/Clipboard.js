// from CommandLine

// Globals
import React, { Component } from 'react';

// Styles
import styles from './styles/Clipboard.scss';

export default class Clipboard extends Component {
  render() {
    return (
      <div>
        <i className={`fa fa-clipboard ${styles.Clipboard}`}></i>
      </div>
    );
  }
}