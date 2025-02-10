import { Card } from "@/components/card";
import { Image, StyleSheet, View } from "react-native";
import { ThemedText } from "./ThemedText";

type props = {
  img: string;
  title: string;
  classification: string;
};
export function RecipeCard({ img, title, classification }: props) {
  return (
    <Card
      colorBackground="whiteVariant"
      cardWidth={150}
      cardHeight={80}
      style={styles.container}
    >
      <Image source={{ uri: img }} style={styles.image} />
      <View style={styles.textSection}>
        <ThemedText
          variant="stylisedText"
          textColor="blackVariant"
          style={styles.firstTextSection}
        >
          {title}
        </ThemedText>
        <ThemedText
          variant="subText"
          textColor="blackVariant"
          style={styles.secondTextSection}
        >
          {classification}
        </ThemedText>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  image: {
    position: "absolute",
    right: 108,
    width: 55,
    height: 55,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#F0F0F0",
  },
  textSection: {
    marginLeft: 55,
  },
  firstTextSection: {
    borderBottomWidth: 1,
    borderBottomColor: "red",
    paddingBottom: 5,
    flexWrap: "wrap",
  },
  secondTextSection: {
    paddingTop: 5,
  },
});
