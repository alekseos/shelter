import { ABOUT, CONTACTS, PORTFOLIO, PROCESS, START } from '../constants/page.js';

export function pageStart() {
    return {
        type: START,
        page: {
            numbers: {
                start: "00",
                end: "01"
            },
            url: {
                start: "/",
                end: "/portfolio"
            }
        }
    }
}

export function pagePortfolio() {
    return {
        type: PORTFOLIO,
        page: {
            numbers: {
                start: "01",
                end: "02"
            },
            url: {
                start: "/",
                end: "/process"
            }
        }
    }
}

export function pageProcess() {
    return {
        type: PROCESS,
        page: {
            numbers: {
                start: "02",
                end: "03"
            },
            url: {
                start: "/portfolio",
                end: "/about"
            }
        }
    }
}

export function pageAbout() {
    return {
        type: ABOUT,
        page: {
            numbers: {
                start: "03",
                end: "04"
            },
            url: {
                start: "/process",
                end: "/contacts"
            }
        }
    }
}

export function pageContacts() {
    return {
        type: CONTACTS,
        page: {
            numbers: {
                start: "04",
                end: "05"
            },
            url: {
                start: "/about",
                end: "/"
            }
        }
    }
}
