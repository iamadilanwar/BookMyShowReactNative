import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

export interface ImageCardSmallProps {
  image: string;
}

export default function ImageCardSmall({ image }: ImageCardSmallProps) {
  const onPress = () => {
    console.log("onPress");
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.imageView}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingLeft: 20,
  },
  imageView: {
    width: 150,
    height: 150,
    borderRadius: 10,
    backgroundColor: "red",
  },
});
