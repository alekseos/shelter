import { ALL_PROJECTS, APP, DESIGN, ELEMENTS, LANDING_PAGE } from '../constants/filter.ts';

export function filterAllProjects() {
  return {
    type: ALL_PROJECTS,
    filter: "allProject"
  }
}

export function filterLandingPage() {
  return {
    type: LANDING_PAGE,
    filter: "landingPage"
  }
}

export function filterElements() {
  return {
    type: ELEMENTS,
    filter: "elements"
  }
}

export function filterApp() {
  return {
    type: APP,
    filter: "app"
  }
}

export function filterDesign() {
  return {
    type: DESIGN,
    filter: "design"
  }
}
