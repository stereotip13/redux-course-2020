import { DECREMENT, INCREMENT } from './types';

export function rootReducer(state, action) {
  if (action.type === INCREMENT) {
    state = state + 1;
  } else if (action.type === DECREMENT) {
    state = state - 1;
  }
  return state;
}
