import React from 'react';
import Svg, {Line, Rect, SvgProps} from 'react-native-svg';
import {AppThemeColors} from '../colors';

export const CreditCardIcon: React.FC<SvgProps> = ({stroke, height, width}) => {
  return (
    <Svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke || AppThemeColors.primaryColorDark}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <Rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
      <Line x1="1" y1="10" x2="23" y2="10" />
    </Svg>
  );
};

