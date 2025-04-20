const items = document.querySelectorAll("#categories .item");
// console.log(items)
items.forEach((item) => {
    const header = item.querySelector("h2");
    const subHeader = item.querySelectorAll("ul > li");
    console.log(`Category:`, header.textContent);
    console.log(`Elements:`, subHeader.length);
})

// addClass = document.querySelector("#categories");
// addClass.classList.add("background");