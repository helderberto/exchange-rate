const initialState = {
  name: 'Helder',
  loggedIn: false,
};

export function userReducer(state = initialState, action) {
  return state;
}

// selectors
export const getName = (state) => state.user.name;

export const getLoggedIn = (state) => state.user.loggedIn;
