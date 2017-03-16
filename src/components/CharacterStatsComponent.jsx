'use strict';

import React from 'react';
import Immutable from 'immutable';

require('styles//CharacterStats.css');

class CharacterStatsComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="stats">
        <div className="statTitle"><b>Stats</b></div>
        <ul>
          <li>Strength: {this.props.characterStats.get('str')}</li>
          <li>Wisdom: {this.props.characterStats.get('wis')}</li>
          <li>Constitution: {this.props.characterStats.get('con')}</li>
          <li>Dexterity: {this.props.characterStats.get('dex')}</li>
          <li>Charisma: {this.props.characterStats.get('cha')}</li>
          <li>Intelligence: {this.props.characterStats.get('int')}</li>
        </ul>
      </div>
    );
  }
}

CharacterStatsComponent.displayName = 'CharacterStatsComponent';

CharacterStatsComponent.defaultProps = {
  characterStats: new Immutable.Map({
    wis: 0,
    str: 0,
    cha: 0,
    dex: 0,
    con: 0,
    int: 0})
};

export default CharacterStatsComponent;
