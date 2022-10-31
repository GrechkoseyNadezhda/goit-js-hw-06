const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

ingredients.forEach(elem => {
  const ingredient = document.createElement('li');
  ingredient.textContent = elem;
  ingredient.classList.add('item');
  ingredientsList.append(ingredient);
});

