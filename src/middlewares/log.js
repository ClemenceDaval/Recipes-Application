import { LOGIN, setLoggedMessage } from 'src/actions/user';
import axios from 'axios';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const { user } = store.getState();
      const { email, password } = user;

      console.log(user);
      console.log(email);
      axios
        .post(
          'http://localhost:3001/login',
          {
          // équivalent à :
          // email: email,
          // si on veut stocker une variable dans la propriété d'un objet
          // qui porte le même nom (la propriété, pas l'objet)
          // on peut utiliser la notation shorthand property :
            email,
            password,
          },
        )
        .then((response) => {
        // on emmet l'intention : je veux sauvegarder cet utilisateur
          store.dispatch(setLoggedMessage(response.data.pseudo));
          console.log(response.data.pseudo);
        }).catch((error) => {
          console.error(error);
        });

      // puis on décide si on la laisse filer ou si on la bloque
      next(action);
      break;
    }
    default:
      console.log('auth');
      next(action);
  }
};
