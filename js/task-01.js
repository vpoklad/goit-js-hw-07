
const categoryTitles = document.querySelectorAll('#categories h2');


console.log(`В списке ${categoryTitles.length} категории.`);

categoryTitles.forEach((element) => {
    const itemList = element.parentNode.querySelectorAll('li');
    console.log(`Категория: ${element.textContent}`);
    console.log(`Количество элементов: ${itemList.length}`); 
})


    


