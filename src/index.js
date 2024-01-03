import { createHomePage } from './load.js';
import { createMenuPage } from './menu.js';
import { createContactPage } from './contact.js';

createHomePage();

const contentDiv = document.getElementById("content");

document.addEventListener("click", (event) => {
    if (event.target.id === "home") {
      contentDiv.innerHTML = "";
      createHomePage();
      console.log("home clicked");
    } else if (event.target.id === "menu") {
      contentDiv.innerHTML = "";
      createMenuPage();
      console.log("menu clicked");
    } else if (event.target.id === "contact") {
      contentDiv.innerHTML = "";
      createContactPage();
      console.log("contact clicked");
    }
  });


console.log("Hello from index.js");