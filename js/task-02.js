  
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const targetIngredientsListRef = document.querySelector('#ingredients');

const ingredientsList = document.createElement('ul');
ingredientsList.setAttribute('id', 'ingredients');



for (let ingredient of ingredients) {
    const item = document.createElement('li')
    item.textContent = ingredient;
    ingredientsList.append(item);
}


targetIngredientsListRef.replaceWith(ingredientsList);