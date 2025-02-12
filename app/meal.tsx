import { Card } from "@/components/card";
import { CategorieCard } from "@/components/categorieCard";
import { RecipeCard } from "@/components/recipeCard";
import { StylisedTitle } from "@/components/stylisedTitle";
import { colors } from "@/constants/color";
import { useFetchData } from "@/hooks/useFecthData";
import { StyleSheet, Text, View } from "react-native";

export function Meal() {
  const backgroundColor = colors.background.glassPurple;
  const { data, loading, error } = useFetchData(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=p"
  );

  const drinkList = data ?? []; // Si `data` est null, on retourne un tableau vide
  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <StylisedTitle
        text="POPULAR DISH OF THE WEEK"
        color="whiteVariant"
        style={styles.subtile}
      />
      <View style={styles.recipeSection}>
        <RecipeCard
          img={drinkList[9]?.strDrinkThumb ?? ""}
          title={drinkList[9]?.strDrink ?? ""}
          classification={drinkList[11]?.strAlcoholic ?? ""}
        />
      </View>
      <StylisedTitle
        text="CATEGORIES"
        color="whiteVariant"
        style={styles.subtile}
      />
      <View style={styles.categoriesSection}>
        <CategorieCard text="type de plat" img="categories" />
        <CategorieCard text="Countries" img="countries" />
        <CategorieCard text="ngredients" img="ingredients" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  alignItems: "center",
    padding: 10,
  },
  subtile: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 12,
  },
  recipeSection: {
    marginLeft: 12,
  },
  categoriesSection: {
    alignItems: "center",
    gap: 15,
  },
});
