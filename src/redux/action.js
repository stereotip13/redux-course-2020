import {
  ASYNCINCREMENT,
  CHANGE_THEME,
  DECREMENT,
  DISABLE_BUTTON,
  ENABLE_BUTTON,
  INCREMENT,
} from './types';

export function increment() {
  return {
    type: INCREMENT,
  };
}
export function decrement() {
  return {
    type: DECREMENT,
  };
}

export function changeTheme(newTheme) {
  return { type: CHANGE_THEME, payload: newTheme };
}
export function enableButton() {
  return { type: ENABLE_BUTTON };
}
export function disableButton() {
  return { type: DISABLE_BUTTON };
}
export function asyncIncrement() {
  return function (dispatch) {
    dispatch(disableButton());
    setTimeout(() => {
      dispatch({ type: ASYNCINCREMENT });
      dispatch(enableButton());
    }, 3000);
  };
}
