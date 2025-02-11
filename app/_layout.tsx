import { CustomTabBar } from "@/components/customTabBar";
import { SearchBar } from "@/components/searchBar";
import { Tabs } from "expo-router";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <View style={{ flex: 1 }}>
      {/** le flex à 1 permet aux écrans de s'afficher */}
      <SearchBar />
      <CustomTabBar />
      <Tabs
        screenOptions={{ headerShown: false, tabBarStyle: { display: "none" } }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "MEAL",
          }}
        />
        <Tabs.Screen
          name="cocktails"
          options={{
            title: "COCKTAILS",
          }}
        />
        <Tabs.Screen
          name="favoris"
          options={{
            title: "FAVORIS",
          }}
        />
        <Tabs.Screen
          name="tab"
          options={{
            href: null,
          }}
        />
      </Tabs>
    </View>
  );
}
