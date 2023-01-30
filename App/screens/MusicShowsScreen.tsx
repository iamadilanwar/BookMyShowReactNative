import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
// import * as Animatable from 'react-native-animatable';
import AppTheme from '../assets/theme';
import {Colors} from '../assets/colors';
import MyHeader from '../components/Header/MyHeader';
import {useDispatch} from 'react-redux';
// import {getCardsData} from '../redux/slices/card';

export default function MusicShowsScreen({route, navigation}: any) {
  const viewRef = React.useRef(null);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getCardsData());
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     viewRef.current.animate({0: {opacity: 0.5}, 1: {opacity: 1}});
  //   });
  //   return () => unsubscribe;
  // }, [navigation, dispatch]);

  return (
    <View style={AppTheme.container}>
      <MyHeader
        // menu
        // onPressMenu={() => navigation.goBack()}

        title={route.name}
        titleAlight="more-vertical"
        // onRightPress={() => console.log('right')}
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
