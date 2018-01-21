import { ALL_PROJECTS, LANDING_PAGE, ONLINE_STORE, APP, DESIGN } from '../constants/filter';

export function filter (state = {}, action) {
  switch (action.type) {
    case ALL_PROJECTS:
      return {
        state: state,
        filter: action.filter
      };
    case LANDING_PAGE:
      return {
        state: state,
        filter: action.filter
      };
    case ONLINE_STORE:
      return {
        state: state,
        filter: action.filter
      };
    case APP:
      return {
        state: state,
        filter: action.filter
      };
    case DESIGN:
      return {
        state: state,
        filter: action.filter
      };
    default:
      return state
  }
}
