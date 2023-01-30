import React from "react";
import { Image, StyleSheet, TouchableOpacity, View, Text } from "react-native";

export interface ImageCardProps {
  image: string;
}

export default function ImageCard({
  image,
}: ImageCardProps) {
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
  },
  imageView: {
    width: 175,
    height: 175,
    borderRadius: 10,
  },
});
