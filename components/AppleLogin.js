import React, { useState, useContext } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { AuthContext } from "../context/GlobalContext";
import { Center } from "native-base";

import * as AppleAuthentication from "expo-apple-authentication";
export default function AuthPrompt() {
  const [isAuthenticated, setIsAuthenticated] = useContext(AuthContext);

  return (
    <Center w="100%" shadow={6}>
      <AppleAuthentication.AppleAuthenticationButton
        style={styles.button}
        buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
        buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
        cornerRadius={5}
        onPress={async () => {
          try {
            const credential = await AppleAuthentication.signInAsync({
              requestedScopes: [
                AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                AppleAuthentication.AppleAuthenticationScope.EMAIL,
              ],
            });
            console.log(credential);
            setIsAuthenticated(true);
          } catch (e) {
            if (e.code === "ERR_CANCELED") {
              // handle that the user canceled the sign-in flow
            } else {
              Alert.alert("Authentication failed.");
            }
          }
        }}
      />
    </Center>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#312e81",
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
  },
  button: {
    width: "100%",
    height: 50,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  box: {
    width: "80%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
});
