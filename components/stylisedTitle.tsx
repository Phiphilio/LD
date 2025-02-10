import { StyleSheet, View, ViewProps } from "react-native";
import { ThemedText } from "./ThemedText";
import { colors } from "@/constants/color";

type props = ViewProps & {
  text?: string;
  color: keyof typeof colors.text;
};

export function StylisedTitle({ text, color, ...rest }: props) {
  return (
    <View style={[styles.container, { borderLeftColor: color }]} {...rest}>
      <ThemedText variant="subtitle" textColor={color}>
        {text}
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: 160,
    borderLeftWidth: 1,
    paddingLeft: 10,
    marginLeft: 10, // à supprimer
  },
});
