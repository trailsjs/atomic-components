//from CardRow

// Globals
import React, { Component } from 'react';

// Components
import CardName from '../atoms/CardName';

// Styles
import localStyles from './styles/LanguageCard.scss';
const styles = Object.assign({}, localStyles);

export default class LanguageCard extends Component {

  render() {
    return (
      <div className={`${styles.LanguageCard} ${this.props.isSelected ? styles.selected : null}`} onClick={this.props.selectCard}>
        <div className={`${styles.mask}`}></div>
        <div>
          <img className={`${styles.image}`} src={!this.props.isSelected ? require(`src/assets/images/logos/${this.props.pictureName}.svg`) : require(`src/assets/images/authpack.svg`)}></img>
        </div>
        <CardName isSelected={this.props.isSelected} cardName={this.props.pictureName}/>
      </div>
    );
  }
}

LanguageCard.propTypes = {
  pictureName: React.PropTypes.string.isRequired,
  selectCard: React.PropTypes.func.isRequired,
  isSelected: React.PropTypes.bool.isRequired
};