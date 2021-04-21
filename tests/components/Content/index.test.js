// On va écrire du JSX, on importe React
import React from 'react';

// On importe le composant à tester
import Content from 'src/components/Content';
import Card from 'src/components/Card';

// On importe la fonction shallow
// qui va permettre de faire un rendu de surface 
// de nos composants
import { shallow } from 'enzyme';

describe('Content component', () => {

  const recipes = [
    { id: 1},
    { id: 2},
    { id: 3},
    { id: 4},
    { id: 5},
  ];

  const wrapper = shallow(<Content
    title="Mon titre de test"
    text="Mon texte de test"
    recipes={recipes}
  />);

  it('should have exactly one element with class content-title', () => {
    expect(wrapper.find('.content-title')).toHaveLength(1);
  });

  it('should render the right number of Card Element', () => {
    expect(wrapper.find(Card)).toHaveLength(recipes.length);
  });

});
