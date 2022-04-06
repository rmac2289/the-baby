import React from "react";
import { HStack, VStack, Center, Box, Pressable } from "native-base";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Fontisto,
  AntDesign,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import HomeImage from "./HomeImage";
import Date from "./Date";
import { LinearGradient } from "expo-linear-gradient";
import { indigo } from "../utils/cssVars";

export default function ButtonGrid({ baby }) {
  const navigation = useNavigation();
  return (
    <View style={styles.parentContainer}>
      <LinearGradient
        colors={[indigo[50], indigo[900]]}
        locations={[0.3, 0.35]}
        style={styles.background}
      />
      <HStack
        shadow={4}
        bg="transparent"
        padding={4}
        flexDir="row"
        justifyContent="space-between"
        w="100%"
      >
        <HomeImage />
        <Date />
      </HStack>
      <Box shadow={6} style={styles.container}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Bottle")}
          bg="indigo.700"
          shadow={6}
          justifyContent="center"
          alignItems="center"
        >
          <Center>
            <MaterialCommunityIcons
              name="baby-bottle-outline"
              size={36}
              color="white"
            />
          </Center>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Sleep")}
          bg="indigo.700"
          shadow={6}
          justifyContent="center"
          alignItems="center"
        >
          <Center>
            <MaterialCommunityIcons name="sleep" size={36} color="white" />
          </Center>
        </Pressable>
        <Pressable
          bg="indigo.700"
          shadow={6}
          justifyContent="center"
          alignItems="center"
          style={styles.button}
          onPress={() => navigation.navigate("Medicine")}
        >
          <Center>
            <Fontisto name="pills" size={36} color="white" />
          </Center>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Pump")}
          bg="indigo.700"
          shadow={6}
          justifyContent="center"
          alignItems="center"
        >
          <Center>
            <Text style={{ color: "white" }}>Pump</Text>
          </Center>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Breastfeed")}
          bg="indigo.700"
          shadow={6}
          justifyContent="center"
          alignItems="center"
        >
          <Center>
            <Text style={{ color: "white" }}>Feed </Text>
          </Center>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Diaper")}
          bg="indigo.700"
          shadow={6}
          justifyContent="center"
          alignItems="center"
        >
          <Center>
            <MaterialIcons
              name="baby-changing-station"
              size={36}
              color="white"
            />
          </Center>
        </Pressable>
        <Pressable
          style={styles.button}
          bg="emerald.700"
          shadow={6}
          justifyContent="center"
          alignItems="center"
        >
          <Center style={styles.addButtonContent}>
            <AntDesign name="plussquare" size={36} color="white" />
            {/* <Text style={styles.addButtonText}>Add Activity</Text> */}
          </Center>
        </Pressable>
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 5,
  },
  parentContainer: {
    width: "100%",
    alignItems: "center",
  },
  button: {
    width: Dimensions.get("window").width / 3 - 2,
    height: Dimensions.get("window").width / 3 - 30,
    margin: 1,
    borderRadius: 5,
  },
  addButtonContent: {
    alignItems: "center",
  },
  addButtonText: {
    color: indigo[50],
    padding: 2,
  },
  background: {
    height: "100%",
    width: "100%",
    position: "absolute",
  },
});
