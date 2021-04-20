# Chargement de données dans le state en provenance d'une API au lancement d'une application

1 - Dans le composant de Présentation principal, on utilise un hook d'effet (au montage) qui appelle une fonction qui initie le chargement

Dans _src/components/App/index.js_ :

```js
useEffect(
  loadData,
  [],
);
```

2 - On donne corps à cette fonction dans le container du composant de présentation en lui faisant emmettre l'intention de chargement des données en direction du store

Dans _src/containers/App/index.js_ :

```js

const mapDispatchToProps = (dispatch) = ({
  loadData: () => {
    dispatch ({ type: 'LOAD_DATA_FROM_API'});
    // ici en vrai, on utiliserait un action creator
  }
});

```

3 - On intercepte cette intention dans un middleware et on utilise axios pour interroger l'API

et

4 - Lorsque les données nous sont renvoyées par l'API, on emmet l'intention de sauvegarder ces informations dans le state

Dans _src/middleware/monApi.js_ :

```js
// ici en vrai, on utiliserai l'action type
case 'LOAD_DATA_FROM_API':
  axios
  .get('http://monapi.com/monendpoint')
  .then((response) => {
    // ici en vrai, on utiliserai un action creator
    store.dispatch({type: 'SAVE_DATA_FROM_API', data: response.data});
  })

```

5 - Cette intention est traduite dans un reducer en une modification du state.

Dans _src/recucers/monReducer.js_ :

```js
// ici en vrai, on utiliserai l'action type
case 'SAVE_DATA_FROM_API':
    return {
      ...state,
      data: action.data,
    };
```
