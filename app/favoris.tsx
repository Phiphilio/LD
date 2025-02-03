import { ThemedText } from "@/components/ThemedText";
import { useCallback } from "react";
import { colors } from "@/constants/color";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import type { SortableGridRenderItem } from "react-native-sortables";
import Sortable from "react-native-sortables";

const DATA = Array.from({ length: 12 }, (_, index) => `Item ${index + 1}`);

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
      <Sortable.Grid
        columns={3}
        data={DATA}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>{item}</Text>
          </View>
        )}
        rowGap={10}
        columnGap={10}
        hapticsEnabled={false}
      />
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
  card: {
    backgroundColor: "#36877F",
    height: 100,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
