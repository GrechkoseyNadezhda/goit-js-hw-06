const counterText = document.querySelector('#value');
const counterBtns = document.querySelectorAll('[data-action]');

let counterValue = 0;


counterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.dataset.action === 'decrement' ? counterValue -= 1 : counterValue += 1;
    counterText.textContent = counterValue
  })
})

