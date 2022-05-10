import React from "react";
import { Text, View } from "./Themed";
import {
  StyleSheet,
  Button,
  Platform,
  Linking,
  Dimensions,
  Image,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from "./CarouselCardItem";

export default function RentDetail({ route, navigation }) {
  const [index, setIndex] = React.useState(0);
  const { rent } = route.params;

  const mapUrl = Platform.select({
    ios: `maps:0,0?q=${rent.localizacao.latitude},${rent.localizacao.longitude}`,
    android: `geo:0,0?q=${rent.localizacao.latitude},${rent.localizacao.longitude}`,
    web: `https://www.google.com/maps/search/?api=1&query=${rent.localizacao.latitude},${rent.localizacao.longitude}`,
  });

  const WhatsApp = (text, phone) => {
    Linking.openURL(`whatsapp://send?text=${text}&phone=${phone}`);
  };

  const isCarousel = React.useRef(null);

  return (
    <View>
      <Carousel
        layout="default"
        ref={isCarousel}
        data={rent.fotos}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
      />
      <Pagination
        dotsLength={rent.fotos.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: "rgba(0, 0, 0, 0.92)",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
      <View style={styles.detailContent}>
        <Text>{rent.nome}</Text>
        <Text>{rent.endereco}</Text>
        <Text>{rent.valor}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailContent: {
    // flex: 1,
    // marginTop: 150
    // flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
  },
});
