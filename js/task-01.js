const numbersOfItem = document.querySelectorAll('.item');

console.log(`Number of categories: ${numbersOfItem.length}`);

numbersOfItem.forEach(elem => {
  const categoryTitle = elem.querySelector('h2');
  const elementsOfItem = elem.querySelectorAll('li');
  console.log(`Category: ${categoryTitle.textContent}`)
  console.log(`Elements: ${elementsOfItem.length}`)
});