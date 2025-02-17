import { colors } from "@/constants/color";
import { useRouter, useSegments } from "expo-router";
import { View, Pressable, Text, StyleSheet } from "react-native";
import { ThemedText } from "./ThemedText";

type props = {
  pageIndex: 0 | 1 | 2;
  setPage: (index: number) => void;
};
export function CustomTabBar({ pageIndex, setPage }: props) {
  const router = useRouter();

  const purple = colors.background.purple;
  const glassPurple = colors.background.glassPurple;

  const tabs = [
    { name: <ThemedText variant="stylisedText">meal</ThemedText>, index: 0 },
    {
      name: <ThemedText variant="stylisedText">cocktails</ThemedText>,
      index: 1,
    },
    {
      name: <ThemedText variant="stylisedText">favoris</ThemedText>,
      index: 2,
    },
  ];

  return (
    <View style={[styles.container, { backgroundColor: glassPurple }]}>
      {tabs.map((tab, index) => (
        <Pressable key={index} onPress={() => setPage(tab.index)}>
          <View
            style={
              pageIndex === tab.index ? styles.badgeActif : styles.badgeInactif
            }
          >
            <Text>{tab.name}</Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 40,
    paddingBottom: 5,
  },
  badgeActif: {
    //flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    width: 80,
    padding: 5,
    borderRadius: 20,
  },
  badgeInactif: {
    //  flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    padding: 5,
  },
});
