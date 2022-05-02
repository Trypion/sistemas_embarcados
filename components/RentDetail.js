import { Text, View } from "./Themed";
import { StyleSheet } from "react-native";

export default function RentDetail({ route, navigation }) {
  const { rent } = route.params;  
  return (
    <View>
      <Text>{rent.nome}</Text>
      <Text>{rent.quantidade_quartos}</Text>
      <Text>{rent.endereco}</Text>
      <Text>{rent.valor}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
