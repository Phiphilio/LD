import { colors } from "@/constants/color";
import { StyleSheet, Text, View } from "react-native";

export default function index() {
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
