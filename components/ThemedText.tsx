import { useFonts } from "expo-font";
import { StyleSheet, TextProps, Text } from "react-native";

type props = TextProps & {
  variant?: "title" | "subtitle" | "description";
};

export function ThemedText({ variant, ...rest }: props) {
  const [fontsLoaded] = useFonts({
    PlayFairDisplayItalic: require("@/assets/fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf"),
    PlayFairDisplay: require("@/assets/fonts/PlayfairDisplay-VariableFont_wght.ttf"),
  });

  if (!fontsLoaded) return null;
  return <Text style={styles[variant ?? "description"]} {...rest}></Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "PlayFairDisplayItalic",
    fontSize: 30,
  },
  subtitle: {
    fontFamily: "PlayFairDisplayItalic",
    fontSize: 20,
  },
  description: {
    fontFamily: "PlayFairDisplay",
    fontSize: 12,
  },
});
