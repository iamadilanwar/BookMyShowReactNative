import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Header } from "../../types/common";
import { Colors } from "../../assets/colors";
import {
  Feather,
  MaterialCommunityIcons,
  AntDesign,
  Ionicons,
  EvilIcons,
} from "@expo/vector-icons";
import AppTheme from "../../assets/theme";
import { useNavigation, useRoute } from "@react-navigation/native";

const AppHeader = ({ title, subTitle }: Header) => {
  const route = useRoute();
  const navigation = useNavigation();

  const back = () => {
    navigation.goBack();
  };
  const TitleView = () => (
    <View style={styles.header}>
      {route.name !== "HOME" && route.name !== "PROFILE" && (
        <TouchableOpacity onPress={back} style={styles.iconView}>
          <Ionicons name="arrow-back" size={24} color={Colors.bmsWhite} />
        </TouchableOpacity>
      )}
      <View style={AppTheme.flexVerticalSpace}>
        <Text style={styles.titleView}>{title}</Text>
        <Text style={styles.locationView}>{subTitle}</Text>
      </View>
      {route.name === "HOME" && (
        <>
          <TouchableOpacity
            onPress={() => console.log("clicked")}
            style={styles.iconView}
          >
            <Feather name="search" size={24} color={Colors.bmsWhite} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => console.log("clicked")}
            style={styles.iconView}
          >
            <AntDesign name="bells" size={24} color={Colors.bmsWhite} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log("clicked")}
            style={styles.iconView}
          >
            <MaterialCommunityIcons
              name="qrcode-scan"
              size={24}
              color={Colors.bmsWhite}
            />
          </TouchableOpacity>
        </>
      )}
      {route.name === "PROFILE" && (
        <TouchableOpacity
          onPress={() => console.log("clicked")}
          style={styles.iconView}
        >
          <EvilIcons name="user" size={35} color={Colors.bmsWhite} />
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <View style={styles.view}>
      <TitleView />
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    alignContent: "center",
    flexDirection: "row",
    justifyContent: "center",
    elevation: 0,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    width: "100%",
  },
  header: {
    height: "auto",
    elevation: 8,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    padding: 4,
    justifyContent: "space-between",
    backgroundColor: Colors.bmsBlue,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  locationView: {
    fontSize: 12,
    color: "rgb(204, 204, 204)",
    paddingLeft: 10,
    textAlign: "left",
    paddingTop: 1,
  },
  titleView: {
    fontSize: 24,
    paddingLeft: 10,
    letterSpacing: 0.3,
    fontFamily: "InterBold",
    color: Colors.bmsWhite,
    textAlign: "left",
  },
  imgView: {
    height: 60,
    width: 60,
    color: Colors.bmsWhite,
    backgroundColor: Colors.bmsWhite,
  },
  iconView: {
    marginLeft: 7,
    marginRight: 7,
  },
});
