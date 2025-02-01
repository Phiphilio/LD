import { Image, Pressable, SafeAreaView, StyleSheet, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useFetchData } from "@/hooks/useFecthData";
import { useLocalSearchParams, useRouter } from "expo-router";
import { colors } from "@/constants/color";
import { CardContent } from "@/components/cardContent";

export default function Cocktail() {
  const { name } = useLocalSearchParams();
  const colory = colors.Card;
  const router = useRouter();
  const Retour = () => {
    router.back();
  };

  const { data, loading, error } = useFetchData(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
  );
  const dataCocktail = data ?? [];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable
          android_ripple={{ foreground: true, color: "white" }}
          onPress={Retour}
        >
          <AntDesign
            name="arrowleft"
            size={35}
            color={colory.lightPurple}
            style={styles.arrowLeft}
          />
        </Pressable>
        <Pressable android_ripple={{ foreground: true, color: "white" }}>
          <AntDesign
            name="hearto"
            size={35}
            color={colory.lightPurple}
            style={styles.heartIcon}
          />
        </Pressable>
      </View>
      <Image
        source={{ uri: dataCocktail[0]?.strDrinkThumb }}
        style={styles.image}
      />
      <View style={[styles.card, { backgroundColor: colory.lightPurple }]}>
        <CardContent
          name={dataCocktail[0]?.strDrink}
          alcohol={dataCocktail[0]?.strAlcoholic}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6A0DAD",
  },
  header: {
    paddingTop: 20,
    flexDirection: "row",
    position: "absolute",
    zIndex: 3,
    gap: 250,
  },
  arrowLeft: {
    paddingLeft: 10,
    //marginRight: 250,
  },
  heartIcon: {},
  image: {
    zIndex: 2,
    flex: 1,
  },
  card: {
    flex: 1,
    backgroundColor: "white",
    borderTopEndRadius: 24,
    borderTopStartRadius: 24,
  },
});
