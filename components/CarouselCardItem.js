import React from "react";
import { StyleSheet, Dimensions, Image } from "react-native";
import { View, Text } from "../components/Themed";

export const SLIDER_WIDTH = Dimensions.get("window").width + 80;
export const ITEM_WIDTH = Dimensions.get("window").width + 80;

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image source={{ uri: item }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 8,
    width: ITEM_WIDTH,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: 300,
  },
});

export default CarouselCardItem;
