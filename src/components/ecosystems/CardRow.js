//from Takeahike

// Globals
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import LanguageCard from '../organisms/LanguageCard';
import InfoIcon from '../atoms/InfoIcon';
import NoChoiceCard from '../organisms/NoChoiceCard';

// Styles
import localStyles from './styles/CardRow.scss';
const styles = Object.assign({}, localStyles);

// Redux
import { selectTaskRunnerCard } from '../../actions/actions';

// Utils
import data from '../../utils/cardData';

function selectAndMap(state) {
  const { selectedTaskRunner } = state;
  return { selectedTaskRunner };
}

@connect(selectAndMap)
export default class CardRow extends Component {
  render() {
    const { dispatch } = this.props;
    return (
      <div className={`${styles.CardRow}`} onClick={function () {
      dispatch(selectTaskRunnerCard('bufm'))
      }}>
        <InfoIcon />
        <div className={`${styles.LanguageCardContainer}`}>
          <NoChoiceCard />
          {data[this.props.type].map(function(thing, id) {
            return <LanguageCard thing={thing} key={id}/>
          })}
        </div>
      </div>
    );
  }
}

CardRow.propTypes = {
  type: React.PropTypes.string.isRequired
};