import { Center } from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { calculateAgeInWeeks } from "../utils/helperFunctions";
export default function Today({ baby }) {
  return (
    <View style={styles.container}>
      <Center rounded={"xl"} bg={"indigo.50"} shadow="5">
        <Text style={styles.date}>
          {baby.name} is {calculateAgeInWeeks(baby.bday)} weeks old!
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
