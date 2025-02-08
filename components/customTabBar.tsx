import { colors } from "@/constants/color";
import { useRouter, useSegments } from "expo-router";
import { View, Pressable, Text, StyleSheet } from "react-native";

export function CustomTabBar() {
  const router = useRouter();
  const segments = useSegments();

  const purple = colors.background.purple;
  const glassPurple = colors.background.glassPurple;

  const tabs = [
    { name: "breakfast", route: "/" }, // ↪ Correspond à `app/index.tsx`
    { name: "dinner", route: "/dinner" }, // ↪ Correspond à `app/dinner.tsx`
    { name: "cocktails", route: "/cocktails" }, // ↪ Correspond à `app/cocktails.tsx`
  ];

  return (
    <View style={[styles.container, { backgroundColor: glassPurple }]}>
      {tabs.map((tab, index) => (
        <Pressable key={index} onPress={() => router.push(tab?.route)}>
          <Text
            style={{
              color: segments.includes(tab.route.replace("/", ""))
                ? purple
                : "black",
            }}
          >
            {tab.name}
          </Text>
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
    padding: 10,
  },
});
