// React Libraries
import path from 'path';
import React, {Component} from 'react';

// Svg paths
const CharacterPath = path.resolve(__dirname, './static/imgs/Mario.svg');
const SpeechPath = path.resolve(__dirname, './static/imgs/speech-bubble.gif');

import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
  ${props => `
    margin-left: ${props.pos.x}px;
  `};
`;

export const Speech = styled.img`
  margin-right: -300px;
`;

export const Mario = styled.img`
  display: block;
  ${props =>
    props.size &&
    `
    max-width: ${props.size}px;
  `};
  ${props =>
    props.isJumping
      ? `
      margin-bottom: ${props.groundHeight + 100}px;
    `
      : `
      margin-bottom: ${props.groundHeight}px;
    `};
`;

class Character extends Component {
  render() {
    const {pos} = this.props;
    return (
      <Layout {...this.props}>
        <Speech {...this.props} src={SpeechPath} alt="" />
        <Mario
          {...this.props}
          size={60}
          src={CharacterPath}
          alt="Mario Charactor"
        />
      </Layout>
    );
  }
}

export default Character;
