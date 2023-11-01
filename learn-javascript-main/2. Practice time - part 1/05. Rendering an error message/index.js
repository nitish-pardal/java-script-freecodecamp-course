// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".
let purchaseEL=document.getElementById('purchase-btn');
let ErrorEl= document.getElementById('error');
purchaseEL.addEventListener('click', renderError); 

function renderError(){
  error.textContent ="Something went wrong, please try again";
}



