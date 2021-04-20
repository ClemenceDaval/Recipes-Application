import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useLocation } from 'react-router-dom';

import Menu from 'src/containers/Menu';
import Home from 'src/containers/Home';
import Recipe from 'src/containers/Recipe';
import Error from 'src/components/Error';

import Loading from './Loading';

import './style.scss';

function App({ loading, loadRecipes }) {
  // on veut demander le chargement des recettes
  // au montage de notre composant App
  // Donc, au démarrage de l'application
  useEffect(
    loadRecipes,
    [],
  );

  // on utilise le hook useLocation fourni par react-router-dom
  // pour récupérer les information concernant la location (l'url) courante
  const location = useLocation();

  // on applique un effet de scroll de la fenêtre du navigateur vers les coordonnées (0,0)
  // au montage du composant App et quand location change
  useEffect(
    () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    },
    [location],
  );

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Menu />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/recipe/:slug">
          <Recipe />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </div>
  );
}

App.propTypes = {
  loading: PropTypes.bool,
  loadRecipes: PropTypes.func.isRequired,
};

App.defaultProps = {
  loading: false,
};

export default App;
