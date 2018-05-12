// React Libraries
import path from 'path';
import React, {Component} from 'react';
import styled from 'styled-components';

export const Dashboard = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 10px;
  padding: 20px;
  button {
    margin: 0 5px;
  }
`;

export const Button = styled.button`

`;

class Controls extends Component {
  render() {
    const { jump, moveLeft, moveRight, toggleLabels } = this.props;
    return (
      <Dashboard>
        <Button onClick={moveLeft}>← Move Left</Button>
        <Button onClick={jump}>↑ Jump</Button>
        <Button onClick={moveRight}>Move Right →</Button>
        <Button onClick={toggleLabels}>Toogle Labels</Button>
      </Dashboard>
    );
  }
}

export default Controls;

