import { Center } from "native-base";
import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "native-base";
import { calculateAgeInWeeks } from "../utils/helperFunctions";
import { GlobalContext } from "../context/GlobalContext";

export default function Today() {
  const [data] = useContext(GlobalContext);
  return (
    <View>
      <Center
        style={{ transform: [{ rotate: "5deg" }] }}
        size="xl"
        bg="indigo.700"
        shadow={6}
        rounded="md"
      >
        <Text style={styles.date}>
          {data.babies[0].name} is{" "}
          <Text textDecorationLine="underline">
            {calculateAgeInWeeks(data.babies[0].dob)} weeks
          </Text>{" "}
          old
        </Text>
      </Center>
    </View>
  );
}

const styles = StyleSheet.create({
  date: {
    fontSize: 24,
    color: "#eef2ff",
    padding: 10,
    fontWeight: "500",
    lineHeight: 30,
  },
});
