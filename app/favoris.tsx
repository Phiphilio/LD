import { ThemedText } from "@/components/ThemedText";
import { useCallback } from "react";
import { colors } from "@/constants/color";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import Animated, { useAnimatedRef } from "react-native-reanimated";
import type { SortableGridRenderItem } from "react-native-sortables";
import Sortable from "react-native-sortables";

const DATA = Array.from({ length: 30 }, (_, index) => `Item ${index + 1}`);

export default function Favoris() {
  const backgroundColor = colors.background.purple;
  const header = colors.Card.lightPurple;

  const scrollableRef = useAnimatedRef<Animated.ScrollView>();

  const renderItem = useCallback<SortableGridRenderItem<string>>(
    ({ item }) => (
      <View style={styles.card}>
        <Text style={styles.text}>{item}</Text>
      </View>
    ),
    []
  );
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: backgroundColor }]}
    >
      <View style={[styles.header, { backgroundColor: header }]}>
        <ThemedText variant="title"> Favoris </ThemedText>
      </View>
      <Animated.ScrollView
        contentContainerStyle={styles.contentContainer}
        ref={scrollableRef}
      >
        <Sortable.Grid
          columns={2}
          data={DATA}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.text}>{item}</Text>
            </View>
          )}
          rowGap={10}
          columnGap={10}
          scrollableRef={scrollableRef}
          showDropIndicator={true}
          hapticsEnabled={false}
        />
      </Animated.ScrollView>
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
    marginBottom: 50,
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
  contentContainer: {
    width: 350,
    padding: 10,
    //backgroundColor: "yellow",
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});
