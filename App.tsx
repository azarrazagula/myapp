import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My First React </Text>
      <Text style={styles.subtitle}>
        This project uses Expo, which is the easiest way to start with React
        Native.
      </Text>
      <Text style={styles.step}>1. Edit App.tsx</Text>
      <Text style={styles.step}>2. Run npm start</Text>
      <Text style={styles.step}>3. Open it in Expo Go or a simulator</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7fb",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#14213d",
    marginBottom: 12,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: "#33415c",
    marginBottom: 24,
    textAlign: "center",
  },
  step: {
    fontSize: 16,
    color: "#1d3557",
    marginBottom: 8,
  },
});
