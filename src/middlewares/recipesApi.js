import axios from 'axios';
import { LOAD_RECIPES_FROM_API, saveRecipes } from 'src/actions/recipes';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_RECIPES_FROM_API:
      // on interroge l'api pour récupérer la liste des recettes
      axios
        .get('http://localhost:3001/recipes')
        .then((response) => {
          const recipes = response.data;

          store.dispatch(saveRecipes(recipes));
        });

      // puis on décide si on la laisse filer ou si on la bloque
      next(action);
      break;
    default:
      console.log('auth');
      next(action);
  }
};
