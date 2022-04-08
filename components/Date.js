import React, { useContext } from "react";
import { Badge, Box, Text, Pressable, VStack, Divider } from "native-base";
import { StyleSheet, View } from "react-native";
import { formatDate, calculateAgeInWeeks } from "../utils/helperFunctions";
import { GlobalContext } from "../context/GlobalContext";
import { indigo } from "../utils/cssVars";
import { AntDesign } from "@expo/vector-icons";
export default function TodaysDate() {
  const [data] = useContext(GlobalContext);
  let date = new Date();
  let today = formatDate(date);
  let fullDate = today.split(",");
  return (
    <Box flex={0.75} bg="indigo.900" rounded="sm" shadow={6}>
      <Pressable rounded="md">
        <Badge p={2} alignItems="center" bg="indigo.900" rounded="md">
          <VStack space={3}>
            <Box style={styles.dateView}>
              <AntDesign
                style={styles.icon}
                name="calendar"
                size={20}
                color="white"
              />
              <Text color="white" fontSize={20}>
                {fullDate[0]}
              </Text>
              <Text color="white" fontSize={20}>
                {fullDate[1]}, {fullDate[2]}
              </Text>
              <Divider thickness={1} bg="white" />
            </Box>

            <Text style={styles.age}>
              {calculateAgeInWeeks(data.babies[0].dob)} weeks old!
            </Text>
          </VStack>
        </Badge>
      </Pressable>
    </Box>
  );
}

const styles = StyleSheet.create({
  age: {
    color: indigo[50],
    fontWeight: "700",
    textAlign: "center",
  },
  dateView: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
  },
  icon: {
    position: "absolute",
    top: -3,
    right: -38,
  },
});
