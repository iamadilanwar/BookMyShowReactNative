import React, { useState } from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import { Text } from "react-native-paper";
import AppTheme from "../../assets/theme";
import Carousel from "react-native-snap-carousel";

const windowWidth = Dimensions.get("window").width;
const height = (9 / 16) * windowWidth;
interface ItemProps {
  title: string;
  body: string;
  imgUrl: string;
}

const CarouselCardItem = (data: ItemProps) => {
  return (
    <View >
      <Image
        source={{ uri: data.imgUrl }}
        resizeMethod="scale"
      />
      <Text >{data.title}</Text>
      <Text >{data.body}</Text>
    </View>
  );
};
export const CarouselTab = ({ navigation }: any) => {
  const data: Array<ItemProps> = [
    {
      title: "ad1",
      body: "this is ad1",
      imgUrl:
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1674824093176_bbcapp.jpg",
    },
    {
      title: "Ad2",
      body: "this is ad2",
      imgUrl:
        "https://assets-in.bmscdn.com/promotions/cms/creatives/1670502541698_app.jpg",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <View style={[AppTheme.content]}>
      <View >
        <Carousel
          data={data}
          renderItem={({ item }) => (
            <CarouselCardItem
              imgUrl={item.imgUrl}
              title={item.title}
              body={item.body}
            />
          )}
          sliderWidth={windowWidth}
          itemWidth={windowWidth - 60}
          sliderHeight={height}
          itemHeight={height}
          autoplay={true}
          loop={true}
          onSnapToItem={(index) => setActiveSlide(index)}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
 
});
