import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AuthContext } from "../context/GlobalContext";
import { Text, Pressable } from "native-base";
import AuthTest from "./AuthTest";
export default function AuthPrompt() {
  const [isAuthenticated, setIsAuthenticated] = useContext(AuthContext);
  const authenticateUser = () => {
    setIsAuthenticated(true);
  };
  return (
    <View style={styles.container}>
      <Text>Login or signup to get started</Text>
      <AuthTest
        isAuthenticated={isAuthenticated}
        authenticateUser={authenticateUser}
      />
      <Pressable style={styles.button}>
        <View style={styles.insideButton}>
          <Ionicons
            style={styles.icon}
            name="logo-github"
            size={32}
            color="#2f0D44"
          />
          <Text style={styles.buttonText}>Login with GitHub</Text>
        </View>
      </Pressable>
    </View>
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
