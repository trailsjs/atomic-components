// from Header

// Globals
import React, { Component } from 'react';

// Components
import BashDollar from '../atoms/BashDollar';
import Clipboard from '../atoms/Clipboard';
import CommandText from '../atoms/CommandText';

// Styles
import styles from './styles/CommandLine.scss';

export default class CommandLine extends Component {
  render() {
    return (
        <div className={`${styles.wrapper}`}>
            <div className={`${styles.shadow}`}></div>
            <div className={`${styles.flexContainer} ${styles.CommandLine}`}>
                <div className={`${styles.flexContainer}`}>
                    <BashDollar />
                    <CommandText />
                </div>
                <div className={`${styles.flexContainer}`}>
                    <Clipboard />
                </div>
            </div>
        </div>
    );
  }
}