import { colors } from "@/constants/color";
import { useRouter } from "expo-router";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewProps,
} from "react-native";
import { ThemedText } from "./ThemedText";

type props = ViewProps & {
  name: string;
  alcoholic: string;
  image: string;
  card: object;
  cardImage: object;
  cardTextSection: object;
};

export function CocktailCard({
  name,
  alcoholic,
  image,
  card,
  cardImage,
  cardTextSection,
  ...rest
}: props) {
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
      <View style={card} {...rest}>
        <Image source={{ uri: image }} style={cardImage} />
        <View style={cardTextSection}>
          <ThemedText variant="title">{name}</ThemedText>
          <ThemedText>
            {alcoholic === "Alcoholic" ? "alcoolisé" : "sans alcool"}
          </ThemedText>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
