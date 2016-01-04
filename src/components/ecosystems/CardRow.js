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
  const {
    selectedTaskRunner,
    selectedFrontEnd,
    selectedRouter,
    selectedAuth } = state;
  return {
    selectedTaskRunner,
    selectedFrontEnd,
    selectedRouter,
    selectedAuth
  };
}

@connect(selectAndMap)
export default class CardRow extends Component {
  render() {
    const { dispatch } = this.props;
    const selectFunc = () => {
      switch (this.props.type) {
        case 'taskrunner':
          return selectTaskRunnerCard;
        case 'frontend':
          return selectedFrontEnd;
        case 'router':
          return selectedRouter;
        case 'auth':
          return selectedAuth;
      }
    };

    return (
      <div className={`${styles.CardRow}`}>
        <InfoIcon />
        <div className={`${styles.LanguageCardContainer}`}>
          <NoChoiceCard />
          {data[this.props.type].map(function (item, id) {
            return (
              <LanguageCard
                pictureName={item}
                key={id}
                selectCard={() => {dispatch(selectFunc()(item))}}
              />
            )
          })}
        </div>
      </div>
    );
  }
}

CardRow.propTypes = {
  type: React.PropTypes.string.isRequired
};