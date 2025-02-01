import { colors } from "@/constants/color";
import { useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

type props = {
  name: string;
  alcoholic: string;
  image: string;
};

export function CocktailCard({ name, alcoholic, image }: props) {
  const colory = colors.Card;
  const router = useRouter();

  const lienDynamique = () => {
    router.push({
      pathname: "/cocktail/[name]",
      params: { name: name },
    });
  };
  return (
    <Pressable
      android_ripple={{
        foreground: true,
        color: colory.lightPurple,
      }}
      onPress={lienDynamique}
    >
      <View style={styles.card}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.textSection}>
          <Text style={{ color: "#1E1E1E" }}>{name}</Text>
          <Text>{alcoholic === "Alcoholic" ? "alcoolisé" : "sans alcool"}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 300,
    borderRadius: 20,
    backgroundColor: "white",
    //marginLeft: 30,
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
