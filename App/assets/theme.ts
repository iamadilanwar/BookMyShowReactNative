// import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {AppThemeColors} from './colors';
const AppTheme = StyleSheet.create({
  content: {flex: 1},
  flexVerticalSpace: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  flexHorizontalSpace: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  container: {padding: 0, backgroundColor: AppThemeColors.white, flex: 1},
  appContainer: {
    padding: 10,
    backgroundColor: AppThemeColors.backgroundColor,
    flex: 1,
  },
  appContent: {
    padding: 0,
    backgroundColor: AppThemeColors.backgroundColor,
    flex: 1,
  },
});

export default AppTheme;
