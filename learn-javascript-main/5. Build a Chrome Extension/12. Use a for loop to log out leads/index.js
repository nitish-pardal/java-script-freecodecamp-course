let myLeads = ["nitish" ,"pardal","how is your day"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
renderOutArray();
});

  /*  for (i=0;i<myLeads.length;i++)
{
    console.log(myLeads[i]);
}
*/
myLeads.forEach((element)=>{
    console.log(element);
});




// Log out the items in the myLeads array using a for loop 



