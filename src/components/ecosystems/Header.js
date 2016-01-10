// from TrailsMix

// Globals
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import CommandLine from '../molecules/CommandLine';
import Title from '../molecules/Title';

// Styles
import localStyles from './styles/Header.scss';
const styles = Object.assign({}, localStyles);

function selectAndMap(state) {
  const {
    selectedTaskRunner,
    selectedFrontEnd,
    selectedRouter,
    selectedAuth
    } = state;
  return {
    selectedTaskRunner,
    selectedFrontEnd,
    selectedRouter,
    selectedAuth
  };
}

export default class Header extends Component {
  render() {
    const {
      dispatch,
      selectedTaskRunner,
      selectedFrontEnd,
      selectedRouter,
      selectedAuth
    } = this.props,
      tools = Object.assign({}, selectedTaskRunner, selectedFrontEnd, selectedRouter, selectedAuth);

    return (
      <div className={`${styles.flexContainer}`}>
        <Title />
        <CommandLine />
      </div>
    );
  }
}

export default connect(selectAndMap)(Header);