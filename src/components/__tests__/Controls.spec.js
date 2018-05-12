// Libs
import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

// Component to test
import Controls, {Dashboard, Button} from '../Controls';

// Mock
const moveLeft     = jest.fn();
const moveRight    = jest.fn();
const jump         = jest.fn();
const toggleLabels = jest.fn();

// Setup
describe('Renders the Controls component correctly', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Controls
        jump={jump}
        moveLeft={moveLeft}
        moveRight={moveRight}
        toggleLabels={toggleLabels}
      />,
    );
  });

  it('should render a Dashboard component', () => {
    expect(wrapper.find(Dashboard)).toHaveLength(1);
    expect(wrapper.find(Dashboard)).not.toHaveLength(2);
  });

  it('should render 4 Buttons', () => {
    expect(wrapper.find(Button)).toHaveLength(4);
    expect(wrapper.find(Button)).not.toHaveLength(3);
  });


  // Test style Rules
  it('should render components with correct styles', () => {

  });

  // Snapshot Testing
  it('matches snapshot', () => {
    const tree = renderer
      .create(
        <Controls
          jump={jump}
          moveLeft={moveLeft}
          moveRight={moveRight}
          toggleLabels={toggleLabels}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('it should handle clicks correctly', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Controls
        jump={jump}
        moveLeft={moveLeft}
        moveRight={moveRight}
        toggleLabels={toggleLabels}
      />,
    );
  });

  it('handle moveLeft correctly', () => {
    const moveLeftBtn = wrapper.find(Button).first();
    moveLeftBtn.simulate('click');
    expect(moveLeft).toHaveBeenCalled();
    expect(moveLeft).toHaveBeenCalledTimes(1);
  });

  it('handle moveLeft correctly', () => {
    const moveRightBtn = wrapper.find(Button).at(2);
    moveRightBtn.simulate('click');
    expect(moveRight).toHaveBeenCalled();
    expect(moveRight).toHaveBeenCalledTimes(1);
  });

  it('handle Jump correctly', () => {
    const jumpBtn = wrapper.find(Button).at(1);
    jumpBtn.simulate('click');
    expect(jump).toHaveBeenCalled();
    expect(jump).toHaveBeenCalledTimes(1);
  });

  it('handle toggleLabels correctly', () => {
    const toggleLabelsBtn = wrapper.find(Button).last();
    toggleLabelsBtn.simulate('click');
    expect(toggleLabels).toHaveBeenCalled();
    expect(toggleLabels).toHaveBeenCalledTimes(1);
  });
})
