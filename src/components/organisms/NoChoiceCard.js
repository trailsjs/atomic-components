//from CardRow

// Globals
import React, { Component } from 'react';

// Styles
import localStyles from './styles/NoChoiceCard.scss';
const styles = Object.assign({}, localStyles);

export default class NoChoiceCard extends Component {
  render() {
    return (
      <div className={`${styles.NoChoiceCard} ${styles.selected}`}>
        <i className={`fa fa-times-circle fa-5x`}></i>
      </div>
    );
  }
}