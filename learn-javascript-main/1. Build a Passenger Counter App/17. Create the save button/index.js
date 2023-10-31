let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
    save();
}

// 1. Create a function, save(), which logs out the count when it's called
document.getElementById('save-btn').addEventListener('click',()=>{
    save();
});

function save(){
    console.log(count);
}


