// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field
let myLeads =[];
const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", function() {
     console.log(inputEl.value);
     myLeads.push(inputEl.value);
     console.log(myLeads);
     inputEl.value= "";
   
});

inputEl.addEventListener('keypress',(event)=>{
    if(event.key === "Enter"){
        console.log(inputEl.value);
        myLeads.push(inputEl.value);
        console.log(myLeads);
        inputEl.value= "";
   
    }
});


