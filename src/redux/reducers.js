import Actions from "./actions";

const initialState = {
  favorites: []
};

export function root(state = initialState, action) {
  switch (action.type) {
    case Actions.ADD_TO_FAVORITE: {
      return { ...state, favorites: [...state.favorites, action.payload] };
    }

    default: {
      return state;
    }
  }
}
