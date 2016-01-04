//from CardRow

// Globals
import React, { Component } from 'react';

// Components
import CardName from '../atoms/CardName'

// Styles
import localStyles from './styles/LanguageCard.scss';
const styles = Object.assign({}, localStyles);

export default class LanguageCard extends Component {

  render() {
    return (
      <div className={`${styles.LanguageCard}`} onClick={this.props.selectCard}>
        <div>
          <img className={`${styles.image}`} src={require(`src/assets/images/logos/${this.props.pictureName}.svg`)}></img>
        </div>
        <CardName isSelected={false} cardName={this.props.pictureName}/>
      </div>
    );
  }
}

LanguageCard.propTypes = {
  pictureName: React.PropTypes.string.isRequired,
  selectCard: React.PropTypes.func.isRequired
};