
const categoryListRef = document.querySelector('#categories');
const categoryQuontity = categoryListRef.children.length;

const itemsListRef = document.querySelectorAll('.item');
const itemsListElementsRef = document.querySelectorAll('.item ul');

console.log(`В списке ${categoryQuontity} категории.`);


itemsListElementsRef.forEach((element) => {
   const categoryTile = element.firstElementChild.textContent;
    const itemsListQuntity = element.children.length
    console.log(`Категория: ${categoryTile}`);
    console.log(`Количество элементов: ${itemsListQuntity}`);  
})





    


