import React, { useContext, useState, useEffect } from "react";
import { Text } from "native-base";
import AuthPrompt from "./screens/AuthPrompt";
import Home from "./screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Diaper,
  Medicine,
  Pump,
  Breastfeed,
  Bottle,
} from "./screens/ActivityScreens";
import Sleep from "./screens/Sleep";
import { GlobalContext } from "./context/GlobalContext";
import { indigo, headerColor } from "./utils/cssVars";
import * as Font from "expo-font";
const Stack = createNativeStackNavigator();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(true);
  const loadFonts = async () => {
    await Font.loadAsync({
      // Load a font `Montserrat` from a static resource
      Chelsea_Market: require("./assets/fonts/Chelsea_Market/ChelseaMarket-Regular.ttf"),
      Fredoka_One: require("./assets/fonts/Fredoka_One/FredokaOne-Regular.ttf"),
      Sniglet: require("./assets/fonts/Sniglet/Sniglet-Regular.ttf"),
    });
    setFontLoaded(true);
  };
  useEffect(() => {
    loadFonts();
  });
  const [data, isAuthenticated] = useContext(GlobalContext);
  const options = {
    headerStyle: {
      backgroundColor: indigo[50],
    },
    headerTitleStyle: {
      color: indigo[900],
      fontSize: 24,
    },
    headerShadowVisible: false,
    animation: "simple_push",
    headerTitle: () => (
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
    ),
  };
  return fontLoaded ? (
    <Stack.Navigator screenOptions={options}>
      {!isAuthenticated ? (
        <Stack.Screen name="AuthPrompt" component={AuthPrompt} />
      ) : (
        <>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Bottle" component={Bottle} />
          <Stack.Screen name="Medicine" component={Medicine} />
          <Stack.Screen name="Pump" component={Pump} />
          <Stack.Screen name="Breastfeed" component={Breastfeed} />
          <Stack.Screen name="Diaper" component={Diaper} />
          <Stack.Screen name="Sleep" component={Sleep} />
        </>
      )}
    </Stack.Navigator>
  ) : null;
}
