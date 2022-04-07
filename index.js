import { registerRootComponent } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import App from "./App";
import { GlobalContextProvider } from "./context/GlobalContext";
import { NativeBaseProvider } from "native-base";
import { SSRProvider } from "@react-aria/ssr";

const AppRoot = () => {
  return (
    <NavigationContainer>
      <GlobalContextProvider>
        <SSRProvider>
          <NativeBaseProvider>
            <App />
          </NativeBaseProvider>
        </SSRProvider>
      </GlobalContextProvider>
    </NavigationContainer>
  );
};
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(AppRoot);
