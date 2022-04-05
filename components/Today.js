import { Center } from "native-base";
import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { calculateAgeInWeeks } from "../utils/helperFunctions";
import { GlobalContext } from "../context/GlobalContext";

export default function Today() {
  const [data] = useContext(GlobalContext);
  return (
    <View style={styles.container}>
      <Center rounded={"xl"} bg={"indigo.50"} shadow="5">
        <Text style={styles.date}>
          {data.baby.name} is {calculateAgeInWeeks(data.baby.bday)} weeks old!
        </Text>
      </Center>
    </View>
  );
}

const styles = StyleSheet.create({
  date: {
    fontSize: 24,
    color: "#312e81",
    padding: 10,
    fontWeight: "500",
  },
  container: {
    width: "90%",
    margin: 10,
  },
});
