import * as React from 'react';
import {Svg, Path, Polyline, SvgProps} from 'react-native-svg';
import {Colors} from '../colors';
import { AntDesign, Entypo, MaterialIcons } from "@expo/vector-icons";

export const HomeIcon: React.FC<SvgProps> = ({width, height, stroke}) => {
  return (
    <>
      <Svg
        width={width || 24}
        height={height || 24}
        stroke={stroke || Colors.bmsBlue}
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <Path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <Polyline points="9 22 9 12 15 12 15 22" />
      </Svg>
      
    </>
  );
};

