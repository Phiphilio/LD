import { colors } from "@/constants/color";
import { StyleSheet, TextInput, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

type props = {
  text?: string;
  func?: (s: string) => void;
};

export function SearchBar({ text, func, ...rest }: props) {
  const backgroundColor = colors.Card.whiteVariant;
  const colorIcone = colors.background.purple;
  return (
    <View
      style={[styles.searchBar, { backgroundColor: backgroundColor }]}
      {...rest}
    >
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={func}
        placeholder="ex : pinacolada"
      />
      <AntDesign
        name="search1"
        size={24}
        color={colorIcone}
        style={styles.Icone}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    width: 250,
    height: 35,
    borderRadius: 20,
    alignItems: "center",
    flexDirection: "row",
  },
  textInput: {
    paddingLeft: 30,
  },
  Icone: {
    paddingLeft: 90,
  },
});
