import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import Card from "../components/Card";
import { View } from "../components/Themed";
import { getAvaibleRents } from "../services/Api";

export default function HomeScreen({ navigation }) {
  const [avaibleRents, setAvaibleRents] = React.useState([]);

  React.useEffect(async () => {
    const data = await getAvaibleRents();
    setAvaibleRents(data);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollview}>
        {avaibleRents.map((rent) => (
          <TouchableOpacity
            key={rent.id}
            onPress={() => navigation.navigate("RentDetail", { rent })}
          >
            <Card key={rent.id} rent={rent} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollview: {
    padding: 8,
    margin: 8,
  },
  container: {
    // display: "flex",
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
