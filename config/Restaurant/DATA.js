import Recipes from "./Recipes";

const categories = [
  {
    id: 1,
    title: "Tous",
    recipes: Recipes,
  },
  {
    id: 2,
    title: "Economie",
    recipes: [...Recipes.slice(4, 8)],
  },
  {
    id: 3,
    title: "Politique",
    recipes: [...Recipes.slice(3, 7)],
  },
  {
    id: 4,
    title: "Investire en afrique",
    recipes: [...Recipes.slice(2, 6)],
  },
];

export default categories;
