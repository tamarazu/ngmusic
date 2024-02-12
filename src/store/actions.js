import axios from "axios";
import types from "./types";

export const set_loading = (value) => {
  return {
    type: types.SET_LOADING,
    payload: value,
  };
};

export const set_error = (value) => {
  return {
    type: types.SET_ERROR,
    payload: value,
  };
};

export const set_songs = (value) => {
  return {
    type: types.SET_SONGS,
    payload: value,
  };
};

export const set_term = (value) => {
  return {
    type: types.SET_TERM,
    payload: value,
  };
};

export const fetch_search_song = (value) => async (dispatch) => {
  console.log();
  try {
    const { data } = await axios({
      method: "GET",
      url: "https://itunes.apple.com/search",
      params: {
        term: value,
        limit: 10,
      },
    });
    if (data.resultCount) {
      dispatch(set_songs(data.results));
    }
  } catch (error) {
    dispatch(set_error('Failed to search song'))
  }
};
