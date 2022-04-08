import React, { useEffect, useContext } from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { Button, Text } from "native-base";
import { StyleSheet, View } from "react-native";
import { AuthContext } from "../context/GlobalContext";
import Icon from "./Icon";

WebBrowser.maybeCompleteAuthSession();

export default function GoogleLogin() {
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
      rounded="md"
      disabled={!request}
      shadow={6}
      title="Login"
      onPress={() => {
        promptAsync();
      }}
    >
      <View style={styles.insideButton}>
        <Icon
          route="google"
          uri="https://res.cloudinary.com/de36vblcl/image/upload/v1649432332/The-Baby/google.png"
        />
        <Text style={styles.buttonText}>Sign in with Google</Text>
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
    backgroundColor: "#FFF",
    width: "100%",
    height: 50,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "black",
    fontSize: 17,
    fontWeight: "500",
  },
  icon: {
    marginRight: 5,
  },
  insideButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
