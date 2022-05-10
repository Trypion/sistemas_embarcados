import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, View } from "./Themed";
import {
  StyleSheet,
  Button,
  Platform,
  Linking,
  ScrollView,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from "./CarouselCardItem";
import {
  addUserScheduledRent,
  findScheduledRent,
  removeScheduledRent,
} from "../services/Api";

export default function RentDetail({ route, navigation }) {
  const [index, setIndex] = React.useState(0);
  const [isScheduled, setIsScheduled] = React.useState(false);
  const { rent } = route.params;

  const mapUrl = Platform.select({
    ios: `maps:0,0?q=${rent.localizacao.latitude},${rent.localizacao.longitude}`,
    android: `geo:0,0?q=${rent.localizacao.latitude},${rent.localizacao.longitude}`,
    web: `https://www.google.com/maps/search/?api=1&query=${rent.localizacao.latitude},${rent.localizacao.longitude}`,
  });

  const whatsApp = (text, phone) => {
    Linking.openURL(`whatsapp://send?text=${text}&phone=${phone}`);
  };

  const handleSchedule = async () => {
    await addUserScheduledRent(rent);
    navigation.goBack();
  };

  const handleUnschedule = async () => {
    await removeScheduledRent(rent.id);
    
    navigation.goBack();
  };

  const isCarousel = React.useRef(null);

  React.useEffect(async () => {
    const data = await findScheduledRent(rent.id);
    if (data) {
      setIsScheduled(true);
    }
  }, []);

  return (
    <ScrollView style={styles.container}>
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
      </View>

      <View style={styles.detailContent}>
        <View style={styles.detailHeader}>
          <Text>
            <Ionicons
              size={30}
              name="copy-outline"
              style={{ marginBottom: -3 }}
            />
            {rent.area}
          </Text>
          <Text>
            <Ionicons
              size={30}
              name="male-female-outline"
              style={{ marginBottom: -3 }}
            />
            {rent.restricoes.sexo}
          </Text>
          <Text>
            <Ionicons
              size={30}
              name="people-outline"
              style={{ marginBottom: -3 }}
            />
            {rent.restricoes.numero_pessoas}
          </Text>
          <Text>
            <Ionicons
              size={30}
              name="bed-outline"
              style={{ marginBottom: -3 }}
            />
            {rent.quantidade_quartos}
          </Text>
          <Text>
            <Ionicons
              size={30}
              name="cash-outline"
              style={{ marginBottom: -3 }}
            />
            {rent.valor}
          </Text>
        </View>

        <Text style={styles.headerText}>{rent.nome}</Text>

        <Text>{rent.descricao}</Text>

        <Text style={styles.headerText}>{rent.endereco}</Text>

        <View style={styles.detailHeader}>
          <Ionicons
            size={50}
            name="logo-youtube"
            style={{ marginBottom: -3 }}
            onPress={() => Linking.openURL(rent.video)}
            color="red"
          />

          <Ionicons
            size={50}
            name="logo-whatsapp"
            style={{ marginBottom: -3 }}
            onPress={() =>
              whatsApp(
                `Olá, gostaria de conversar sobre seu anuncio ${rent.nome}`,
                rent.telefone
              )
            }
            color="green"
          />

          <Ionicons
            size={50}
            name="location-outline"
            style={{ marginBottom: -3 }}
            onPress={() => Linking.openURL(mapUrl)}
            color="orange"
          />

          <Ionicons
            size={50}
            name="mail-outline"
            style={{ marginBottom: -3 }}
            onPress={() => Linking.openURL(`mailto:${rent.email}`)}
            color="black"
          />

          {isScheduled ? (
            <Ionicons
              size={50}
              name="heart-dislike"
              style={{ marginBottom: -3 }}
              onPress={() => handleUnschedule()}
              color="red"
            />
          ) : (
            <Ionicons
              size={50}
              name="heart"
              style={{ marginBottom: -3 }}
              onPress={() => handleSchedule()}
              color="red"
            />
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  detailContent: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  detailHeader: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
});
