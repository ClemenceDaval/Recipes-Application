import userReducer from 'src/reducers/user' ;
import { changeFieldValue, setLoggedMessage, logout } from '../../src/actions/user' ;

describe('user reducer', () =>{

  describe('structure', () => {
  
    // est-ce une fonction
    it('should be a function', () =>{
      expect(typeof userReducer).toBe('function');
    });

    // est ce que ça renvoit bien un objet
    it('should return an objet', () =>{
      expect(typeof userReducer()).toBe('object');
    });

  });

  describe('execution', () => {

    // est ce que ça renvoit bien le state initial au démarrage de l'appli
    it('should return the right initial state', () => {

      const expectedInitialState= {
        logged: false,
        email:'',
        password: '',
        loggedMessage: '',
      };

      expect(userReducer()).toEqual(expectedInitialState);
      // on a fait une copie, si on utilisait toBe le test nous renverrait failedé

    });

    it('should change the field value on the right property', () => {

      const stateBefore = {
        logged: false,
        email:'',
        password: '',
        loggedMessage: '',
      }

      // on prépare une fausse value 
      const value = "Jean-Michel" ;

      // on prépare une proriété 
      const property = "password" ;

      // on prépare notre action
      const action = changeFieldValue(property, value);

      const expectedState = {
        logged: false,
        email:'',
        password: 'Jean-Michel',
        loggedMessage: '',
      };

      expect(userReducer(stateBefore, action)).toEqual(expectedState);

    });

    it('should set a welcome message to the right user and change the property logged to true', () => {
      
      const stateBefore = {
        logged: false,
        email:'',
        password: '',
        loggedMessage: '',
      };

      // on prépare un faux pseudo
      const pseudo = "Jean-Michel" ;

      // on prépare notre action
      const action = setLoggedMessage(pseudo);

      const expectedState = {
        logged: true,
        email:'',
        password: '',
        loggedMessage: 'Bienvenue Jean-Michel',
      };

      expect(userReducer(stateBefore, action)).toEqual(expectedState);

    });

    it('should set the logged property to false and reset the others properties when logout', () => {
      const stateBefore = {
        logged: true,
        email:'blabla@email.com',
        password: 'jennifer',
        loggedMessage: 'Bienvenue John',
      };

      const action = logout();

      const expectedState = {
        logged: false,
        email:'',
        password: '',
        loggedMessage: '',
      }

      expect(userReducer(stateBefore, action)).toEqual(expectedState);

    });
  
  });

});
