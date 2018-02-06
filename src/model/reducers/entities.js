import {LOGIN_SUCCESS} from "../actions/index";

let initialState = {
  entities: {
    loginUser: null
  }
};

export default function loginPageData(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {...state, loginUser: action.payload};
    default:
      return state;
  }
}