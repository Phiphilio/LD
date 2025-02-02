import { ThemedText } from "@/components/ThemedText";
import { colors } from "@/constants/color";
import { SafeAreaView, StyleSheet, View } from "react-native";

export default function Favoris() {
  const backgroundColor = colors.background.purple;
  const header = colors.Card.lightPurple;
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: backgroundColor }]}
    >
      <View style={[styles.header, { backgroundColor: header }]}>
        <ThemedText variant="title"> Favoris </ThemedText>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    paddingTop: 15,
    paddingBottom: 25,
    borderRadius: 24,
    width: 300,
  },
});
