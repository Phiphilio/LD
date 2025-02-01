import { useFonts } from "expo-font";
import { StyleSheet, Text, View } from "react-native";
type props = {
  name: string;
  alcohol: string;
};
export function CardContent({ name, alcohol }: props) {
  const [fontsLoaded] = useFonts({
    PlayFairDisplayItalic: require("@/assets/fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf"),
    PlayFairDisplay: require("@/assets/fonts/PlayfairDisplay-VariableFont_wght.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.description}>
        {alcohol === "Alcoholic" ? "alcoolisée" : "non alcoolisé"}
      </Text>
      <Text style={styles.title}>Ingrédients</Text>
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
