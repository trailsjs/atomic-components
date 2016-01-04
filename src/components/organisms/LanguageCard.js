//from CardRow

// Globals
import React, { Component } from 'react';

// Components
import CardName from '../atoms/CardName'

// Styles
import localStyles from './styles/LanguageCard.scss';
const styles = Object.assign({}, localStyles);

export default class LanguageCard extends Component {

  handleClick(e) {
    e.preventDefault();
    console.log(this);
  }

  render() {
    return (
      <div className={`${styles.LanguageCard}`} onClick={this.handleClick}>
        <div>
          <img className={`${styles.image}`} src={require(`src/assets/images/logos/${this.props.thing}.svg`)}></img>
        </div>
        <CardName isSelected={false}/>
      </div>
    );
  }
}

LanguageCard.propTypes = {
  thing: React.PropTypes.string.isRequired
};