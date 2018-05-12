// React Libraries
import React, {Fragment, Component} from 'react';
import styled, {injectGlobal} from 'styled-components';

import Controls from './components/Controls';
import Foreground from './containers/Foreground';
import Background from './containers/Background';

injectGlobal`
  body {
    margin: 0;
    background: #fbfbfb;
    height: 100vh;
    width: 100vw;
  }
  #app {
    height: 100vh;
    width: 100vw;
  }
  * {
    box-sizing: border-box;
  }
`;

const stepDistance = 10;
const borderHeight = 10;
const groundHeight = 130;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.jump = this.jump.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
    this.moveRight = this.moveRight.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.toggleLabels = this.toggleLabels.bind(this);
    this.state = {
      pos: {
        x: -300,
        y: 0,
      },
      showLabels: true,
    }
  }

  handleKeyDown(event) {
    const key = event.keyCode;
    // console.log('key: ', key);
    if (key === 37) this.moveLeft();
    if (key === 39) this.moveRight();
    return;
  }

  jump() {
    console.log('Jump');
  }

  toggleLabels() {
    this.setState({
      showLabels: !this.state.showLabels
    });
  }

  moveLeft() {
    this.setState({
      pos: Object.assign({}, this.state.pos, {
        x: this.state.pos.x - stepDistance,
      })
    })
  }

  moveRight() {
    this.setState({
      pos: Object.assign({}, this.state.pos, {
        x: this.state.pos.x + stepDistance,
      })
    })
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown, false);
  }

  componentWillUnMount() {
    document.removeEventListener('keydown', this.handleKeyDown, false);
  }

  render() {
    return (
      <Fragment>
        <Background
          showLabels={this.state.showLabels}
          groundHeight={groundHeight}
          borderheight={borderHeight} />
        <Foreground
          showLabels={this.state.showLabels}
          groundHeight={groundHeight}
          borderHeight={borderHeight}
          pos={this.state.pos}
        />
        <Controls
          jump={this.jump}
          moveLeft={this.moveLeft}
          moveRight={this.moveRight}
          toggleLabels={this.toggleLabels}
        />
      </Fragment>
    );
  }
}
