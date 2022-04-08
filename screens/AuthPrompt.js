import React, { useState, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { AuthContext } from "../context/GlobalContext";
import { Text, Box, Center, Divider, VStack, Pressable } from "native-base";
import GoogleLogin from "../components/GoogleLogin";
import { Ionicons } from "@expo/vector-icons";
import AuthHelpPopup from "../components/AuthHelpPopup";
import AppleLogin from "../components/AppleLogin";
import Logo from "../components/Logo";
export default function AuthPrompt() {
  const [isAuthenticated, setIsAuthenticated] = useContext(AuthContext);
  const [helpIsOpen, setHelpOpen] = useState(false);
  const authenticateUser = () => {
    setIsAuthenticated(true);
  };
  const openHelpDialog = () => {
    setHelpOpen(true);
  };
  const closeHelpDialog = () => {
    setHelpOpen(false);
  };
  return (
    <View style={styles.container}>
      <VStack
        h="80%"
        w="100%"
        alignItems="center"
        space={20}
        justifyContent="flex-start"
      >
        <Center>
          <Logo />
        </Center>
        <Box
          style={styles.box}
          bg="indigo.50"
          padding={5}
          rounded="sm"
          shadow={6}
          position="relative"
        >
          <AuthHelpPopup
            closeHelpDialog={closeHelpDialog}
            helpIsOpen={helpIsOpen}
          />
          <Pressable
            onPress={() => openHelpDialog()}
            position="absolute"
            top={1}
            right={1}
          >
            <Center>
              <Ionicons name="help-circle-outline" size={22} color="grey" />
            </Center>
          </Pressable>

          <Text
            fontWeight="600"
            margin={3}
            fontSize={18}
            w="100%"
            textAlign="center"
            color="black"
          >
            Welcome in or welcome back Sign in to get started
          </Text>
          <Divider my={1} bg="indigo.900" opacity={0.25} />
          <Center w="100%">
            <GoogleLogin
              isAuthenticated={isAuthenticated}
              authenticateUser={authenticateUser}
            />
            <AppleLogin />
          </Center>
        </Box>
      </VStack>
    </View>
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
