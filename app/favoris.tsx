import { ThemedText } from "@/components/ThemedText";
import { colors } from "@/constants/color";
import { SafeAreaView, View, StyleSheet, Pressable, Text } from "react-native";
import { useCallback, useContext, useRef } from "react";
import Animated, { useAnimatedRef } from "react-native-reanimated";
import type { SortableGridRenderItem } from "react-native-sortables";
import Sortable from "react-native-sortables";
import { recetteFavContext } from "@/constants/favorisContext";
import { CocktailCard } from "@/components/cocktailCard";

const DATA = Array.from({ length: 30 }, (_, index) => `Item ${index + 1}`);

export function Favoris() {
  const backgroundColor = colors.background.glassPurple;
  const header = colors.Card.lightPurple;
  const scrollableRef = useAnimatedRef<Animated.ScrollView>();

  const context = useContext(recetteFavContext);
  if (!context) {
    throw new Error("erreur");
  }

  const { favoris } = context;
  const renderItem = useCallback<SortableGridRenderItem<string>>(
    ({ item }) => (
      <CocktailCard
        name={item?.name ?? ""}
        alcoholic={item?.alcohol ?? ""}
        image={item?.urlImage ?? ""}
        card={styles.card}
        cardImage={styles.image}
        cardTextSection={styles.text}
      />
    ),
    []
  );

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: backgroundColor }]}
    >
      <Animated.ScrollView
        contentContainerStyle={styles.contentContainer}
        ref={scrollableRef}
      >
        <Sortable.Grid
          columns={2}
          data={favoris}
          renderItem={renderItem}
          rowGap={10}
          columnGap={10}
          showDropIndicator={true}
          hapticsEnabled={false}
          scrollableRef={scrollableRef}
        />
      </Animated.ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
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
  contentContainer: {
    flex: 1,
    flexGrow: 1,
    width: 350,
    height: 1000,
    padding: 10,
    // backgroundColor: "yellow",
  },
  card: {
    // backgroundColor: "#36877F",
    // height: 100,
    borderRadius: 10,
    width: 150,
    height: 170,
    backgroundColor: "white",
  },
  image: {
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  text: {
    alignItems: "center",
    justifyContent: "center",
  },
});
