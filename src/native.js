import './styles.css';

const counter = document.getElementById('counter');
const addbtn = document.getElementById('add');
const subbtn = document.getElementById('sub');
const asyncbtn = document.getElementById('as');
const theme = document.getElementById('theme');
let state = 10;
function render() {
  counter.textContent = state;
}
addbtn.addEventListener('click', () => {
  state++;
  render();
  console.log(state);
});
subbtn.addEventListener('click', () => {
  state--;
  render();
  console.log(state);
});
asyncbtn.addEventListener('click', () => {
  setTimeout(() => {
    state--;
    render();
    console.log(`($state)`);
  }, 2000);
});
theme.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
render();
