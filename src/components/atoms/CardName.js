//from Takeahike

// Globals
import React, { Component } from 'react';

// Styles
import localStyles from './styles/CardName.scss';
const styles = Object.assign({}, localStyles);

export default class CardName extends Component {
  render() {
    return (
      <div className={`${styles.CardName} ${this.props.isSelected ? styles.selected : null}`}>
        Card Name
      </div>
    );
  }
}

CardName.propTypes = {
  isSelected: React.PropTypes.bool.isRequired
};