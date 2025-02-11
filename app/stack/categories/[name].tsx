import { ThemedText } from "@/components/ThemedText";
import { colors } from "@/constants/color";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, SafeAreaView, StyleSheet, View } from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";

export default function list() {
  const params = useLocalSearchParams();
  const router = useRouter();
  const colorBackground = colors.background.glassPurple;
  const headlineBackgroundColor = colors.background.purple;

  const goBack = () => {
    router.back();
  };
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colorBackground }]}
    >
      <View style={styles.header}>
        <Pressable onPress={goBack}>
          <AntDesign name="arrowleft" size={40} color="black" />
        </Pressable>
        <View
          style={[
            styles.headline,
            { backgroundColor: headlineBackgroundColor },
          ]}
        >
          <ThemedText variant="title" textColor="whiteVariant">
            {params.name}
          </ThemedText>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 100,
    borderBottomWidth: 1,
    height: 100,
  },
  headline: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 50,
    paddingTop: 2,
    paddingBottom: 7,
    borderRadius: 24,
    width: 200,
    height: 40,
  },
});
