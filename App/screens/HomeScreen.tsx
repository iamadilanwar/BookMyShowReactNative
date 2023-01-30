import React, { useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
// import * as Animatable from 'react-native-animatable';
import AppTheme from "../assets/theme";
import { Colors } from "../assets/colors";
import MyHeader from "../components/Header/MyHeader";
import TopMenuNav from "../components/Navigation/ClientTopNav";
import { CarouselTab } from "../components/Carousel";
import ScrollViewHorizontal from "../container/ScrollViewHorizontal";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { renderHome } from "../slice/homeSlice";
import EventView from "../container/EventView";
import { BestEventFakeData, BestEventFakeData2 } from "../slice/dataStore";
import EventView2 from "../container/EventView2";

export default function HomeScreen({ route, navigation }: any) {
  const viewRef = React.useRef(null);
  const dispatch = useAppDispatch();
  const {
    recommended,
    liveEvents,
    laughterTherapy,
    latestPlayList,
    popularEvents,
    gameSports,
    // bestEvents,
  } = useAppSelector((state) => state.home);
  useEffect(() => {
    dispatch(renderHome());
  }, []);

  return (
    <View style={AppTheme.container}>
      <MyHeader
        title={route?.params?.title}
        subTitle={route?.params?.subtitle}
        titleAlight="more-vertical"
      />
      <View ref={viewRef} style={AppTheme.container}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <View>
            <TopMenuNav navigation={navigation} />
          </View>
          {/* <CarouselTab /> */}
          <ScrollViewHorizontal
            navigation={navigation}
            data={recommended}
            title="Recommended Movies"
            btnText="See All"
            backgroundColor="light"
          />
          <EventView
            navigation={navigation}
            data={BestEventFakeData}
            title="The Best Events This Week"
            subText="Monday to Sunday, we got you covered"
            backgroundColor="dark"
          />

          <EventView2
            navigation={navigation}
            data={BestEventFakeData2}
            title="The Ultimate Events List"
            subText="Good times outdoor or at home"
            backgroundColor="dark"
          />

          <ScrollViewHorizontal
            navigation={navigation}
            data={liveEvents}
            title="Live Events"
            btnText="See All"
            backgroundColor="dark"
          />
          <ScrollViewHorizontal
            navigation={navigation}
            data={laughterTherapy}
            title="Laughter Therapy"
            btnText="See All"
            backgroundColor="light"
          />
          <ScrollViewHorizontal
            navigation={navigation}
            data={latestPlayList}
            title="The Latest Plays"
            btnText="See All"
            backgroundColor="light"
          />
          <ScrollViewHorizontal
            navigation={navigation}
            data={popularEvents}
            title="Popular Events"
            btnText="See All"
            backgroundColor="light"
          />
          <ScrollViewHorizontal
            navigation={navigation}
            data={gameSports}
            title="Games and Sports"
            btnText="See All"
            backgroundColor="light"
          />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  textView: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
