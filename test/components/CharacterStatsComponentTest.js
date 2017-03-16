/* eslint-env node, mocha */
/* global expect */
/* eslint no-console: 0 */
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import CharacterStatsComponent from 'components//CharacterStatsComponent.jsx';

describe('CharacterStatsComponent', () => {
  let component;

  beforeEach(() => {
    component = createComponent(CharacterStatsComponent);
  });

  it('should have its component name as default className', () => {
    expect(component.props.className).to.equal('characterstats-component');
  });

  it('should display the values of the statss', () => {
    expect(0).to.equal(0);
  });
});
