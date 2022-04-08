import { Box, ScrollView } from "native-base";
import { StyleSheet, StatusBar } from "react-native";
import ButtonGrid from "../components/ButtonGrid";
import QuickStopStart from "../components/Fab";
import { GlobalContext, NapContext } from "../context/GlobalContext";
import React, { useContext } from "react";
import MainMenu from "../components/MainMenu";
import { indigo } from "../utils/cssVars";
import { AuthContext } from "../context/GlobalContext";
import AuthPrompt from "./AuthPrompt";
import AddBaby from "./AddBaby";

export default function Home() {
  const [data] = useContext(GlobalContext);
  const [napIsActive] = useContext(NapContext);
  let EMPTY_TEST_ARRAY = [0];
  return (
    <ScrollView
      bg="indigo.900"
      position="relative"
      contentContainerStyle={styles.container}
    >
      {EMPTY_TEST_ARRAY.length === 0 ? (
        <AddBaby />
      ) : (
        <>
          <StatusBar backgroundColor={indigo[50]} />
          <ButtonGrid baby={data.babies[0]} />
          {napIsActive && <QuickStopStart />}
          <MainMenu />
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
