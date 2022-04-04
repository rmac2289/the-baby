import React, { useState, useEffect } from "react";
import { HStack, VStack, Center, Box } from "native-base";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "native-base";
import { formatTime } from "../utils/helperFunctions";

export default function Sleep() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);
  let bg;
  return (
    <Box bg="indigo.50" style={styles.box}>
      <View style={styles.parentContainer}>
        <Box shadow={6} rounded="md" style={styles.container}>
          <HStack
            bg="indigo.50"
            rounded="md"
            padding="2"
            style={styles.stackContainer}
            space={6}
          >
            <Center w="75" shadow={6}>
              <Button
                w="75"
                bg={isActive ? "danger.500" : "success.500"}
                onPress={() => toggle()}
              >
                {isActive ? "Stop" : "Start "}
              </Button>
            </Center>
            <Center rounded="md" w="75" bg="indigo.50">
              <Text style={styles.timerText}>{formatTime(seconds)}</Text>
            </Center>
            <Center w="75" shadow={6}>
              <Button bg="indigo.900" onPress={() => reset()}>
                Reset
              </Button>
            </Center>
          </HStack>
        </Box>
      </View>
    </Box>
  );
}

const styles = StyleSheet.create({
  stackContainer: {
    margin: 10,
  },
  timerText: {
    color: "#312e81",
    fontWeight: "700",
    fontSize: 24,
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
