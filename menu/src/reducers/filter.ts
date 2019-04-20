import { ALL_PROJECTS, APP, DESIGN, ELEMENTS, LANDING_PAGE } from '../constants/filter.ts';

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
    case ELEMENTS:
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
