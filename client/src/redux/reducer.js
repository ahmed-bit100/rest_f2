const {GET, DELETE, EDIT} = require('./actionsTypes');

const init = {
  users: [],
  loading: true,
};

const reducer = (state = init, {type, payload}) => {
  switch (type) {
    case GET:
      return {
        ...state,
        loading: false,
        users: payload,
      };
    case DELETE:
      return {
        ...state,
        loading: false,
        users: state.users.filter((el) => el._id !== payload._id),
      };
    case EDIT:
      return {
        ...state,
        loading: false,
        users: state.users.map((el) => (el._id === payload._id ? payload : el)),
      };
    default:
      return state;
  }
};

export default reducer;
