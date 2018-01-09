import { ALL_PROJECTS, PORTFOLIO, LANDING_PAGE, ONLINE_STORES, APPS, DESIGN } from '../constants/filter';

export function filter (state = {}, action) {
  switch (action.type) {
    case ALL_PROJECTS:
      return {
        state: state,
        filter: action.filter
      };
    case PORTFOLIO:
      return {
        state: state,
        filter: action.filter
      };
    case LANDING_PAGE:
      return {
        state: state,
        filter: action.filter
      };
    case ONLINE_STORES:
      return {
        state: state,
        filter: action.filter
      };
    case APPS:
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
      return: state
  }
}
