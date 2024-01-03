export function createMenuPage(){

    //menu main div
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu");

    //header
    const header = document.createElement("header");

    const nav = document.createElement("nav");

    const a1 = document.createElement("a");
    a1.setAttribute("id", "home");
    a1.href = "#";
    a1.textContent = "Home";

    const a2 = document.createElement("a");
    a2.setAttribute("id", "menu");
    a2.href = "#";
    a2.textContent = "Menu";

    const a3 = document.createElement("a");
    a3.setAttribute("id", "contact");
    a3.href = "#";
    a3.textContent = "Contact";

    nav.append(a1);
    nav.append(a2);
    nav.append(a3);
    header.append(nav);
    menuContainer.append(header);

    //menu title
    const h1 = document.createElement("h1");
    h1.textContent = "Menu";
    menuContainer.append(h1);

    //grid container
    const grid = document.createElement("div");
    grid.classList.add("gridContainer");

    //different menu options
    //option1
    const option1 = document.createElement("div");
    option1.classList.add("option1");

    const menuTitle1 = document.createElement("h2");
    menuTitle1.textContent = "Fluffy Pancakes"
    menuTitle1.classList.add('menuTitle');
    option1.append(menuTitle1);

    const menuText1 = document.createElement("p");
    menuText1.textContent = "3 big and fluffy pancakes stacked on top of each other, topped off with maple syrup."
    menuText1.classList.add("menuText");
    option1.append(menuText1);

    const menuPrice1 = document.createElement("p");
    menuPrice1.textContent = "$5.99"
    menuPrice1.classList.add("menuPrice");
    option1.append(menuPrice1);

    grid.append(option1);

    //option2
    const option2 = document.createElement("div");
    option2.classList.add("option2");

    const menuTitle2 = document.createElement("h2");
    menuTitle2.textContent = "French Toast"
    menuTitle2.classList.add('menuTitle');
    option2.append(menuTitle2);

    const menuText2 = document.createElement("p");
    menuText2.textContent = "4 French Toast slices made with cinamon batter and white bread, covered with maple syrup and powdered sugar."
    menuText2.classList.add("menuText");
    option2.append(menuText2);

    const menuPrice2 = document.createElement("p");
    menuPrice2.textContent = "$2.99"
    menuPrice2.classList.add("menuPrice");
    option2.append(menuPrice2);

    grid.append(option2);

    //option3
    const option3 = document.createElement("div");
    option3.classList.add("option3");

    const menuTitle3 = document.createElement("h2");
    menuTitle3.textContent = "Blueberry Pancakes"
    menuTitle3.classList.add('menuTitle');
    option3.append(menuTitle3);

    const menuText3 = document.createElement("p");
    menuText3.textContent = "2 blueberry filled pancakes with boisonberry and boisonberry syrup."
    menuText3.classList.add("menuText");
    option3.append(menuText3);

    const menuPrice3 = document.createElement("p");
    menuPrice3.textContent = "$6.99"
    menuPrice3.classList.add("menuPrice");
    option3.append(menuPrice3);

    grid.append(option3);

    //option4
    const option4 = document.createElement("div");
    option4.classList.add("option4");

    const menuTitle4 = document.createElement("h2");
    menuTitle4.textContent = "Chocolate Chip Pancakes"
    menuTitle4.classList.add('menuTitle');
    option4.append(menuTitle4);

    const menuText4 = document.createElement("p");
    menuText4.textContent = "3 chocolate chip filled pancakes with choice of syrup."
    menuText4.classList.add("menuText");
    option4.append(menuText4);

    const menuPrice4 = document.createElement("p");
    menuPrice4.textContent = "$4.99"
    menuPrice4.classList.add("menuPrice");
    option4.append(menuPrice4);

    grid.append(option4);


    menuContainer.append(grid);
    const content = document.getElementById("content");
    content.append(menuContainer);

    return content;
}