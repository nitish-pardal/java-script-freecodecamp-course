const welcomeEl = document.getElementById("welcome-el")

function greetUser(greeting, name,emogi) {
    // Rewrite the expression using template literals
    welcomeEl.textContent = `${greeting}, ${name} ${emogi}`;
}

greetUser("Howdy", "James","👋");
