import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import AppTheme from "../../assets/theme";

const Menu = [
  {
    name: "movies",
    uri: require("../../assets/icons/movies.png"),
  },
  {
    name: "stream",
    uri: require("../../assets/icons/stream.png"),
  },
  {
    name: "musicShows",
    uri: require("../../assets/icons/music.png"),
  },
  {
    name: "comedyShows",
    uri: require("../../assets/icons/comedyShow.png"),
  },
  {
    name: "adventure",
    uri: require("../../assets/icons/adventure.png"),
  },
  {
    name: "plays",
    uri: require("../../assets/icons/play.png"),
  },
  {
    name: "seeALL",
    uri: require("../../assets/icons/all.png"),
  },
];

export default function TopMenuNav({ navigation }: any) {
  const onPress = () => {
    navigation.navigate("CLIENT_ALL_SHOWS");
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {Menu.map((i) => (
        <TouchableOpacity onPress={onPress}>
          <View style={AppTheme.flexHorizontalSpace}>
            <Image source={i.uri} style={styles.iconSize} />
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
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
  iconSize: {
    height: 90,
    width: 90,
  },
});
