//from App

// Globals
import React, { Component } from 'react';

// Components
import CardRow from '../ecosystems/CardRow';

// Styles
import styles from './styles/Takeahike.scss';

// Assets
import coffeecup from '../../assets/images/coffeecup.svg';

export default class Takeahike extends Component {
  render() {
    return (
      <div className={`${styles.wrapper}`}>
          <div className={`${styles.Takeahike}`}>
            <div className={`${styles.flexLeft}`}></div>
            <div className={`${styles.flexMiddle}`}>
                <img src={coffeecup} className={`${styles.coffeecup}`}/>
                <div className={`${styles.outercabinet}`}>
                    <div className={`${styles.innercabinet}`}>
                        <CardRow type="router"/>
                        <CardRow type="taskrunner" />
                        <CardRow type="frontend"/>
                        <CardRow type="auth"/>
                    </div>
                </div>
                <div className={`${styles.bottomtray}`}></div>
            </div>
            <div className={`${styles.flexRight}`}></div>
          </div>
          <div className={`${styles.floor}`}></div>
      </div>
    );
  }
}