// Libs
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

// Component to test
import Foreground, { Layout } from '../Foreground';
import Character from '../../components/Character';

// Setup
const pos = { x: 0, y: 0 };
const groundHeight = 160;
const borderHeight = 10;

describe('Renders the Background correctly to the DOM', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Foreground
        pos={pos}
        showLabels={false}
        groundHeight={groundHeight}
        borderHeight={borderHeight}
      />
    );
  })

  it('should render a Layout component', () => {
    expect(wrapper.find(Layout)).toHaveLength(1);
    expect(wrapper.find(Layout)).not.toHaveLength(2);
  });

  it('should render a Character component', () => {
    expect(wrapper.find(Character)).toHaveLength(1);
    expect(wrapper.find(Character)).not.toHaveLength(2);
  });

  // Test style rules
  it('should render the components with correct style', () => {

  });

  // Snapshot Testing
  it('should match snapShot', () => {
    const tree = renderer
      .create(
        <Foreground
          showLabels={false}
          pos={pos}
          groundHeight={groundHeight}
          borderHeight={borderHeight}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
})
