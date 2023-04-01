export {}; // Agrega esta línea al principio del archivo

interface SpoonacularRandomRecipesResponse {
  recipes: {
    title: string;
    image: string;
    dishTypes: string[];
  }[];
}

// Agrega esta línea al final del archivo
export type { SpoonacularRandomRecipesResponse };
