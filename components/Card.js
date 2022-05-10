import { StyleSheet, Image } from "react-native";

import Colors from "../constants/Colors";
import { Text, View } from "./Themed";

export default function Card({ rent }) {
  const { nome, quantidade_quartos, valor, endereco, fotos } = rent;

  return (
    <View style={styles.container}>
      <View style={styles.card_template}>
        <Image
          style={styles.card_image}
          source={{
            uri: fotos[0],
          }}
        />
        <View style={styles.text_container}>
          <View style={styles.text_container_header}>
            <Text style={styles.card_title}>{nome}</Text>
            <Text style={styles.card_price}>{valor}</Text>
          </View>
          <Text style={styles.card_addres}>{endereco}</Text>
        </View>
      </View>
    </View>
  );
}

function handleHelpPress() {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  card_template: {
    width: "90%",
    height: 250,
    elevation: 5,
  },
  card_image: {
    width: "100%",
    height: 250,
    borderRadius: 10,
  },
  text_container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",    
    position: "absolute",
    width: "100%",
    // height: "20%",
    maxHeight: 70,
    bottom: 0,
    padding: 5,
    backgroundColor: "rgba(0,0,0, 0.8)",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  card_title: {
    color: "white",
  },
  card_addres: {
    color: "white"
  },
  card_price: {
    color: "white"
  },
  text_container_header: {
    flex: 1,
    width: "100%",
    backgroundColor: "rgba(0,0,0, 0.0)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
});
