import * as WebBrowser from "expo-web-browser";
import { StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../constants/Colors";
import { Text, View } from "./Themed";

export default function Card({ rent }) {

  const { nome, quantidade_quartos, valor, endereco } = rent; 

  return (
    <View>      
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
});
