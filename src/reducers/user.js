import { CHANGE_FIELD_VALUE, SET_LOGGED_MESSAGE, LOGOUT } from 'src/actions/user';

export const initialState = {
  logged: false,
  email: '',
  password: '',
  loggedMessage: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD_VALUE:
      return {
        ...state,
        // on indique dynamiquement (au moment de l'exécution)
        // à quelle propriété du state on souhaite accéder
        // grâce à la notation []
        [action.name]: action.newValue,
      };
    case SET_LOGGED_MESSAGE:
      return {
        ...state,
        loggedMessage: `Bienvenue ${action.loggedMessage}`,
        logged: true,
      };
    case LOGOUT:
      return {
        ...state,
        loggedMessage: '',
        email: '',
        password: '',
        logged: false,
      };
    default:
      return state;
  }
};

export default reducer;
