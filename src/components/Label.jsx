// React Libraries
import React from 'react';
import styled from 'styled-components';
const LabelStyle = styled.p`
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 14px;
  font-family: sans-serif;
  font-weight: 600;
  background: black;
  position: relative;
  display: inline-block;
  padding: 4px 10px;
  margin-left: 20px;
  border-radius: 4px;
  color: white;
`;

const Label = ({text}) => <LabelStyle><p>{text}</p></LabelStyle>;

export default Label;
