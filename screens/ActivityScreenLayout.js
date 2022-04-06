import React from "react";
import { VStack, Box, Text } from "native-base";
import { StyleSheet, View } from "react-native";
import Icon from "../components/Icon";

export default function Bottle({ uri, route }, { children }) {
  return (
    <Box bg="indigo.50" style={styles.box}>
      <View style={styles.parentContainer}>
        <Box position="relative" shadow={6} style={styles.container}>
          <Icon
            position="absolute"
            top={3}
            left={3}
            style={route === "Bottle" && { transform: [{ rotate: "-20deg" }] }}
            uri={uri}
            route={route}
          />

          <VStack
            rounded="md"
            shadow={6}
            style={styles.stackContainer}
            space={6}
          >
            <Text fontSize={24} color="indigo.50">
              {route}
            </Text>
            {children}
          </VStack>
        </Box>
      </View>
    </Box>
  );
}

const styles = StyleSheet.create({
  stackContainer: {
    margin: 5,
  },
  box: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "100%",
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
