import { Image, StyleSheet, Text, View } from "react-native";

type props = {
  name: string;
  alcoholic: string;
  image: string;
};

export function CocktailCard({ name, alcoholic, image }: props) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.textSection}>
        <Text style={{ color: "#1E1E1E" }}>{name}</Text>
        <Text>{alcoholic === "Alcoholic" ? "alcoolisé" : "sans alcool"}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 300,
    borderRadius: 20,
    backgroundColor: "white",
  },
  image: {
    width: 300,
    height: 300,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    //borderRadius: 10,
  },
  textSection: {
    backgroundColor: "#E6D4F1",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 70,
  },
});
