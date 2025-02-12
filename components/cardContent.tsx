import { useFonts } from "expo-font";
import { StyleSheet, Text, View } from "react-native";
import { ThemedText } from "./ThemedText";
type props = {
  name: string;
  info: string;
};
export function CardContent({ name, info }: props) {
  const [fontsLoaded] = useFonts({
    PlayFairDisplayItalic: require("@/assets/fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf"),
    PlayFairDisplay: require("@/assets/fonts/PlayfairDisplay-VariableFont_wght.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <ThemedText variant="title">{name}</ThemedText>
      <ThemedText variant="text">
        {info === "Alcoholic" ? "alcoolisée" : "non alcoolisé"}
      </ThemedText>
      <ThemedText variant="subtitle">Ingrédients</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  title: {
    fontFamily: "PlayFairDisplayItalic",
    fontSize: 25,
  },
  description: {
    fontFamily: "PlayFairDisplay",
  },
});
