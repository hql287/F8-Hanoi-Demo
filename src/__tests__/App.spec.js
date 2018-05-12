// Libs
import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

// Component to test
import App from '../App';
import Background from '../containers/Background';
import Foreground from '../containers/Foreground';
import Controls from '../components/Controls';

describe('Renders the Background correctly to the DOM', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should render a Background component', () => {
    expect(wrapper.find(Background)).toHaveLength(1);
    expect(wrapper.find(Background)).not.toHaveLength(2);
  });

  it('should render a Foreground component', () => {
    expect(wrapper.find(Foreground)).toHaveLength(1);
    expect(wrapper.find(Foreground)).not.toHaveLength(2);
  });

  it('should render a Controls component', () => {
    expect(wrapper.find(Controls)).toHaveLength(1);
    expect(wrapper.find(Controls)).not.toHaveLength(2);
  });

  // Snapshot Testing
  it('should match snapShot', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
