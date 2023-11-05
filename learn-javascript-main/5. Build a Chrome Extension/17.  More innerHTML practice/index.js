
const container = document.getElementById("container")

container.innerHTML = `<button id="buy-button">Buy!</button>`;
const buyEl =document.getElementById("buy-button");
buyEl.addEventListener('click' ,buy);

function buy(){
  container.innerHTML += "<p>Thanks for buying</p>";
}



// When clicked, render a paragraph under the button (in the container)
// that says "Thank you for buying!"




