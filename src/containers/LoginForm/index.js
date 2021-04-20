import { connect } from 'react-redux';
import { login, logout } from 'src/actions/user';

import LoginForm from 'src/components/LoginForm';

// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state) => ({
  // on vient lire la propriétés isSettingsOpen du state pour
  isLogged: state.user.logged,
  loggedMessage: state.user.loggedMessage,
});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch) => ({
  handleLogin: () => {
    dispatch(login());
  },
  handleLogout: () => {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
