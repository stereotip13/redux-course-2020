import { combineReducers } from 'redux';
import {
  ASYNCINCREMENT,
  CHANGE_THEME,
  DECREMENT,
  DISABLE_BUTTON,
  ENABLE_BUTTON,
  INCREMENT,
} from './types';

function couterReducer(state = 10, action) {
  switch (action.type) {
    case INCREMENT:
      return (state += 1);
    case DECREMENT:
      return (state -= 1);
    case ASYNCINCREMENT:
      return (state += 10);
  }
  return state;
}
/*  if (action.type === INCREMENT) {
    state = state + 1;
  } else if (action.type === DECREMENT) {
    state = state - 1;
  } else if (action.type === ASYNCINCREMENT) {
    state = state + 10;
  }
  return state;
}*/
const initialThemeState = {
  value: 'light',
  disabled: 'false',
};
function themeReducer(state = initialThemeState, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return { ...state, value: action.payload }; // мы сдесь должны вернуть новый объект, мы разворачиваем старый объект и добавляем или изменяем в нем новые поля
    case ENABLE_BUTTON:
      return { ...state, disabled: false };
    case DISABLE_BUTTON:
      return { ...state, disabled: true };
    default:
      return state;
  }
}
export const rootReducer = combineReducers({
  counter: couterReducer,
  theme: themeReducer,
});
