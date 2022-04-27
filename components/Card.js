import * as WebBrowser from "expo-web-browser";
import { StyleSheet, TouchableOpacity } from "react-native";

import Colors from "../constants/Colors";
import { MonoText } from "./StyledText";
import { Text, View } from "./Themed";
import { ScrollView } from 'react-native'

export default function Card({ rent }) {

  const { nome } = rent; 

  return (
    <View>
      <Text>{nome}</Text>
    </View>
  );
}

function handleHelpPress() {
  
}
