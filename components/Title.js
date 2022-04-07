import React, { useContext } from "react";
import { Text } from "native-base";
import { headerColor } from "../utils/cssVars";

export default function Home({ data }) {
  return (
    <Text
      style={{
        fontFamily: "Fredoka_One",
        fontSize: 32,
        paddingTop: 15,
        color: headerColor.primary,
      }}
    >
      {data.babies[0].name}
    </Text>
  );
}
