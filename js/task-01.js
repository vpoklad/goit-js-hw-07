
const categoryListRef = document.querySelector('#categories');
const categoryQuontity = categoryListRef.children.length;

const itemsListRef = document.querySelectorAll('.item');
const itemsListElementsRef = document.querySelectorAll('.item ul');

console.log(`В списке ${categoryQuontity} категории.`);

for (let i = 0; i < itemsListRef.length; i += 1){

    
    const categoryTile = itemsListRef[i].firstElementChild.textContent;
    const itemsListQuntity = itemsListElementsRef[i].children.length
    console.log(`Категория: ${categoryTile}`);
    console.log(`Количество элементов: ${itemsListQuntity}`);
}



    


