let intialState = {
  Users: [],
};

const UserReducers = (state = intialState, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        Users: [...state.Users, action.payload],
      };

    case "view":
      return {
        ...state,
        Users: action.payload,
      };
    default:
      return state;
  }
};

export default UserReducers;
