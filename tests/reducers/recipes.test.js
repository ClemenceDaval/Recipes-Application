// Ce fichier va contenir la batterie de test
// qui va permettre de tester les fonctionnalités du fichier src/reducers/recipes.js
import recipeReducer, {initialState} from 'src/reducers/recipes' ;
import data from 'src/data';
import { saveRecipes } from '../../src/actions/recipes';

// on peut grâce à describe organiser
// nos tests en différentes sections
describe('recipes reducer', () =>{
  
  // on peut définir des sous-section de test
  describe('structure', () => {
    
    // it va permettre de définir un test
    it('should be a function', () =>{
      // on peut utiliser expect pour nos assertions
      // un assertion est une affirmation dont on veut vérifier la véracité
      expect(typeof recipeReducer).toBe('function');
    });

    // on sait qu'un reducer doit nous renvoyer un objet
    // on peut maintenant s'en assurer
    it('should return an object', () => {
      const returnOfRecipesReducer = recipeReducer();
      expect(typeof returnOfRecipesReducer).toBe('object');
    });

  });  

  describe('execution', () => {
    it('should return the right initial state', () => {
      
      // on prépare un objet tel que le test est censé être 
      // au démarrage de l'application
      const expectedInitialState = {
        list: [],
      };

      // toEqual va tester si les 2 objets ont la même structure / valeur      
      // on vérifie que l'état initial du state est bien celui escompté
      expect(recipeReducer()).toEqual(expectedInitialState);
    });

    it('should save the recipes list', () => {
      // on définit nos entrées
      const stateBefore = {
        list: [{ name: 'autre recette' }],
        // il peut être intéressant d'ajouter un propriété
        // qui pas censée être modfiée pour voir si c'est bien le cas
        otherProperty: '...',
      };

      // on prépare un tableau de fausses recettes
      const recipes = [
        {
          name: 'crepe',
        },
        {
          name: 'pizza',
        },
      ];

      // on utilise le tableau de fausse recette
      // et notre action creator saveRecipes
      //pour créer l'action à transmettre au reducer
      const action = saveRecipes(recipes);

      // on définit la sortie attendue
      const expectedState = {
        list: recipes,
        otherProperty: '...',
      };

      // on vérifie que la sortie obtenu avec les entrées définit
      // correspond bien à la sortie attendue
      expect(recipeReducer(stateBefore, action)).toEqual(expectedState);
    
  });
});
});
