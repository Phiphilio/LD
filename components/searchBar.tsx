import { colors } from "@/constants/color";
import { StyleSheet, TextInput, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useSegments } from "expo-router";

type props = {
  text?: string;
  func?: (s: string) => void;
};

export function SearchBar({ text, func, ...rest }: props) {
  const segments = useSegments();
  const isModalOpen = segments[0] === "stack"; // si on va dans le fichier stack

  if (isModalOpen) return null; // Ne rien afficher

  const backgroundColor = colors.Card.whiteVariant;
  const colorIcone = colors.background.purple;
  return (
    <View style={styles.header}>
      <View
        style={[styles.searchBar, { backgroundColor: backgroundColor }]}
        {...rest}
      >
        <AntDesign
          name="search1"
          size={24}
          color={colorIcone}
          style={styles.Icone}
        />
        <TextInput
          style={styles.textInput}
          value={text}
          onChangeText={func}
          placeholder="Search for recipe & channels"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 35,
    paddingBottom: 15,
    // position: "absolute",
    zIndex: 3,
    left: 0,
    right: 0,
    //width: 450,
    backgroundColor: "rgba(106, 13, 173, 0.3) ",
  },
  searchBar: {
    width: 320,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    flexDirection: "row",
  },
  textInput: {
    paddingLeft: 18,
  },
  Icone: {
    paddingLeft: 10,
  },
});
