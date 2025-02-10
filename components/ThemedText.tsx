import { colors } from "@/constants/color";
import { useFonts } from "expo-font";
import { StyleSheet, TextProps, Text } from "react-native";

type props = TextProps & {
  variant?: "title" | "subtitle" | "stylisedText" | "text";
  textColor?: keyof typeof colors.text;
};

export function ThemedText({ variant, textColor, ...rest }: props) {
  const [fontsLoaded] = useFonts({
    PlayFairDisplayItalic: require("@/assets/fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf"),
    PlayFairDisplay: require("@/assets/fonts/PlayfairDisplay-VariableFont_wght.ttf"),
  });

  if (!fontsLoaded) return null;
  return (
    <Text
      style={[styles[variant ?? "text"], { color: colors.text[textColor] }]}
      {...rest}
    ></Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "PlayFairDisplayItalic",
    fontSize: 20,
  },
  subtitle: {
    fontFamily: "PlayFairDisplayItalic",
    fontSize: 18,
  },
  stylisedText: {
    fontFamily: "PlayFairDisplay",
    fontSize: 15,
  },
  text: {
    // fontFamily: "PlayFairDisplay",
    fontSize: 15,
  },
});
