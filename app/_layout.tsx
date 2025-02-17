import { Tabs } from "expo-router";
import { RecetteFavProvider } from "@/constants/favorisContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <RecetteFavProvider>
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarStyle: { display: "none" },
          }}
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
    </GestureHandlerRootView>
  );
}
