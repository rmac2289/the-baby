import React, { useContext } from "react";
import AuthPrompt from "./screens/AuthPrompt";
import Home from "./screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Bottle from "./screens/Bottle";
import Breastfeed from "./screens/Breastfeed";
import Pump from "./screens/Pump";
import Sleep from "./screens/Sleep";
import Medicine from "./screens/Medicine";
import Diaper from "./screens/Diaper";
import { GlobalContext } from "./context/GlobalContext";
import TodaysDate from "./components/Date";
const Stack = createNativeStackNavigator();

export default function App() {
  const [isAuthenticated] = useContext(GlobalContext);
  const options = {
    headerStyle: {
      backgroundColor: "#eef2ff",
    },
    headerTitleStyle: {
      color: "#312e81",
    },
    headerShadowVisible: false,
    animation: "simple_push",
    headerTitle: () => <TodaysDate />,
  };
  return (
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
  );
}
