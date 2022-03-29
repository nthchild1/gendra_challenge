import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import {
  View,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
  ScrollView,
} from 'react-native';
import styled from 'styled-components/native';

const HeaderContainer = styled.View`
  ${({headerBorder}) =>
    headerBorder
      ? 'border-bottom-width: 1px;\n  border-bottom-color: #c9c9c9; padding: 5%;\n  margin-horizontal: 4%;\n  '
      : ''}
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: space-between;
`;

function SummaryDetails({children, Header, onToggle, headerBorder}, ref) {
  const [isExpanded, setIsExpanded] = useState(false);

  const expand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpanded(!isExpanded);
    onToggle?.();
  };

  useImperativeHandle(ref, () => ({
    expand: () => expand(),
  }));

  return (
    <ScrollView nestedScrollEnabled>
      <TouchableOpacity onPress={expand}>
        <HeaderContainer pointerEvents="none" headerBorder={headerBorder}>
          <Header />
        </HeaderContainer>
      </TouchableOpacity>
      {isExpanded && children}
    </ScrollView>
  );
}

SummaryDetails.defaultProps = {
  headerBorder: false,
};

export default forwardRef(SummaryDetails);
