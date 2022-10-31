const inputCount = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const allBoxes = document.querySelector('#boxes')

let size = 30;

createBtn.addEventListener('click', () => {
  createBoxes(Number(inputCount.value));
  inputCount.value = '';
})

destroyBtn.addEventListener('click', destroyBoxes)

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    createSomeElement();
    size += 10;
  }
}

function createSomeElement() {
  const box = document.createElement('div');
  box.style.backgroundColor = getRandomHexColor();
  box.style.width = `${size}px`;
  box.style.height = `${size}px`;
  allBoxes.append(box);
}

function destroyBoxes() {
  [...allBoxes.children].forEach(el => el.remove());
  size = 30;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

