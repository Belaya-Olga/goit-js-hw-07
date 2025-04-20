const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("h1 > #name-output");
nameInput.addEventListener("input", (evt) => {
    const names = nameInput.value.trim();
    if(names === "") {
        nameOutput.textContent = "Anonymous"
        }else {
            nameOutput.textContent = names;
        }
        

} )