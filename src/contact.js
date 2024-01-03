export function createContactPage() {

    //main contact div
    const contactDiv = document.createElement("div");
    contactDiv.classList.add("contact");

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
    contactDiv.append(header);

    //contact title
    const h1 = document.createElement("h1");
    h1.classList.add("contactTitle");
    h1.textContent = "Contact";
    contactDiv.append(h1);

    //container
    const container = document.createElement("div");
    container.classList.add("contactContainer");

    //address div
    const addressDiv = document.createElement("div");
    addressDiv.classList.add("address");

    //address title
    const h2Address = document.createElement("h2");
    h2Address.textContent = "Address";
    h2Address.classList.add("addressTitle");
    addressDiv.append(h2Address);

    //address
    const address = document.createElement("p");
    address.textContent = "12345 Broadway Street, Los Angeles, CA";
    address.classList.add("addressText");
    addressDiv.append(address);

    container.append(addressDiv);

    //hours div
    const hoursDiv = document.createElement("div");
    hoursDiv.classList.add("hours");

    //hours title
    const hoursTitle = document.createElement("h2");
    hoursTitle.classList.add("hoursTitle");
    hoursTitle.textContent = "Hours"
    hoursDiv.append(hoursTitle);

    //list content
    const hours = {
        "Monday": "Closed",
        "Tuesday": "Closed",
        "Wednesday": "Closed",
        "Thursday": "Closed",
        "Friday": "8:00 AM - 10:00 PM",
        "Saturday": "8:00 AM - 10:00 PM",
        "Sunday": "8:00 AM - 10:00 PM",
    }
    const ul = document.createElement("ul");
    for (let day in hours) {
        const li = document.createElement("li");
        li.textContent = `${day} : ${hours[day]}`;
        ul.append(li);
    }
    hoursDiv.append(ul);
    container.append(hoursDiv);

    //socials
    const socialsDiv = document.createElement("div");
    socialsDiv.classList.add("socials");

    const h2Social = document.createElement("h2");
    h2Social.textContent = "Phone : 123-456-7890";
    socialsDiv.append(h2Social);

    const h2Email = document.createElement("h2");
    h2Email.innerHTML = "Email : PancakeHouse<br>@gmail.com";
    socialsDiv.append(h2Email);

    container.append(socialsDiv);
    contactDiv.append(container);

    const content = document.getElementById("content");
    content.append(contactDiv);

    return content;
}