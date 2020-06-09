import * as types from "../actions/actionTypes";
import * as authorApi from "../../api/authorApi";

export function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHOR_SUCCESS, authors };
}

export function loadAuthors() {
  return function (dispatch) {
    return authorApi
      .getAuthors()
      .then((authors) => dispatch(loadAuthorsSuccess(authors)))
      .catch((error) => {
        throw error;
      });
  };
}