import ActivityScreenLayout from "./ActivityScreenLayout";
import React, { useState, useContext } from "react";
import { Center, Box, Text, Input, Radio, Stack, Icon } from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import { View } from "react-native";

export default function AddBaby() {
  const [value, setValue] = useState([]);

  return (
    <Center
      shadow={6}
      padding={4}
      rounded="sm"
      margin={3}
      bg="indigo.50"
      width="85%"
    >
      <Stack space={4}>
        <Box w="95%">
          <Text>Name</Text>
          <Input
            w={{
              base: "75%",
              md: "25%",
            }}
            placeholderTextColor="muted.500"
            placeholder="Name"
            borderWidth={1}
            borderColor="indigo.300"
            _focus={{ borderColor: "indigo.800" }}
            fontSize={14}
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name="baby" size={24} />}
                size={5}
                ml="2"
                color="muted.500"
              />
            }
          />
        </Box>

        <Radio.Group
          name="genderRadio"
          accessibilityLabel="choose gender"
          value={value}
          onChange={(nextValue) => {
            setValue(nextValue);
          }}
          colorScheme="indigo"
          width="75%"
        >
          <Text>Gender</Text>

          <Stack
            direction={{
              base: "row",
              md: "row",
            }}
            alignItems="center"
            space={4}
          >
            <Radio color="indigo.800" value="boy" size="sm" my={1}>
              Boy
            </Radio>
            <Radio color="indigo.800" value="girl" size="sm" my={1}>
              Girl
            </Radio>
          </Stack>
        </Radio.Group>
      </Stack>
    </Center>
  );
}
