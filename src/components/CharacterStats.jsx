require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class characterStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {stats: props.characterStats};
  }

  render() {
    return (
      <div className="stats">
        <div className="statTitle"><b>Stats</b></div>
        <ul>
          <li>Strength: {this.state.stats.get('str')}</li>
          <li>Wisdom: {this.state.stats.get('wis')}</li>
          <li>Constitution: {this.state.stats.get('con')}</li>
          <li>Dexterity: {this.state.stats.get('dex')}</li>
          <li>Charisma: {this.state.stats.get('cha')}</li>
          <li>Intelligence: {this.state.stats.get('int')}</li>
        </ul>
      </div>
    );
  }
}

characterStats.defaultProps = {};

export default characterStats;