import AsyncStorage from "@react-native-async-storage/async-storage";

type recetteStructure = {
  id: number;
  name: string;
  alcohol: string;
  urlImage: string;
};

export const storeData = async (value: recetteStructure[]) => {
  try {
    const valueString = JSON.stringify(value);
    await AsyncStorage.setItem("favoris", valueString);
  } catch (e) {
    console.log("voici l'erreur :", e);
  }
};

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("favoris");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log("voici l'erreur :", e);
  }
};
