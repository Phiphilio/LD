import { Image, Pressable, StyleSheet } from "react-native";
import { Card } from "./card";
import { ThemedText } from "./ThemedText";
import { useRouter } from "expo-router";

const imageMap: Record<string, any> = {
  categories: require("@/assets/images/categories.jpg"),
  countries: require("@/assets/images/countries.jpg"),
  ingredients: require("@/assets/images/ingredients.jpg"),
  alcoholic: require("@/assets/images/alcoholic.jpg"),
  glasses: require("@/assets/images/glasses.jpg"),
  ingredientCoktail: require("@/assets/images/ingredientCoktail.jpg"),
};

type props = {
  text: string;
  img:
    | "categories"
    | "countries"
    | "ingredients"
    | "alcoholic"
    | "glasses"
    | "ingredientCoktail";
};

export function CategorieCard({ text, img }: props) {
  const router = useRouter();
  const GO = () => {
    console.log(img);
    router.push({
      pathname: "/stack/categories/[name]",
      params: { name: img },
    });
  };

  return (
    <Pressable onPress={GO} android_ripple={{ foreground: true }}>
      <Card
        colorBackground="white"
        cardHeight={70}
        cardWidth={320}
        style={styles.container}
      >
        <ThemedText variant="subtitle" style={styles.text}>
          {text}
        </ThemedText>
        <Image source={imageMap[img]} style={styles.image} />
      </Card>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  text: {
    marginLeft: 20,
  },
  image: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: 70,
    height: 70,
    borderRadius: 10,
    borderTopLeftRadius: 80,
    borderBottomLeftRadius: 80,
  },
});
