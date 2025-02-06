# Projet

App de recettes avec navigation.
Pour apporter un peu d'humanité, j'ai décidé de faire des recettes de cocktail

- **Notions principales :**
  - Mise en place de la navigation avec `expo-router` ou `react-navigation`.
  - Gestion de l’état global ou partiel (context API ou librairie légère).
  - Introduction à `FlatList` pour afficher des listes dynamiques.
- **Incorporation :**
  - Réutilise les composants et la gestion de l’état local.
  - Typage avancé pour les paramètres de navigation et les listes.

### **1. Prérequis**

Assure-toi d’avoir une bonne compréhension des concepts suivants avant de te lancer :

1. **React Native :**
   - Création de composants avec `FlatList` pour afficher des données dynamiques.
   - Gestion de styles pour des listes et des vues adaptées.
2. **TypeScript :**
   - Typage des objets complexes, comme les paramètres de navigation ou les données des recettes.
   - Création d’interfaces et de types pour structurer les données.
3. **React Navigation ou Expo Router :**
   - Concepts de base pour naviguer entre plusieurs écrans.
   - Configuration de la navigation dans un projet.
4. **Gestion de l’état global :**
   - Compréhension des avantages de Context API ou d’une librairie légère pour partager l’état entre plusieurs composants.

### **2. Notions principales à creuser**

Voici les notions spécifiques pour ce projet :

### **a. Navigation avec Expo Router ou React Navigation**

- **Configuration de la navigation :**
  - Installer et configurer `expo-router` (pour une structure de navigation basée sur le système de fichiers) ou `react-navigation` (avec un stack navigator classique).
  - Typage des paramètres de navigation

### **b. Gestion de l’état global ou partiel**

- **Utilisation de Context API pour partager des données entre les écrans :**
  - Crée un contexte pour gérer une liste de recettes favorites ou des informations globales.

**Alternative :**

- Si tes besoins sont simples, tu peux utiliser un état partagé entre les écrans via des props ou une librairie légère comme **Zustand**.

### **c. Introduction à `FlatList`**

- Affiche une liste dynamique de recettes avec `FlatList`.

### **3. Étapes pour le projet**

1. **Mise en place du projet et navigation :**
   - Configure `react-navigation` ou `expo-router` pour gérer plusieurs écrans.
   - Crée au moins deux écrans : un écran d’accueil (liste de recettes) et un écran de détail (détails d’une recette).
2. **Affichage de la liste des recettes :**
   - Implémente un `FlatList` pour afficher des recettes.
   - Passe les informations nécessaires au composant de détail via les paramètres de navigation.
3. **Gestion des données :**
   - Ajoute un contexte pour gérer les recettes ou les favoris.
   - Permets aux utilisateurs d’ajouter une recette aux favoris.
4. **Interface :**
   - Stylise la liste de recettes pour rendre l’interface plus agréable.
   - Ajoute une action visuelle sur les recettes sélectionnées (par exemple, changement de couleur).
5. **Page de détail :**
   - Affiche les informations détaillées d’une recette (titre, description, ingrédients, etc.).
   - Implémente une option pour ajouter ou supprimer des recettes des favoris.

---

### **4. Bonus**

Si tu as le temps, ajoute ces fonctionnalités :

- **Recherche :**
  - Ajoute une barre de recherche pour filtrer les recettes.
- **Sauvegarde locale :**
  - Sauvegarde les favoris localement avec AsyncStorage.
- **Animations :**
  - Ajoute une animation de transition entre les écrans ou une animation lors du clic sur une recette.

---

### **5. Résultat attendu**

Une application avec les fonctionnalités suivantes :

1. Une navigation fluide entre la liste des recettes et les détails.
2. Une liste dynamique de recettes affichée avec `FlatList`.
3. Une gestion partielle ou globale des données (recettes et favoris).
4. Une interface propre et fonctionnelle, avec un typage clair pour la navigation et les données.

## ressources

- [lien vers l'API thecocktaildb.com](https://www.thecocktaildb.com/api.php)

- [site pour visualiser les couleurs](https://www.colorhexa.com/)

- [les icones](https://icons.expo.fyi/Index)

- [les grid sont gérer avec la librairie récente react-native-sortables](https://github.com/MatiPl01/react-native-sortables?tab=readme-ov-file)

- [gestion de la mémoire avec react-native-async-storge](https://react-native-async-storage.github.io/async-storage/docs/usage/)

## design qui m'ont inspiré

- [Recipe App UI design](https://dribbble.com/shots/5711320-Recipe-App-UI-design)

- [Healthy Food Recipe App](https://dribbble.com/shots/6472568-Healthy-Food-Recipe-App)
