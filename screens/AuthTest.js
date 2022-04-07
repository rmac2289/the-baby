import React, { useEffect, useContext } from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { Button, Text } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, View } from "react-native";
import { AuthContext } from "../context/GlobalContext";
WebBrowser.maybeCompleteAuthSession();

export default function AuthTest() {
  const [isAuthenticated, setIsAuthenticated] = useContext(AuthContext);
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      "1001745207064-hcus0mq46tt1hjcem5ond7d4lsj6hmhi.apps.googleusercontent.com",
    iosClientId:
      "1001745207064-hcus0mq46tt1hjcem5ond7d4lsj6hmhi.apps.googleusercontent.com",
    clientSecret: "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",
    scopes: ["profile", "email"],
  });
  console.log("REQUEST", request);
  console.log("RESPONSE", response);

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      console.log(authentication);
      setIsAuthenticated(true);
    }
  }, [response]);
  console.log(isAuthenticated);
  return (
    <Button
      style={styles.button}
      disabled={!request}
      title="Login"
      onPress={() => {
        promptAsync();
      }}
    >
      <View style={styles.insideButton}>
        <Ionicons
          style={styles.icon}
          name="logo-google"
          size={32}
          color="#2f0D44"
        />
        <Text style={styles.buttonText}>Login with Google</Text>
      </View>
    </Button>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#312e81",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#fff",
    width: "70%",
    height: 50,
    padding: 10,
    justifyContent: "center",
    alignItems: "flex-start",
    margin: 10,
    borderRadius: 50,
  },
  buttonText: {
    color: "#2F0D44",
    fontSize: 18,
  },
  icon: {
    marginRight: 20,
  },
  insideButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
  },
});
