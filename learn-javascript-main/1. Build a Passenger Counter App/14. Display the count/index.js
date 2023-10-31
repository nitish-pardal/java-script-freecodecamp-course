//

// change the count-el in the HTML to reflect the new count

let count = 0
let countEl=document.getElementById('count-el');
function increment() {
    count = count + 1;
     countEl.innerText =count;
    console.log(count);
}


