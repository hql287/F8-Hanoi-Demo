// Libs
import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

// Component to test
import Character, {Layout, Mario, Speech} from '../Character';

const groundHeight = 160;
const pos = {x: 0, y: 0};

describe('Renders the Character correctly to the DOM', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Character
        pos={pos}
        groundHeight={groundHeight}
      />
    );
  });

  it('should render the Layout component', () => {
    expect(wrapper.find(Layout)).toHaveLength(1);
    expect(wrapper.find(Layout)).not.toHaveLength(2);
  });

  it('should render Mario', () => {
    expect(wrapper.find(Mario)).toHaveLength(1);
    expect(wrapper.find(Mario)).not.toHaveLength(2);
  });

  it('should render the Speech bubble', () => {
    expect(wrapper.find(Speech)).toHaveLength(1);
    expect(wrapper.find(Speech)).not.toHaveLength(2);
  });

  // Test style Rules
  it('should render components with correct style', () => {

  });

  // Snapshot Testing
  it('matches snapshot', () => {
    const tree = renderer
      .create(
        <Character
          pos={pos}
          groundHeight={groundHeight}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
