import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { colors } from "@/constants/color";
import { RecetteFavProvider } from "@/constants/favorisContext";

export default function RootLayout() {
  const colorInactiveIcon = colors.background.purple;
  const colorIcone = colors.Card.lightPurple;
  const colorBackgroundTabBar = colors.background.gray;
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <RecetteFavProvider>
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
          <Tabs.Screen
            name="shop"
            options={{
              title: "shop",
              tabBarIcon: ({ color }) => (
                <AntDesign name="shoppingcart" size={24} color={color} />
              ),
            }}
          />
          <Tabs.Screen name="profil" />

          <Tabs.Screen name="cocktail" options={{ href: null }} />
        </Tabs>
      </RecetteFavProvider>
    </GestureHandlerRootView>
  );
}
