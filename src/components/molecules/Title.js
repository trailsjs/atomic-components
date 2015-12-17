// from Header

// Globals
import React, { Component } from 'react';

// Styles
import localStyles from './styles/Title.scss';
const styles = Object.assign({}, localStyles);

export default class Title extends Component {
  render() {
    return (
      <div className="styles.flexContainer">
        <div>
          I'm a tree emoji
        </div>
        <div>
          I'm the big word
        </div>
        <div>
          I'm the little word
        </div>
      </div>
    );
  }
}