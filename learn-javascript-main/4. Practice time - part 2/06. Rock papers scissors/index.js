let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array


function getHand(){
  let randomnumber = Math.random();
  if(randomnumber>=0 && randomnumber <0.35)
    return hands[0]
  else if (randomnumber>=0.35 && randomnumber<=0.65)
    return hands[1] 
  else 
  return hands[2]   
}
// method 2- by using the index 
function usingRandomIndex(){
  let randomIndex = Math.floor(Math.random() * 3);
  return hands[randomIndex];
}
console.log(usingRandomIndex());
console.log(getHand());