import React from "react";
import { HStack, VStack, Center, Box } from "native-base";
import { StyleSheet, Text, View } from "react-native";

export default function Medicine() {
  return (
    <Box bg="indigo.50" style={styles.box}>
      <View style={styles.parentContainer}>
        <Box shadow={6} rounded="md" style={styles.container}>
          <VStack
            bg="indigo.50"
            rounded="md"
            shadow={6}
            style={styles.stackContainer}
            space={6}
          >
            <Text>Medicine</Text>
          </VStack>
        </Box>
      </View>
    </Box>
  );
}

const styles = StyleSheet.create({
  stackContainer: {
    padding: 15,
    margin: 10,
  },
  box: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center",
    height: "85%",
    backgroundColor: "#312e81",
    padding: 10,
  },
  parentContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
