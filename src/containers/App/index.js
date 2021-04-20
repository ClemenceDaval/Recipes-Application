import { connect } from 'react-redux';

import App from 'src/components/App';
import { loadRecipesFromApi } from 'src/actions/recipes';

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch) => ({
  loadRecipes: () => {
    dispatch(loadRecipesFromApi());
  },
});

export default connect(null, mapDispatchToProps)(App);
