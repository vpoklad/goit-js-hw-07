const inputRef = document.querySelector('#name-input');
const textRef = document.querySelector('#name-output');


inputRef.addEventListener('input', onInputText);

function onInputText(event) {
    event.currentTarget.value.trim() ? textRef.textContent = event.currentTarget.value
        : textRef.textContent = 'незнакомец'
    
    
    }
     
       
    


