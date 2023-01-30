import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../assets/colors";
import ImageCard, { ImageCardProps } from "../../components/Cards/ImageCard";
interface Props {
  navigation: any;
  data: ImageCardProps[];
  title: string;
  subText: string;
  backgroundColor: string;
}

export default function EventView({
  navigation,
  data,
  title,
  subText,
  backgroundColor,
}: Props) {
  return (
    <View
      style={[
        {
          backgroundColor:
            backgroundColor === "light" ? "transparent" : Colors.gray,
        },
        styles.container,
      ]}
    >
      <View style={styles.textView}>
        <Text style={styles.titleView}>{title}</Text>
        <Text style={styles.subTextView}>{subText}</Text>
      </View>
      <View style={styles.imageView}>
        {data.map((i, index) => (
          <ImageCard key={index} image={i.image} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 10,
    backgroundColor: Colors.white,
  },
  textView: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 10,
  },
  titleView: {
    fontWeight: "bold",
    fontSize: 18,
  },
  subTextView: {
    fontSize: 12,
    fontWeight: "400",
    color: "rgb(102, 102, 102)",
  },
  imageView: {
    justifyContent: "flex-start",
    flexDirection: "row",
  },
});
