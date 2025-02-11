import { Image, StyleSheet } from "react-native";
import { Card } from "./card";
import { ThemedText } from "./ThemedText";

const imageMap: Record<string, any> = {
  categories: require("@/assets/images/categories.jpg"),
  countries: require("@/assets/images/countries.jpg"),
  ingredients: require("@/assets/images/ingrdients.png"),
};

type props = {
  text: string;
  img: "categories" | "countries" | "ingredients";
};

export function CategorieCard({ text, img }: props) {
  return (
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
