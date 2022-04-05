import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import Ionicons from "@expo/vector-icons/Ionicons";
import Title from "../components/Title";
import { AuthContext } from "../context/GlobalContext";

export default function AuthPrompt() {
  const [setIsAuthenticated] = useContext(AuthContext);
  const authenticateUser = () => {
    setIsAuthenticated(true);
  };
  return (
    <View style={styles.container}>
      <Title />
      <Pressable style={styles.button} onPress={authenticateUser}>
        <View style={styles.insideButton}>
          <Ionicons
            style={styles.icon}
            name="logo-google"
            size={32}
            color="#2f0D44"
          />
          <Text style={styles.buttonText}>Login with Google</Text>
        </View>
      </Pressable>
      <Pressable style={styles.button} onPress={authenticateUser}>
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
