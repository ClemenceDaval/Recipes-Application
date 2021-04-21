// de quoi a-t-on besoin pour tester notre fonction findRecipe ?
// import nommé ici
import { findRecipe } from 'src/selectors/recipes';

// ici, on aurait pu créer les données d'entrées pour nos test
// dans ce fichier, mais pour aller plus vite, on importe le jeu de test
// fourni dans le fichier src/data.js
import recipesData from 'src/data';

describe('recipes selector', () =>{

  describe('findRecipe function', () =>{

    // structure  
    describe('structure', () => {

      // est-ce une fonction
      it('should be a function', () =>{
        expect(typeof findRecipe).toBe('function');
      });

    });

    // exécution
    describe('execution', () => {

      // retourne un objet si la recette existe
      it('should return an object if the recipe exists', () =>{
        expect(typeof findRecipe(recipesData, 'crepes-raffinees')).toBe('object');      
      });

      // vérifier que l'objet trouvé est le bon
      it('should return the right recipe if it exists', () =>{
        expect(findRecipe(recipesData, recipesData[0].slug)).toEqual(recipesData[0]);
      });

      // retourne undefined si la recette n'existe pas
      it('should return undefined if the recipe doesn\'t exist', () => {
        expect(findRecipe(recipesData, 'slugQuiNExistePas')).toBeUndefined();
      });

    });

  });

});
