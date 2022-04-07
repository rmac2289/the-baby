import React, { useState } from "react";
import { HStack, Text, Center, Box, Pressable, Image } from "native-base";
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
              key={icon.route}
              style={styles.button}
              onPress={() => navigation.navigate(icon.route)}
              bg={icon.bg}
              shadow={6}
              justifyContent="center"
              alignItems="center"
              rounded="full"
              opacity={0.9}
            >
              <Center marginTop="1" h="100%" w="75" justifyContent="center">
                <Icon uri={icon.uri} route={icon.route} />
                <Text fontWeight="600" marginTop="1" color="indigo.50">
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
