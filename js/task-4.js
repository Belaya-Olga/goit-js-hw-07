const form = document.querySelector("form");
form.addEventListener("submit", evn => {
    evn.preventDefault();
    const form = evn.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    if(email === "" || password === "") {
        alert('All form fields must be filled in');
    }
    const users = { email, password};
   console.log(users);
   
   form.reset();
})
