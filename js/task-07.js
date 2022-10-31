const inputRange = document.querySelector('#font-size-control');
const textRange = document.querySelector('#text')

text.style.fontSize = `${inputRange.value}px`;

inputRange.addEventListener('input', () => {
  text.style.fontSize = `${inputRange.value}px`;
});