//from Takeahike

// Globals
import React, { Component } from 'react';

// Components
import LanguageCard from '../organisms/LanguageCard';
import InfoIcon from '../atoms/InfoIcon';
import NoChoiceCard from '../organisms/NoChoiceCard';

// Styles
import localStyles from './styles/CardRow.scss';
const styles = Object.assign({}, localStyles);

export default class CardRow extends Component {
  render() {
    return (
      <div className={`${styles.CardRow}`}>
        <InfoIcon />
        <div className={`${styles.LanguageCardContainer}`}>
          <NoChoiceCard />
          <LanguageCard />
          <LanguageCard />
          <LanguageCard />
          <LanguageCard />
          <LanguageCard />
        </div>
      </div>
    );
  }
}

CardRow.propTypes = {
  type: React.PropTypes.string.isRequired
};