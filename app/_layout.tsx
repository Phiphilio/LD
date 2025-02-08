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
      <Tabs screenOptions={{ tabBarStyle: { display: "none" } }}>
        <Tabs.Screen
          name="index"
          options={{
            title: "breakfast",
          }}
        />
        <Tabs.Screen
          name="dinner"
          options={{
            title: "dinner",
          }}
        />
        <Tabs.Screen
          name="cocktails"
          options={{
            title: "cocktails",
          }}
        />
        <Tabs.Screen
          name="tab"
          options={{
            href: null,
          }}
        />
        <Tabs.Screen
          name="cocktail"
          options={{
            href: null,
          }}
        />
      </Tabs>
    </View>
  );
}
