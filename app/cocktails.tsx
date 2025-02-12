import { View, StyleSheet } from "react-native";
import { CategorieCard } from "@/components/categorieCard";
import { RecipeCard } from "@/components/recipeCard";
import { StylisedTitle } from "@/components/stylisedTitle";
import { colors } from "@/constants/color";
import { useFetchData } from "@/hooks/useFecthData";

export default function Cocktails() {
  const backgroundColor = colors.background.glassPurple;
  const { data, loading, error } = useFetchData(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=p"
  );

  const drinkList = data ?? []; // Si `data` est null, on retourne un tableau vide
  return (
    <View style={[styles.container, { backgroundColor: backgroundColor }]}>
      <StylisedTitle
        text="COCKTAILS OF THE WEEK"
        color="whiteVariant"
        style={styles.subtile}
      />
      <View style={styles.recipeSection}>
        <RecipeCard
          img={drinkList[8]?.strDrinkThumb ?? ""}
          title={drinkList[8]?.strDrink ?? ""}
          classification={drinkList[8]?.strAlcoholic ?? ""}
        />
      </View>
      <StylisedTitle
        text="CATEGORIES"
        color="whiteVariant"
        style={styles.subtile}
      />
      <View style={styles.categoriesSection}>
        <CategorieCard text="Alcoholic" img="alcoholic" />
        <CategorieCard text="Glasses" img="glasses" />
        <CategorieCard text="Coktail's ingredient " img="ingredientCoktail" />
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
