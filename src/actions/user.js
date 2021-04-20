// action type CHANGE_FIELD_VALUE
export const CHANGE_FIELD_VALUE = 'CHANGE_FIELD_VALUE';

// action creator
export const changeFieldValue = (name, newValue) => ({
  type: CHANGE_FIELD_VALUE,
  newValue: newValue,
  name: name,
});

// action type LOGIN
export const LOGIN = 'LOGIN';

// action creator login
export const login = () => ({
  type: LOGIN,
});

// action type IS_LOGGED
export const IS_LOGGED = 'IS_LOGGED';

// action creator toggleIsLogged
export const isLogged = () => ({
  type: IS_LOGGED,
});

// action type SET_LOGGED_MESSAGE
export const SET_LOGGED_MESSAGE = 'SET_LOGGED_MESSAGE';

// action creator setLoggedMessage
export const setLoggedMessage = (pseudo) => ({
  type: SET_LOGGED_MESSAGE,
  loggedMessage: pseudo,

});

// action type LOGOUT
export const LOGOUT = 'LOGOUT';

// action creator logout
export const logout = () => ({
  type: LOGOUT,
});
