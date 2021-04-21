// Ce fichier va contenir la batterie de test
// qui va permettre de tester les fonctionnalités du fichier src/reducers/recipes.js

// on peut grâce à describe organiser
// nos tests en différentes sections
describe('recipes reducer', () =>{
  
  // it va permettre de définir un test
  it('should give 3 when adding 1 to 2', () =>{
    // on peut utiliser expect pour nos assertions
    // un assertion est une affirmation dont on veut vérifier la véracité
    // ici, on essaie de vérifier si la somme de 1 et 2 vaut bien 3
    expect(1 + 2).toBe(4);
  })
});
