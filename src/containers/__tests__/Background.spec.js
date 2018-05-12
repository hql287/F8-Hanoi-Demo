// Libs
import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

// Component to test
import Label from '../../components/Label';
import Background, { Layout, Sky, Ground } from '../Background';

// Setup
const pos = { x: 0, y: 0 };
const groundHeight = 160;
const borderHeight = 10;

describe('Renders the Background correctly to the DOM', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Background
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

  it('should render a Sky component', () => {
    expect(wrapper.find(Sky)).toHaveLength(1);
    expect(wrapper.find(Sky)).not.toHaveLength(2);
  });

  it('should render a Ground component', () => {
    expect(wrapper.find(Ground)).toHaveLength(1);
    expect(wrapper.find(Ground)).not.toHaveLength(2);
  });

  it('should render the components with correct props', () => {
    expect(wrapper.find(Ground).get(0).props.showLabels).toEqual(false);
    expect(wrapper.find(Ground).get(0).props.groundHeight).toEqual(groundHeight);
    expect(wrapper.find(Ground).get(0).props.borderHeight).toEqual(borderHeight);
  })

  it('should hide/show labels correctly', () => {
    expect(wrapper.find(Label)).toHaveLength(0);
    const newWarpper = shallow(
      <Background
        showLabels={true}
        groundHeight={groundHeight}
        borderHeight={borderHeight}
      />
    );
    expect(newWarpper.find(Label)).toHaveLength(2);
  });

  // Test style rules
  it('should render the components with correct style', () => {

  });

  // Snapshot Testing
  it('should match snapShot', () => {
    const tree = renderer
      .create(
        <Background
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
