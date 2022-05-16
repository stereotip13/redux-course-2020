import { applyMiddleware, createStore, compose } from 'redux';
import {
  asyncIncrement,
  changeTheme,
  decrement,
  increment,
} from './redux/action';
import { rootReducer } from './redux/rootReducer';
import logger from 'redux-logger';
import { DECREMENT, INCREMENT } from './redux/types';
import './styles.css';
import thunk from 'redux-thunk';

const counter = document.getElementById('counter');
const addbtn = document.getElementById('add');
const subbtn = document.getElementById('sub');
const asyncbtn = document.getElementById('as');
const theme = document.getElementById('theme');

const store = createStore(
  rootReducer,
  compose(
    //объединить мидлварины
    applyMiddleware(thunk, logger), //второй параметр это состояние, третий параметр мидлварина для асинхронных запросов
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

addbtn.addEventListener('click', () => {
  store.dispatch(increment());
});
subbtn.addEventListener('click', () => {
  store.dispatch(decrement());
});
asyncbtn.addEventListener('click', () => {
  store.dispatch(asyncIncrement());
});
theme.addEventListener('click', () => {
  const newTheme = document.body.classList.contains('light') ? 'dark' : 'light';
  store.dispatch(changeTheme(newTheme));
  // document.body.classList.toggle('dark');
});

store.subscribe(() => {
  const state = store.getState();
  counter.textContent = state.counter; //комбайн редюссер включает несколько редюссеров, мы берем из по ключам и передаем во вью
  document.body.className = state.theme.value; //то есть чтобы отрисовать стейт нужно в него передать новое значение стейта
  [addbtn, subbtn, asyncbtn, theme].forEach((btn) => {
    btn.disabled = state.theme.disabled; // для массива из кнопок мы меняем значение стейт на значение disabl
  });
});
store.dispatch({ type: 'INIT_APPLICATION' });
