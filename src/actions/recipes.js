// action type LOAD_RECIPES_FROM_API
export const LOAD_RECIPES_FROM_API = 'LOAD_RECIPES_FROM_API';

// action creator loadRecipeFromApi
export const loadRecipesFromApi = () => ({
  type: LOAD_RECIPES_FROM_API,
});

// action type SAVE_RECIPES
export const SAVE_RECIPES = 'SAVE_RECIPES';

// action creator saveRecipes
export const saveRecipes = (recipes) => ({
  type: SAVE_RECIPES,
  // shorthand property
  recipes,
});
