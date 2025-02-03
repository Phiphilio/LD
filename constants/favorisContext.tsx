import { createContext } from "react";

type recetteStructure = {
  id: number;
  name: string;
  alcohol: string;
  urlImage: string;
};

const recetteFav = createContext<recetteStructure[]>([]);
