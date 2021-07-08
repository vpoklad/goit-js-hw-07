const decrementButtonRef = document.querySelector("[data-action = decrement]");
const incrementButtonRef = document.querySelector("[data-action = increment]");
const valueRef = document.querySelector("#value");

let value = 0;

  function increment() {
    value += 1;
    
    valueRef.textContent = value;
};
  
function decrement() {
  value -= 1;
  
  valueRef.textContent = value;
};


decrementButtonRef.addEventListener('click', decrement);
incrementButtonRef.addEventListener('click', increment);



