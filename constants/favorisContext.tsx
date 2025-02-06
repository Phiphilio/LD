import { createContext, useEffect, useState } from "react";
import { storeData, getData } from "@/function/data";

type recetteStructure = {
  id: number;
  name: string;
  alcohol: string;
  urlImage: string;
};

type recetteFavContextType = {
  favoris: recetteStructure[];
  addFavoris: (v: recetteStructure) => void;
  removeFavoris: (i: number) => void;
};
export const recetteFavContext = createContext<
  recetteFavContextType | undefined
>(undefined);

export const RecetteFavProvider = ({ children }) => {
  const [favoris, setFavoris] = useState<recetteStructure[]>([]);

  const addFavoris = (value: recetteStructure) => {
    setFavoris((prev) => [...prev, value]);
  };

  const removeFavoris = (id: number) => {
    setFavoris((prev) => prev.filter((item) => item.id != id));
  };

  useEffect(() => {
    if (favoris.length > 1) {
      storeData(favoris);
    }
  }, [favoris]);

  useEffect(() => {
    const gettingData = async () => {
      const result = await getData();
      setFavoris(result);
    };
    gettingData();
  }, []);

  return (
    <recetteFavContext.Provider value={{ favoris, addFavoris, removeFavoris }}>
      {children}
    </recetteFavContext.Provider>
  );
};
