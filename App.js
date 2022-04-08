import React, { useContext, useState, useEffect } from "react";
import AuthPrompt from "./screens/AuthPrompt";
import Home from "./screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CurrentScreen } from "./screens/ActivityScreens";
import { GlobalContext, AuthContext } from "./context/GlobalContext";
import { indigo } from "./utils/cssVars";
import * as Font from "expo-font";
import Title from "./components/Title";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [data] = useContext(GlobalContext);
  const [isAuthenticated] = useContext(AuthContext);

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
  const options = {
    headerStyle: {
      backgroundColor: indigo[50],
    },
    headerTitleStyle: {
      color: indigo[900],
      fontSize: 24,
    },
    headerShadowVisible: false,

    headerTitle: () => <Title data={data} />,
  };

  return fontLoaded ? (
    <Stack.Navigator screenOptions={options}>
      {!isAuthenticated ? (
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="AuthPrompt"
          component={AuthPrompt}
        />
      ) : (
        <>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Activity" component={CurrentScreen} />
        </>
      )}
    </Stack.Navigator>
  ) : null;
}
