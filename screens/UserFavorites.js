import React, { useEffect } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, Button } from "react-native";
import Card from "../components/Card";
import { useFocusEffect } from "@react-navigation/native";
import { View, Text } from "../components/Themed";
import { getUserScheduledRents } from "../services/Api";

export default function UserFavorites({ navigation }) {
  const [userScheduledRents, setUserScheduledRents] = React.useState([]);

  useFocusEffect(
    React.useCallback(() => {
      let isActive = true;
      const fetchData = async () => {
        try {
          const data = await getUserScheduledRents();

          if (isActive) {
            setUserScheduledRents([...data]);
          }
        } catch (e) {
          // Handle error
        }
      };

      fetchData();

      return () => {
        isActive = false;
      };
    }, [])
  );

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
