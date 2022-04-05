import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Badge, Box, Text, Pressable } from "native-base";
import { formatDate } from "../utils/helperFunctions";
import DatePicker from "./DatePicker";

export default function TodaysDate() {
  let date = new Date();
  let today = formatDate(date);

  return (
    <Box alignItems="center">
      <Pressable>
        <Badge
          bg="indigo.50"
          borderBottomColor="indigo.900"
          borderBottomWidth={2}
          bo
        >
          <Text color="indigo.900" fontSize={20}>
            {today}
          </Text>
        </Badge>
      </Pressable>
    </Box>
  );
}
