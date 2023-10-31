// grab the count-el element, store it in a countEl variable
 let countEl =document.getElementById('increment-btn');
 countEl.addEventListener('click', ()=>{
    increment();
 })
 let count=0;
function increment(){
    
    count+=1;
    document.getElementById('count-el').innerText=count;
}

