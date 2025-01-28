import { SearchBar } from "@/components/searchBar";
import { colors } from "@/constants/color";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";

export default function Index() {
  const backgroundColor = colors.background.purple;
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: backgroundColor }]}
    >
      <View style={styles.header}>
        <SearchBar />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 35,
    paddingBottom: 35,
  },
});
