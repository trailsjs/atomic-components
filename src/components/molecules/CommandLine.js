// from Header

// Globals
import React, { Component } from 'react';

// Components
import BashDollar from '../atoms/BashDollar';
import HelpIcon from '../atoms/HelpIcon';
import CommandText from '../atoms/CommandText';

// Styles
import styles from './styles/CommandLine.scss';

export default class CommandLine extends Component {
  render() {
    return (
      <div className={`${styles.flexContainer} ${styles.CommandLine}`}>
        <div className={`${styles.flexContainer}`}>
          <BashDollar />
          <CommandText text={this.props.text} />
        </div>
        <div className={`${styles.flexContainer}`}>
          <HelpIcon />
        </div>
      </div>
    );
  }
}
