import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import {normalizePx} from '../../utils/utilFunctions';

function StyledText(props) {
  return <Text>{props.children}</Text>;
}

const Header = styled.Text`
  background-color: #9d2449;
  font-size: 20px;
  padding: 10px;
`;

const Paragraph = styled.Text`
  font-size: ${normalizePx(18)}px;
  font-weight: ${props => {
    return props?.bold ? 'bold' : 'normal';
  }};
  text-align: justify;
`;

const Title = styled.Text`
  font-size: ${normalizePx(20)}px;
  font-weight: ${props => {
    return props?.bold ? 'bold' : 'normal';
  }};
  text-align: justify;
`;

StyledText.Header = Header;

StyledText.Paragraph = Paragraph;

StyledText.Title = Title;

export default StyledText;
