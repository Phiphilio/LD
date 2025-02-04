import { createContext, useState } from "react";

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
  const [favoris, setfavoris] = useState<recetteStructure[]>([]);

  const addFavoris = (value: recetteStructure) => {
    setfavoris((prev) => [...prev, value]);
  };

  const removeFavoris = (id: number) => {
    setfavoris((prev) => prev.filter((item) => item.id != id));
  };
  return (
    <recetteFavContext.Provider value={{ favoris, addFavoris, removeFavoris }}>
      {children}
    </recetteFavContext.Provider>
  );
};
