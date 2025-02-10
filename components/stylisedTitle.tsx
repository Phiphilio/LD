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
      {console.log(color)}
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
  },
});
