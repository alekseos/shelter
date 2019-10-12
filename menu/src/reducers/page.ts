import { ABOUT, CONTACTS, PORTFOLIO, PROCESS, START } from 'Constants/page';

export function page(state = {}, action) {
    switch (action.type) {
        case START:
            return {
                state,
                page: action.page
            };
        case PORTFOLIO:
            return {
                state,
                page: action.page
            };
        case PROCESS:
            return {
                state,
                page: action.page
            };
        case ABOUT:
            return {
                state,
                page: action.page
            };
        case CONTACTS:
            return {
                state,
                page: action.page
            };
        default:
            return state
    }
}
