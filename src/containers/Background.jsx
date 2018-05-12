// React Libraries
import React from 'react';
import Label from '../components/Label';
import path from 'path';

const tilePath = path.resolve(__dirname, './static/imgs/tile_small.png');
const pipePath = path.resolve(__dirname, './static/imgs/pipe.png');

import styled from 'styled-components';

export const Layout = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Sky = styled.div`
  flex: 1;
  background: lightblue;
`;

export const Ground = styled.div`
  flex: 1;
  background: url(${tilePath});
  ${props =>
    props.groundHeight &&
    `
    max-height: ${props.groundHeight}px;
  `};
  ${props =>
    props.borderHeight &&
    `
    border-top: ${props.borderHeight}px solid darkgreen;
  `};
`;

function Background(props) {
  return (
    <Layout>
      <Sky>
        { props.showLabels &&
          <Label text="Sky" />
        }
      </Sky>
      <Ground {...props}>
        { props.showLabels &&
          <Label text="Ground" />
        }
      </Ground>
    </Layout>
  );
}

Background.defaultProps = {
  showLabels: false,
  groundHeight: 240,
  borderHeight: 10,
};

export default Background;
