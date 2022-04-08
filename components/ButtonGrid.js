import React, { useState } from "react";
import {
  HStack,
  Text,
  Center,
  Box,
  Pressable,
  Image,
  VStack,
} from "native-base";
import { StyleSheet, View, Dimensions } from "react-native";
import Icon from "./Icon";
import { useNavigation } from "@react-navigation/native";
import HomeImage from "./HomeImage";
import Date from "./Date";
import { LinearGradient } from "expo-linear-gradient";
import { headerColor, indigo } from "../utils/cssVars";
import AddActivityModal from "./AddActivityModal";

const icons = [
  {
    route: "Bottle",
    uri: "https://res.cloudinary.com/de36vblcl/image/upload/v1649276415/The-Baby/bottle.png",
    bg: "indigo.600",
  },
  {
    route: "Diaper",
    uri: "https://res.cloudinary.com/de36vblcl/image/upload/v1649276415/The-Baby/diaper.png",
    bg: "indigo.600",
  },
  {
    route: "Breastfeed",
    uri: "https://res.cloudinary.com/de36vblcl/image/upload/v1649276415/The-Baby/breastfeeding.png",
    bg: "indigo.600",
  },
  {
    route: "Sleep",
    uri: "https://res.cloudinary.com/de36vblcl/image/upload/v1649276415/The-Baby/crib.png",
    bg: "indigo.600",
  },
  {
    route: "Medicine",
    uri: "https://res.cloudinary.com/de36vblcl/image/upload/v1649276415/The-Baby/medicine.png",
    bg: "indigo.600",
  },
  {
    route: "Pump",
    uri: "https://res.cloudinary.com/de36vblcl/image/upload/v1649276415/The-Baby/pump.png",
    bg: "indigo.600",
  },
];

export default function ButtonGrid({ baby }) {
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation();
  return (
    <VStack style={styles.parentContainer}>
      <LinearGradient
        colors={["#b45309", "#fefce8"]}
        locations={[0.25, 0.25]}
        style={styles.background}
      />
      <HStack bg="amber.700" padding={1} w="100%" marginTop={5} space={1}>
        <HomeImage />
        <Date />
      </HStack>
      <Box shadow={6} style={styles.container}>
        {icons.map((icon, index) => {
          return (
            <Pressable
              key={icon.route}
              style={styles.button}
              onPress={() => navigation.navigate(icon.route)}
              bg="indigo.900"
              shadow={6}
              justifyContent="center"
              alignItems="center"
              rounded="full"
            >
              <Center marginTop="1" h="100%" w="75" justifyContent="center">
                <Icon uri={icon.uri} route={icon.route} />
                <Text fontWeight="600" marginTop="1" color="white">
                  {icon.route}
                </Text>
              </Center>
            </Pressable>
          );
        })}
        <Pressable
          onPress={() => setModalVisible(true)}
          style={styles.button}
          bg="emerald.700"
          shadow={6}
          justifyContent="center"
          alignItems="center"
        >
          <Center style={styles.addButtonContent}>
            <Image
              source={{
                uri: "https://res.cloudinary.com/de36vblcl/image/upload/v1649276415/The-Baby/plus.png",
              }}
              alt="plus sign"
              size="xs"
            />
          </Center>
        </Pressable>
      </Box>
      <AddActivityModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </VStack>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
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
    opacity: 0.95,
  },
});
