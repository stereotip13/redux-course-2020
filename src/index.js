import { createStore } from 'redux';
import { decrement, increment } from './redux/action';
import { rootReducer } from './redux/rootReducer';
import { DECREMENT, INCREMENT } from './redux/types';
import './styles.css';

const counter = document.getElementById('counter');
const addbtn = document.getElementById('add');
const subbtn = document.getElementById('sub');
const asyncbtn = document.getElementById('as');
const theme = document.getElementById('theme');

const store = createStore(rootReducer, 0);

addbtn.addEventListener('click', () => {
  store.dispatch(increment());
});
subbtn.addEventListener('click', () => {
  store.dispatch(decrement());
});

asyncbtn.addEventListener('click', () => {
  setTimeout(() => {
    store.dispatch(increment());
  }, 3000);
});

store.subscribe(() => {
  const state = store.getState();
  counter.textContent = state;
});
store.dispatch({ type: 'INIT_APPLICATION' });
