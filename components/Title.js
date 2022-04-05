import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>The Baby!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#312e81",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "700",
  },
});
