import { Box } from "native-base";
import { StyleSheet, View, StatusBar } from "react-native";
import ButtonGrid from "../components/ButtonGrid";

export default function Home({ baby }) {
  return (
    <Box bg="indigo.50" style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ButtonGrid baby={baby} />
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
