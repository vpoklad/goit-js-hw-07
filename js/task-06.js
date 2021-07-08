const inputRef = document.querySelector('#validation-input');
const dataLength = Number(inputRef.getAttribute('data-length'));


inputRef.addEventListener('blur', onInputBlurr)



function onInputBlurr(event) {
   
    if (event.currentTarget.value.length === dataLength) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
    }
    else {
        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid');
    }
          
          
        }
   

