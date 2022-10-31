const colorBtn = document.querySelector('.change-color');
const colorText = document.querySelector('.color');
const body = document.body;


colorBtn.addEventListener('click', () => {
  const color = getRandomHexColor()
  body.style.backgroundColor = color;
  colorText.textContent = `${color}`;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

