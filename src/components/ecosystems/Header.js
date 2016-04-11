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
    text: state.async.text
  };
}

export default class Header extends Component {
  render() {
    const { text } = this.props;

    return (
      <div className={`${styles.flexContainer}`}>
        <Title />
        <CommandLine text={text} />
      </div>
    );
  }
}

export default connect(mapPropsToState)(Header);
