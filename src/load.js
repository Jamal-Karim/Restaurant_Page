export function createHomePage() {

    //homepage div
    const homePageDiv = document.createElement("div");
    homePageDiv.classList.add("homepage");

    //header
    const header = document.createElement("header");

    const nav = document.createElement("nav");

    const a1 = document.createElement("a");
    a1.href = "#";
    a1.textContent = "Home";

    const a2 = document.createElement("a");
    a2.href = "#";
    a2.textContent = "Menu";

    const a3 = document.createElement("a");
    a3.href = "#";
    a3.textContent = "Contact";

    nav.append(a1);
    nav.append(a2);
    nav.append(a3);
    header.append(nav);

    //title

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("titleContainer");
    const h1 = document.createElement("h1");
    h1.innerHTML = "Pancake <br>House"
    h1.classList.add("title");
    titleDiv.append(h1);

    //add to content div

    const content = document.getElementById("content");

    homePageDiv.append(header);
    homePageDiv.append(titleDiv);

    content.append(homePageDiv);

    return content;
}
