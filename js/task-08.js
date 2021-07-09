const inputNumberRef = document.querySelector('#controls input');
const buttonRenderRef = document.querySelector('[data-action="render"]');
const buttonDestroyRef = document.querySelector('[data-action="destroy"]');
const targetDiv = document.querySelector('#boxes');



let amount = 0;

inputNumberRef.addEventListener('input', (event) => {
    
    amount = inputNumberRef.valueAsNumber;
   
    
});
    
buttonRenderRef.addEventListener('click', () => {
    console.log('click create');   
    createBoxes(amount)
}
)
buttonDestroyRef.addEventListener('click', () => {
    targetDiv.innerHTML = '';
    console.log('click on destroy');
})


function createBoxes(amount) {
    let size = 30;
    let R;
    let G;
    let B;
    
    

    for (let i = 0; i < amount; i += 1){
        size += 10;
    R = getRandom(0, 256);
    G = getRandom(0, 256);
    B = getRandom(0, 256);
        const newBox = document.createElement('div');
    newBox.style.backgroundColor = 'rgb(' + [R,G,B].join(',') + ')';
    newBox.style.width = `${size}px`
    newBox.style.height = `${size}px`
    targetDiv.appendChild(newBox);

    }
    
}

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}