import { Box, ScrollView } from "native-base";
import { StyleSheet, StatusBar } from "react-native";
import ButtonGrid from "../components/ButtonGrid";
import QuickStopStart from "../components/Fab";
import { GlobalContext, NapContext } from "../context/GlobalContext";
import React, { useContext } from "react";
import MainMenu from "../components/MainMenu";

export default function Home() {
  const [data] = useContext(GlobalContext);
  const [napIsActive] = useContext(NapContext);
  return (
    <ScrollView
      bg="#eef2ff"
      position="relative"
      contentContainerStyle={styles.container}
    >
      <StatusBar barStyle="dark-content" />
      <ButtonGrid baby={data.babies[0]} />
      {napIsActive && <QuickStopStart />}
      <MainMenu />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
