import { colors } from "@/constants/color";
import { View, StyleSheet, Text } from "react-native";

export default function Dinner() {
  const backgroundColor = colors.background.glassPurple;
  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <Text>test</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
