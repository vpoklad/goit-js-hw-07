const inputSliderRef = document.querySelector('#font-size-control');
const textResultRef = document.querySelector("#text")

inputSliderRef.addEventListener('input', onSliderInput)
// textResultRef.style.fontSize = '40px';

function onSliderInput(event) {
    let fontSize = event.currentTarget.value
   

    textResultRef.style.fontSize = fontSize +'px';
}
