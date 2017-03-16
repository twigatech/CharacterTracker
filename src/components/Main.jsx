require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Immuttable from 'immutable';
import Stats from './CharacterStatsComponent.jsx';

let charStats = new Immuttable.Map({
  wis: 15,
  str: 18,
  cha: 19,
  dex: 10,
  con: 14,
  int: 16
});

class characterSheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {stats: charStats};
  }

  bonus = () => {
    this.setState({
      stats: this.state.stats.set('wis', 19)
    });
  }

  render() {
    const stats = this.state.stats;
    return <div onClick={this.bonus}> <Stats characterStats={stats} /></div>;
  }
}

characterSheet.defaultProps = {
};

export default characterSheet;
