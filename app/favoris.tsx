import { colors } from "@/constants/color";
import { SafeAreaView, StyleSheet } from "react-native";

export default function Favoris() {
  const backgroundColor = colors.background.purple;
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: backgroundColor }]}
    ></SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
