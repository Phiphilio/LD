import { Tabs } from "expo-router";
import { View } from "react-native";
import PagerView from "react-native-pager-view";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false, tabBarStyle: { display: "none" } }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "index",
        }}
      />
      <Tabs.Screen
        name="stack"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
