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

function mapPropsToState(state) {
  return {
    selectedTaskRunner: state.selectedTaskRunner,
    selectedFrontEnd: state.selectedFrontEnd,
    selectedRouter: state.selectedRouter,
    selectedAuth: state.selectedAuth
  };
}

export default class Header extends Component {
  render() {
    const {
      selectedTaskRunner,
      selectedFrontEnd,
      selectedRouter,
      selectedAuth
    } = this.props,
      tools = Object.assign({}, selectedTaskRunner, selectedFrontEnd, selectedRouter, selectedAuth);

    return (
      <div className={`${styles.flexContainer}`}>
        <Title />
        <div className={`${styles.shadow}`}></div>
        <CommandLine />
      </div>
    );
  }
}

export default connect(mapPropsToState)(Header);