import React from "react";
import { Image, Center, Text, HStack } from "native-base";
import { faBabyCarriage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { indigo } from "../utils/cssVars";
export default function Logo() {
  return (
    <Center>
      <HStack space={4}>
        <FontAwesomeIcon icon={faBabyCarriage} color={indigo[50]} size={42} />

        <Text color="indigo.50" fontFamily="Fredoka_One" fontSize={32}>
          The Baby!
        </Text>
      </HStack>
    </Center>
  );
}
