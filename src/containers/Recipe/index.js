import { connect } from 'react-redux';
import Recipe from 'src/components/Recipe';

import { withRouter } from 'react-router-dom';

import { findRecipe } from 'src/selectors/recipes';

const mapStateToProps = (state, ownProps) => ({
  recipe: findRecipe(state.recipes.list, ownProps.match.params.slug),
});

const mapDispatchToProps = {};

const container = connect(mapStateToProps, mapDispatchToProps)(Recipe);

// Ici, on se sert du HOC (high order component withRouter)
// qui va enrichir notre composant connecté avec de nouvelles
// props.
// withRouter permet d'offrir l'accès à 3 nouvelles props :
// history : l'historique de navigation
// location : des information sur l'emplacement courant (url courante)
// match : des informations sur la plus proche Route qui a matché (le plus proche ancêtre Route).
const containerWithRouter = withRouter(container);

export default containerWithRouter;
