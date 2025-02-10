import { StyleSheet, View, ViewProps } from "react-native";
import { ThemedText } from "./ThemedText";
import { colors } from "@/constants/color";

type props = ViewProps & {
  text?: string;
  color: keyof typeof colors.text;
};

export function StylisedTitle({ text, color, style, ...rest }: props) {
  return (
    <View
      style={[styles.container, { borderLeftColor: colors.text[color] }, style]}
      {...rest}
    >
      <ThemedText variant="subtitle" textColor={color} style={styles.text}>
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
  },
  text: {
    padding: 0,
  },
});
