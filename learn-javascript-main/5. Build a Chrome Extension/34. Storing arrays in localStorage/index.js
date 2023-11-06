let myLeads =  '["www.awesomeleads.com"]' ;
myLeads = JSON.parse(myLeads);

console.log(myLeads);
myLeads.push("www.nitishPardal.com");
console.log(myLeads);
myLeads = JSON.stringify(myLeads);
console.log(myLeads);
console.log(typeof myLeads);

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")



inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = "";

    renderLeads()
    localStorage.setItem(`myleads` ,JSON.stringify(myLeads));
    console.log();
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  

}
