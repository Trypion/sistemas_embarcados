import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Card from "../components/Card";
import { View } from "../components/Themed";
import { getAvaibleRents } from "../services/Api";

export default function HomeScreen({ navigation }) {
  const [avaibleRents, setAvaibleRents] = React.useState([])

  React.useEffect(async ()=> {
    const data = await getAvaibleRents()
    setAvaibleRents(data)
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView>
        {avaibleRents.map((rent) => (
          <div key={rent.id} onClick={() => navigation.navigate('RentDetail', {rent})}>
            <Card key={rent.id} rent={rent}/>
          </div>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
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
