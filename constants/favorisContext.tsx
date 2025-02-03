import { createContext } from "react";

export type recetteStructure = {
  id: number;
  name: string;
  alcohol: string;
  urlImage: string;
};

export const recetteFav = createContext<recetteStructure[]>([]);
