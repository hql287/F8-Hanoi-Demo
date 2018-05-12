import React from 'react';
import Character from '../components/Character';

import styled from 'styled-components';
export const Layout = styled.div`
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
  flex-direction: column;
`;

function Foreground(props) {
  return (
    <Layout>
      <Character {...props} />
    </Layout>
  );
}

export default Foreground;
