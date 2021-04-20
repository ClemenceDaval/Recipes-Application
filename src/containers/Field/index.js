import { connect } from 'react-redux';

import Field from 'src/components/LoginForm/Field';
import { changeFieldValue } from 'src/actions/user';

// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => {
  const propertyName = ownProps.name;
  return ({
    value: state.user[propertyName],
  });
};

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch) => ({
  onChange: (value, name) => {
    console.log(value);
    console.log(name);
    dispatch(changeFieldValue(name, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);
