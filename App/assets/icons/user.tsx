import React from 'react';
import {Svg, Circle, Path, SvgProps, Polyline} from 'react-native-svg';
import {AppThemeColors} from '../colors';
export const UserIcon: React.FC<SvgProps> = ({stroke, width, height}) => {
  return (
    <Svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke || AppThemeColors.black}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <Circle cx="12" cy="7" r="4" />
    </Svg>
  );
};
// export default UserIcon;

export const UserVerified: React.FC<SvgProps> = ({width, height, stroke}) => {
  return (
    <Svg
      width={width || 24}
      height={height || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke || '#222'}
      // stroke-width={4}
      stroke-linecap="round"
      stroke-linejoin="round">
      <Path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <Circle cx="8.5" cy="7" r="4" />
      <Polyline points="17 11 19 13 23 9" />
    </Svg>
  );
};

export const UsersIcon: React.FC<SvgProps> = ({stroke, height, width}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke || '#222'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <Circle cx="9" cy="7" r="4" />
      <Path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <Path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </Svg>
  );
};
// export default UsersIcon
