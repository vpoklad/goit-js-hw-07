const inputRef = document.querySelector('#name-input');
const textRef = document.querySelector('#name-output');


inputRef.addEventListener('input', onInputText);

function onInputText(event) {
    if (this.value != ' ') {
        textRef.textContent = event.currentTarget.value;
    }
    
    
    }
     
       
    


