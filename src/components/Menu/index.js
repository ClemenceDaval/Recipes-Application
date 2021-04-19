import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './style.scss';

const Menu = ({ recipes }) => {
  // eslint-disable-next-line no-console
  console.log(recipes);

  return (
    <nav className="menu">
      <NavLink className="menu-link" activeClassName="menu-link--active" exact to="/">
        Accueil
      </NavLink>
      {
        recipes.map((recipe) => (
          <NavLink key={recipe.id} className="menu-link" activeClassName="menu-link--active" exact to={`/recipe/${recipe.slug}`}>
            {recipe.title}
          </NavLink>
        ))
      }
    </nav>
  );
};

Menu.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Menu;
