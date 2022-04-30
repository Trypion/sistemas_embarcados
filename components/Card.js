import * as WebBrowser from "expo-web-browser";
import { StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../constants/Colors";
import { MonoText } from "./StyledText";
import { Text, View } from "./Themed";
import { ScrollView } from 'react-native'

export default function Card({ rent }) {

  const { nome, quantidade_quartos, valor, endereco } = rent; 

  return (
    <View style={styles.card}>      
        <Text>{nome}</Text>
        <Text>quantidade de quartos: {quantidade_quartos}</Text>
        <Text>valor: {valor}</Text>
        <Text>endereço: {endereco}</Text>
    </View>
  );
}

function handleHelpPress() {
  
}

const styles = StyleSheet.create({
  card: {
    display: "flex",
    // flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px",
    width: "90vw",
    backgroundColor: "#fff6",
    margin: 8,
    padding: 8,
    elevation: 5,
    shadowColor: "#fff",
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  }
});
