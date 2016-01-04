//from LanguageCard

// Globals
import React, { Component } from 'react';

// Styles
import localStyles from './styles/CardName.scss';
const styles = Object.assign({}, localStyles);

export default class CardName extends Component {
  render() {
    return (
      <div className={`${styles.CardName} ${this.props.isSelected ? styles.selected : null}`}>
        {this.props.cardName}
      </div>
    );
  }
}

CardName.propTypes = {
  cardName: React.PropTypes.string.isRequired,
  isSelected: React.PropTypes.bool.isRequired
};