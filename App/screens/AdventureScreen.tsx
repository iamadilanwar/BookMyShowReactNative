import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppTheme from '../assets/theme';
import {Colors} from '../assets/colors';
import MyHeader from '../components/Header/MyHeader';

export default function AdventureScreen({route, navigation}: any) {
  const viewRef = React.useRef(null);

  return (
    <View style={AppTheme.container}>
      <MyHeader
        title={route?.params?.title}
        subTitle={route?.params?.subtitle}
        titleAlight="more-vertical"
      />
      <View
        ref={viewRef}
        style={AppTheme.container}>
        <View
          style={[styles.container, {backgroundColor: Colors.white, flex: 1}]}>
          <Text style={styles.textView}>{route.name} Screen</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textView: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
