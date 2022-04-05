import React from "react";
import { HStack, VStack, Center, Box } from "native-base";
import { Pressable, StyleSheet, Text, View } from "react-native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Fontisto,
} from "@expo/vector-icons";
import Today from "./Today";
import { useNavigation } from "@react-navigation/native";
import HomeImage from "./HomeImage";

export default function ButtonGrid({ baby }) {
  const navigation = useNavigation();
  return (
    <View style={styles.parentContainer}>
      <Box shadow={6} style={styles.container}>
        <VStack
          bg="indigo.50"
          rounded="md"
          shadow={6}
          style={styles.stackContainer}
          space={3}
        >
          <HStack justifyContent="center">
            <HomeImage />
            <Today baby={baby} />
          </HStack>
          <HStack space={3} justifyContent="center">
            <VStack space={3}>
              <Pressable onPress={() => navigation.navigate("Bottle")}>
                <Center w="75" h="75" bg="indigo.700" rounded="md" shadow={6}>
                  <MaterialCommunityIcons
                    name="baby-bottle-outline"
                    size={36}
                    color="white"
                  />
                </Center>
              </Pressable>
              <Pressable onPress={() => navigation.navigate("Diaper")}>
                <Center w="75" h="75" bg="indigo.700" rounded="md" shadow={6}>
                  <MaterialIcons
                    name="baby-changing-station"
                    size={36}
                    color="white"
                  />
                </Center>
              </Pressable>
            </VStack>
            <VStack space={3}>
              <Pressable onPress={() => navigation.navigate("Sleep")}>
                <Center w="75" h="75" bg="indigo.700" rounded="md" shadow={6}>
                  <MaterialCommunityIcons
                    name="sleep"
                    size={36}
                    color="white"
                  />
                </Center>
              </Pressable>
              <Pressable onPress={() => navigation.navigate("Medicine")}>
                <Center w="75" h="75" bg="indigo.700" rounded="md" shadow={6}>
                  <Fontisto name="pills" size={36} color="white" />
                </Center>
              </Pressable>
            </VStack>
            <VStack space={3}>
              <Pressable onPress={() => navigation.navigate("Pump")}>
                <Center w="75" h="75" bg="indigo.700" rounded="md" shadow={6}>
                  <Text style={{ color: "white" }}>Pump</Text>
                </Center>
              </Pressable>
              <Pressable onPress={() => navigation.navigate("Breastfeed")}>
                <Center w="75" h="75" bg="indigo.700" rounded="md" shadow={6}>
                  <Text style={{ color: "white" }}>Feed </Text>
                </Center>
              </Pressable>
            </VStack>
          </HStack>
        </VStack>
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  stackContainer: {
    padding: 15,
    margin: 10,
  },
  container: {
    width: "100%",
    alignItems: "center",
    height: "85%",
    backgroundColor: "#312e81",
    padding: 10,
  },
  parentContainer: {
    width: "100%",
    marginTop: 10,
  },
});
