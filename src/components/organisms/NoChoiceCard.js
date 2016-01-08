//from CardRow

// Globals
import React, { Component } from 'react';

// Styles
import localStyles from './styles/NoChoiceCard.scss';
const styles = Object.assign({}, localStyles);

export default class NoChoiceCard extends Component {
  render() {
    console.log(this.props.selectedCards);
    return (
      <div className={`${styles.NoChoiceCard} ${Object.keys(this.props.selectedCards).length === 0 ? styles.selected : null}`}>
        <i className={`fa fa-times-circle fa-5x`}></i>
      </div>
    );
  }
}

NoChoiceCard.propTypes = {
  selectedCards: React.PropTypes.object.isRequired
};