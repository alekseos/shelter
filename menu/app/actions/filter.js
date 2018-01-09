import { ALL_PROJECTS, PORTFOLIO, LANDING_PAGE, ONLINE_STORES, APPS, DESIGN } from '../constants/filter';

export function filterAllProjects() {
  return {
    type: ALL_PROJECTS,
    filter: "allProjects"
  }
}

export function filterPortfolio() {
  return {
    type: PORTFOLIO,
    filter: "portfolio"
  }
}

export function filterLandingPage() {
  return {
    type: LANDING_PAGE,
    filter: "landingPage"
  }
}

export function filterOnlineStores() {
  return {
    type: ONLINE_STORES,
    filter: "onlineStores"
  }
}

export function filterApps() {
  return {
    type: APPS,
    filter: "apps"
  }
}

export function filterDesign() {
  return {
    type: DESIGN,
    filter: "design"
  }
}
