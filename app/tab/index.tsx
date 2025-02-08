import { CocktailCard } from "@/components/cocktailCard";
import { SearchBar } from "@/components/searchBar";
import { colors } from "@/constants/color";
import { useFetchData } from "@/hooks/useFecthData";
import { BlurView } from "expo-blur";
import { Text, View, SafeAreaView, StyleSheet, FlatList } from "react-native";

export default function Index() {
  const backgroundColor = colors.background.purple;
  const { data, loading, error } = useFetchData(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=p"
  );

  const drinkList = data ?? []; // Si `data` est null, on retourne un tableau vide

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: backgroundColor }]}
    >
      <BlurView intensity={1} tint="dark" style={styles.header}>
        <SearchBar />
      </BlurView>

      <View style={styles.cardContainer}>
        <FlatList
          data={drinkList}
          renderItem={({ item }) => (
            <CocktailCard
              name={item?.strDrink ?? ""}
              alcoholic={item?.strAlcoholic ?? ""}
              image={item?.strDrinkThumb ?? ""}
              card={styles.card}
              cardImage={styles.cardImage}
              cardTextSection={styles.cardTextSection}
            />
          )}
          keyExtractor={(item) => item.idDrink}
          contentContainerStyle={{ gap: 120, marginTop: 150 }}
          horizontal={false}
          ListFooterComponent={<View style={{ height: 150 }} />}
        />
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
    position: "absolute",
    zIndex: 3,
    left: 0,
    right: 0,
    //width: 450,
    backgroundColor: "rgba(106, 13, 173, 0.3) ",
  },
  cardContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor: "white",
  },
  card: {
    width: 300,
    height: 300,
    borderRadius: 20,
    backgroundColor: "white",
    //marginLeft: 30,
  },
  cardImage: {
    width: 300,
    height: 300,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    //borderRadius: 10,
  },
  cardTextSection: {
    backgroundColor: "#E6D4F1",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 70,
  },
});
