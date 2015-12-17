// from TrailsMix

// Globals
import React, { Component } from 'react';

// Components
import CommandLine from '../molecules/CommandLine';
import Title from '../molecules/Title';

// Styles
import localStyles from './styles/Header.scss';
const styles = Object.assign({}, localStyles);

export default class Header extends Component {
  render() {
    return (
      <div className={`${styles.flexContainer}`}>
        <Title />
        <CommandLine />
      </div>
    );
  }
}