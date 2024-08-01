import {
  token_requested,
  token_obtained,
  token_request_failed,
} from "./action-types";

export const AppTokenReducer = (state: any, action: any) => {
  switch (action.type) {
    case token_requested:
      return {
        ...state,
        appToken: null,
        appAuthenticated: false,
        error: null,
        loading: true,
        error_message: null,
      };
    case token_obtained:
      return {
        ...state,
        appToken: action.payload.appToken,
        appAuthenticated: true,
        error: null,
        loading: false,
        error_message: null,
      };
    case token_request_failed:
      return {
        ...state,
        appToken: null,
        appAuthenticated: false,
        error: true,
        loading: false,
        // TODO: PUT ERROR MESSAGE HERE IN error_message PARAM
        error_message: null,
      };
    default:
      return state;
  }
};
