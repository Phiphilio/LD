import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { colors } from "@/constants/color";

export default function RootLayout() {
  const colorInactiveIcon = colors.background.purple;
  const colorIcone = colors.Card.lightPurple;
  const colorBackgroundTabBar = colors.background.gray;
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colorIcone, // couleur de l'icone actif
        tabBarInactiveTintColor: colorInactiveIcon, // couleur de l'icone inactif
        tabBarStyle: { backgroundColor: colorBackgroundTabBar }, // couleur du background de la tabBar
      }}
    >
      <Tabs.Screen
        name="index" // nom du fichier qui doit servir d'écran
        options={{
          title: "Recettes",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 size={28} name="cocktail" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favoris"
        options={{
          title: "Favoris",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="heart" color={color} />
          ),
        }}
      />

      <Tabs.Screen name="cocktail" options={{ href: null }} />
    </Tabs>
  );
}
