import { ABOUT, CONTACTS, PORTFOLIO, PROCESS, START } from '../constants/page.ts';

export function page(state = {}, action) {
    switch (action.type) {
        case START:
            return {
                state: state,
                page: action.page
            };
        case PORTFOLIO:
            return {
                state: state,
                page: action.page
            };
        case PROCESS:
            return {
                state: state,
                page: action.page
            };
        case ABOUT:
            return {
                state: state,
                page: action.page
            };
        case CONTACTS:
            return {
                state: state,
                page: action.page
            };
        default:
            return state
    }
}
