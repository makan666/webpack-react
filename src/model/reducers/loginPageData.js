import {LOGIN_FAILURE, LOGIN_LOADING, LOGIN_SUCCESS} from "../actions/index";

let initialState = {
  loginPageData: {
    loading: false,
    error: null
  }
};

export default function loginPageData(state = initialState, action) {
  switch (action.type) {
    case LOGIN_LOADING:
      return {...state, loading: action.payload};
    case LOGIN_FAILURE:
      return {...state, error: null};
    case LOGIN_SUCCESS:
      return {...state, error: null, data: action.payload};
    default:
      return state;
  }
}