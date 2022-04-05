import {
  useDisclose,
  Button,
  Actionsheet,
  Box,
  Center,
  Text,
  Divider,
  SmallCloseIcon,
  QuestionIcon,
  InfoIcon,
} from "native-base";
import {
  SimpleLineIcons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { View } from "react-native";
import React from "react";

export default function MainMenu() {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <Center w="50%" position="absolute" left={3} bottom={3}>
      <Button
        shadow={6}
        rounded={10}
        size="lg"
        alignSelf="flex-start"
        bg="indigo.900"
        onPress={onOpen}
        borderColor="white"
        borderWidth={2}
      >
        Menu
      </Button>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content bg="indigo.900">
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Text
              fontSize="18"
              color="indigo.50"
              fontWeight="bold"
              _dark={{
                color: "indigo.300",
              }}
            >
              Menu
            </Text>
          </Box>
          <Divider my="1" h="0.25" />

          <Actionsheet.Item>
            <View style={{ flexDirection: "row" }}>
              <SimpleLineIcons name="settings" size={24} color="#eef2ff" />
              <Text marginLeft={5} fontSize={16} color="indigo.50">
                Settings
              </Text>
            </View>
          </Actionsheet.Item>

          <Actionsheet.Item>
            <View style={{ flexDirection: "row" }}>
              <AntDesign name="areachart" size={24} color="#eef2ff" />
              <Text marginLeft={5} fontSize={16} color="indigo.50">
                Data
              </Text>
            </View>
          </Actionsheet.Item>

          <Actionsheet.Item>
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="help-circle-outline"
                size={24}
                color="#eef2ff"
              />
              <Text marginLeft={5} fontSize={16} color="indigo.50">
                Help
              </Text>
            </View>
          </Actionsheet.Item>

          <Actionsheet.Item onPress={onClose}>
            <View style={{ flexDirection: "row" }}>
              <SmallCloseIcon color="indigo.50" size="sm" />
              <Text marginLeft={5} fontSize={16} color="indigo.50">
                Cancel
              </Text>
            </View>
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </Center>
  );
}
