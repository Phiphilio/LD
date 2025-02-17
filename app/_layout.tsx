import { RecetteFavProvider } from "@/constants/favorisContext";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <RecetteFavProvider>
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
    </RecetteFavProvider>
  );
}
