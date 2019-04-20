import { WORKS } from '../constants/works.ts';

export function works(data) {
  return {
    type: WORKS,
    data
  }
}
