import { ThemedText } from "@/components/ThemedText";
import { colors } from "@/constants/color";
import { View, StyleSheet, Text } from "react-native";

export default function Favoris() {
  const backgroundColor = colors.background.glassPurple;
  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <ThemedText variant="stylisedText" textColor="black">
        title
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
