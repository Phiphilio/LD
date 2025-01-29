import { CocktailCard } from "@/components/cocktailCard";
import { SearchBar } from "@/components/searchBar";
import { colors } from "@/constants/color";
import { useFetchData } from "@/hooks/useFecthData";
import { useEffect } from "react";
import { Text, View, SafeAreaView, StyleSheet, FlatList } from "react-native";

export default function Index() {
  const backgroundColor = colors.background.purple;
  const { data, loading, error } = useFetchData(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=p"
  );

  console.log("Données reçues :", data);

  const drinkList = data ?? []; // Si `data` est null, on retourne un tableau vide

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: backgroundColor }]}
    >
      <View style={styles.header}>
        <SearchBar />
      </View>
      <View style={styles.cardContainer}>
        <FlatList
          data={drinkList}
          renderItem={({ item }) => (
            <CocktailCard
              name={item?.strDrink ?? ""}
              alcoholic={item?.strAlcoholic ?? ""}
              image={item?.strDrinkThumb ?? ""}
            />
          )}
          keyExtractor={(item) => item.idDrink}
          contentContainerStyle={{ gap: 8 }}
          horizontal={true}
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
  },
  cardContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor: "white",
  },
});
