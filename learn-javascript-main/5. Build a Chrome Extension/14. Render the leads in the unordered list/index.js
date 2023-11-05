let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

// Render the leads in the unordered list using ulEl.textContent

// this is called as generating the html 
for (let i = 0; i < myLeads.length; i++) {
    ulEl.innerHTML += `<li>${myLeads[i]}</li>`;
}

    


