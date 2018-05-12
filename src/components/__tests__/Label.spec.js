// Libs
import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

// Component to test
import Label from '../Label';

const sampleText = 'Welcome to F8 Hanoi!';
const sampleText2 = 'Hello, World';

describe('Renders correctly to the DOM', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Label text={sampleText} />);
  });

  it('should render one <p> element', () => {
    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.find('p')).not.toHaveLength(2);
  });

  it('should render the components with correct props', () => {
    expect(wrapper.find('p').text()).toEqual(sampleText);
    expect(wrapper.find('p').text()).not.toEqual(sampleText2);
  });

  // Test style Rules
  it('should render component with correct style', () => {

  });

  // Snapshot Testing
  it('matches snapshot', () => {
    const tree = renderer.create(<Label text={sampleText} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
