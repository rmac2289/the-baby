import React from "react";
import { HStack, VStack, Center, Box, Pressable, Image } from "native-base";
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
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPersonBreastfeeding } from "@fortawesome/free-solid-svg-icons";

const icons = [
  {
    route: "Bottle",
    uri: "https://res.cloudinary.com/de36vblcl/image/upload/v1649276415/The-Baby/bottle.png",
  },
  {
    route: "Diaper",
    uri: "https://res.cloudinary.com/de36vblcl/image/upload/v1649276415/The-Baby/diaper.png",
  },
  {
    route: "Breastfeed",
    uri: "https://res.cloudinary.com/de36vblcl/image/upload/v1649276415/The-Baby/breastfeeding.png",
  },
  {
    route: "Sleep",
    uri: "https://res.cloudinary.com/de36vblcl/image/upload/v1649276415/The-Baby/crib.png",
  },
  {
    route: "Medicine",
    uri: "https://res.cloudinary.com/de36vblcl/image/upload/v1649276415/The-Baby/medicine.png",
  },
  {
    route: "Pump",
    uri: "https://res.cloudinary.com/de36vblcl/image/upload/v1649276415/The-Baby/pump.png",
  },
];

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
        {icons.map((icon, index) => {
          return (
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate(icon.route)}
              bg="indigo.700"
              shadow={6}
              justifyContent="center"
              alignItems="center"
            >
              <Center>
                <Image
                  source={{
                    uri: icon.uri,
                  }}
                  alt={icon.route}
                  size="xs"
                  style={
                    icon.route === "Bottle" && {
                      transform: [{ rotate: "-20deg" }],
                    }
                  }
                />
              </Center>
            </Pressable>
          );
        })}
        <Pressable
          style={styles.button}
          bg="emerald.700"
          shadow={6}
          justifyContent="center"
          alignItems="center"
        >
          <Center style={styles.addButtonContent}>
            <AntDesign name="plussquare" size={40} color="white" />
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
