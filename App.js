import React, { useState } from "react";
import AuthPrompt from "./screens/AuthPrompt";
import Home from "./screens/Home";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Bottle from "./screens/Bottle";
import Breastfeed from "./screens/Breastfeed";
import Pump from "./screens/Pump";
import Sleep from "./screens/Sleep";
import Medicine from "./screens/Medicine";
import Diaper from "./screens/Diaper";

const Stack = createNativeStackNavigator();

export default function App() {
  let baby = {
    name: "Danny",
    bday: "01/29/2022",
  };

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const authenticateUser = () => {
    setIsAuthenticated(true);
  };
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator>
          {!isAuthenticated ? (
            <Stack.Screen name="AuthPrompt">
              {(props) => (
                <AuthPrompt
                  {...props}
                  authenticateUser={authenticateUser}
                  isAuthenticated={isAuthenticated}
                />
              )}
            </Stack.Screen>
          ) : (
            <Stack.Screen name="Home">
              {(props) => <Home {...props} baby={baby} />}
            </Stack.Screen>
          )}
          <Stack.Screen name="Bottle" component={Bottle} />
          <Stack.Screen name="Medicine" component={Medicine} />
          <Stack.Screen name="Pump" component={Pump} />
          <Stack.Screen name="Breastfeed" component={Breastfeed} />
          <Stack.Screen name="Diaper" component={Diaper} />
          <Stack.Screen name="Sleep" component={Sleep} />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
