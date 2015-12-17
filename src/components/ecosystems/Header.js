// from TrailsMix

// Globals
import React, { Component } from 'react';

// Components
import CommandLine from '../molecules/CommandLine';
import Title from '../molecules/Title';

// Styles
import styles from './styles/Header.scss';

export default class Header extends Component {
  render() {
    return (
      <div>
        <Title />
        <CommandLine />
      </div>
    );
  }
}