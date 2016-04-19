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

// Utils
import { parseSelections } from '../../utils/parsingService';

function mapPropsToState(state) {
  return {
    selectedTaskRunner: state.selectedTaskRunner,
    selectedFrontEnd: state.selectedFrontEnd,
    selectedRouter: state.selectedRouter,
    selectedAuth: state.selectedAuth,
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
    } = this.props;

    const allSelections = {
      taskRunner: selectedTaskRunner,
      frontEnd: selectedFrontEnd,
      router: selectedRouter,
      auth: selectedAuth
    };

    const commandLine = parseSelections(allSelections);
    console.log('commandLine', commandLine);

    return (
      <div className={`${styles.flexContainer}`}>
        <Title />
        <CommandLine text={commandLine} />
      </div>
    );
  }
}

export default connect(mapPropsToState)(Header);
