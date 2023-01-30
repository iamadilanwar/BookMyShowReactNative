import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import VerticalCard, {
  VerticalCardProps,
} from "../../components/Cards/VerticalCard";
import { Colors } from "../../assets/colors";
interface Props {
  navigation: any;
  data: VerticalCardProps[];
  title: string;
  btnText: string;
  backgroundColor: string;
}

export default function ScrollViewHorizontal({
  navigation,
  data,
  title,
  btnText,
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
        <Text style={styles.btnView}>{btnText}</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((i, index) => (
          <VerticalCard
            key={index}
            image={i.image}
            tittle={i.tittle}
            language={i.language}
            type={i.type}
            location={i.location}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 10,
  },
  textView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    paddingTop: 20,
  },
  titleView: {
    fontWeight: "bold",
    fontSize: 18,
  },
  btnView: {
    fontSize: 12,
    fontWeight: "300",
    color: "red",
  },
});
