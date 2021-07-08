const inputRef = document.querySelector('#name-input');
const textRef = document.querySelector('#name-output');

inputRef.addEventListener('input',(event) => {
    textRef.textContent = event.currentTarget.value;
})