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
import { selectTaskRunnerCard, selectFrontEndCard, selectRouterCard, selectAuthCard, selectNoChoiceCard } from '../../actions/actions';

// Utils
import data from '../../utils/cardData';

function selectAndMap(state) {
  const {
    selectedTaskRunner,
    selectedFrontEnd,
    selectedRouter,
    selectedAuth
  } = state;
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
    const {
      dispatch,
      selectedTaskRunner,
      selectedFrontEnd,
      selectedRouter,
      selectedAuth
    } = this.props;

    const selectFunc = () => {
      switch (this.props.type) {
        case 'taskrunner':
          return selectTaskRunnerCard;
        case 'frontend':
          return selectFrontEndCard;
        case 'router':
          return selectRouterCard;
        case 'auth':
          return selectAuthCard;
      }
    };

    const reducerType = ((type) => {
      switch (this.props.type) {
        case 'taskrunner':
          return selectedTaskRunner;
        case 'frontend':
          return selectedFrontEnd;
        case 'router':
          return selectedRouter;
        case 'auth':
          return selectedAuth;
      }
    })(this.props.type);

    return (
      <div className={`${styles.CardRow}`}>
        <InfoIcon />
        <div className={`${styles.LanguageCardContainer}`}>
          <NoChoiceCard selectedCards={reducerType} selectNoChoiceCard={ () => {dispatch(selectNoChoiceCard(this.props.type))} } />
          {data[this.props.type].tools.map(function (item, id) {
            return (
              <LanguageCard
                pictureName={item}
                key={id}
                isSelected={reducerType[item] ? true : false}
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