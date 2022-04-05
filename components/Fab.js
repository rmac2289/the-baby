import { Fab, Icon, Box, Text, Center } from "native-base";
import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NapContext, NapTimerContext } from "../context/GlobalContext";
import { useNavigationState, useNavigation } from "@react-navigation/native";
import { formatTime } from "../utils/helperFunctions";
export default function QuickStopStart() {
  const [seconds, setSeconds] = useContext(NapTimerContext);
  const [napIsActive, setNapIsActive] = useContext(NapContext);
  const route = useNavigationState((state) => {
    return state.routes[state.index];
  });
  const currentScreen = route.name;
  const navigation = useNavigation();

  console.log(route);
  const toggleNap = () => {
    setNapIsActive(!napIsActive);
    navigation.navigate("Sleep");
  };
  return (
    currentScreen !== "Sleep" && (
      <Box
        shadow={9}
        position="absolute"
        right={10}
        bottom={10}
        h={400}
        w="100%"
      >
        <Fab
          onPress={() => toggleNap()}
          bg="indigo.500"
          icon={
            <Icon
              color="white"
              as={<Ionicons name="stop-circle-outline" />}
              size={12}
            />
          }
          label={
            <Center justifyContent="center" alignItems="center">
              <Text fontWeight={700} color="white" fontSize="sm">
                end nap
              </Text>
              <Text color="white">{formatTime(seconds)}</Text>
            </Center>
          }
        />
      </Box>
    )
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    color: "white",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});
