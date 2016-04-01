//from Takeahike

// Globals
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import LanguageCard from '../organisms/LanguageCard';
import NoChoiceCard from '../organisms/NoChoiceCard';

// Styles
import localStyles from './styles/CardRow.scss';
const styles = Object.assign({}, localStyles);

// Redux
import { selectTaskRunnerCard, selectFrontEndCard, selectRouterCard, selectAuthCard, selectNoChoiceCard } from '../../actions/actions';

// Utils
import data from '../../utils/cardData';

// Assets
import sign from '../../assets/images/sign.svg';

function mapPropsToState(state) {
  return {
    selectedTaskRunner: state.selectedTaskRunner,
    selectedFrontEnd: state.selectedFrontEnd,
    selectedRouter: state.selectedRouter,
    selectedAuth: state.selectedAuth
  };
}

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
      <div>
        <div className={`${styles.CardRow}`}>
          <div className={`${styles.LanguageCardContainer}`}>
            <img className={`${styles.sign}`} src={sign} />
            <NoChoiceCard selectedCards={reducerType} selectNoChoiceCard={ () => {dispatch(selectNoChoiceCard(this.props.type))} } />
            {data[this.props.type].tools.map(function(item, id) {
              return (
                <LanguageCard
                  pictureName={item}
                  key={id}
                  isSelected={reducerType[item] ? true : false}
                  selectCard={() => {dispatch(selectFunc()(item))}}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

CardRow.propTypes = {
  type: React.PropTypes.string.isRequired
};

export default connect(mapPropsToState)(CardRow);