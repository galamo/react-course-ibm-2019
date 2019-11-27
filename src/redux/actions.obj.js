import Actions from "./actions";

export const setFavorites = payload => {
  return {
    type: Actions.ADD_TO_FAVORITE,
    payload
  };
};
