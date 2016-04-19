// from CommandLine

// Globals
import React, { Component } from 'react';

// Styles
import styles from './styles/CommandText.scss';

export default class CommandText extends Component {
  render() {
    const input = this.props.text ? "yo trails:trailpack " + this.props.text : ""
    return (
      <div className={`${styles.CommandText}`}>
        {input}
      </div>
    );
  }
}
