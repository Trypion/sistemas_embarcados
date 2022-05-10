import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import Card from "../components/Card";
import { View } from "../components/Themed";
import { getUserScheduledRents } from "../services/Api";

export default function UserFavorites({ navigation }) {
  const [userScheduledRents, setUserScheduledRents] = React.useState([]);

  React.useEffect(async () => {
    const data = await getUserScheduledRents();
    setUserScheduledRents(data);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {userScheduledRents.map((rent) => (
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
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
