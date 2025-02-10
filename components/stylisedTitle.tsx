import { View, ViewProps } from "react-native";
import { ThemedText } from "./ThemedText";
import { Children } from "react";

type props = ViewProps & {
  text?: string;
};
export function StylisedTitle({ text, ...rest }: props) {
  return (
    <View {...rest}>
      <ThemedText variant="title" textColor="white">
        {text}
      </ThemedText>
    </View>
  );
}
