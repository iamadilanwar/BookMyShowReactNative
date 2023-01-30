import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../assets/colors";
import ImageCardSmall, {
  ImageCardSmallProps,
} from "../../components/Cards/ImageCardSmall";
interface Props {
  navigation: any;
  data: ImageCardSmallProps[];
  title: string;
  subText: string;
  backgroundColor: string;
}

export default function EventView2({
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
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.scrollView}>
          {data.map((i, index) => (
            <ImageCardSmall key={index} image={i.image} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: Colors.white,
  },
  textView: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
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
  scrollView: {
    height: 400,
    display: "flex",
    width: 550,
    flexDirection: "row",
    flexWrap: "wrap",
    overflow: "scroll",
    scrollEnabled: true,
  },
  imageView: {
    justifyContent: "flex-start",
    flexDirection: "row",
  },
});
