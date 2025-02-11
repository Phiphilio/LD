import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Tabs, Stack } from "expo-router";
import { colors } from "@/constants/color";
import { RecetteFavProvider } from "@/constants/favorisContext";

export default function RootLayout() {
  const colorInactiveIcon = colors.background.purple;
  const colorIcone = colors.Card.lightPurple;
  const colorBackgroundTabBar = colors.background.gray;
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <RecetteFavProvider>
        <Stack
          screenOptions={{
            presentation: "modal",
            headerShown: false,
            // tabBarActiveTintColor: colorIcone, // couleur de l'icone actif
            // tabBarInactiveTintColor: colorInactiveIcon, // couleur de l'icone inactif
            //tabBarStyle: { backgroundColor: colorBackgroundTabBar }, // couleur du background de la tabBar
          }}
        >
          <Stack.Screen
            name="index" // nom du fichier qui doit servir d'écran
          />
          <Stack.Screen name="favoris" />
          <Stack.Screen name="cocktail" />
        </Stack>
      </RecetteFavProvider>
    </GestureHandlerRootView>
  );
}
