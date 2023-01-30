import React from "react";
import { Image, StyleSheet, TouchableOpacity, View, Text } from "react-native";

export interface VerticalCardProps {
  image: string;
  tittle: string;
  language?: string;
  type?: string;
  location?: string;
}

export default function VerticalCard({
  image,
  tittle,
  language,
  type,
  location,
}: VerticalCardProps) {
  const onPress = () => {
    console.log("onPress");
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            source={{
              uri: image,
            }}
            style={styles.imageView}
          />
        </View>
        <Text style={styles.textView} numberOfLines={2} ellipsizeMode="tail">
          {tittle}
        </Text>
        <Text style={styles.subTextView} numberOfLines={2} ellipsizeMode="tail">
          {language ? language : type ? type : location ? location : null}{" "}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    flexDirection: "column",
    padding: 10,
    width: 160,
  },
  textView: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
  },
  subTextView: {
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
  },
  imgContainer: {
    height: 250,
    width: 148,
    borderRadius: 10,
    overflow: "hidden",
    alignContent: "center",
    textAlign: "center",
  },
  imageView: {
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
});
