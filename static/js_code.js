const nameInput = document.querySelector("#user-name-input");

let inputValue, nameVal, pasVal;

nameInput.addEventListener("input", () => {
    inputValue = nameInput.value
    console.log(inputValue);
    checkParams()

})

nameInput.addEventListener("blur", () => {
    if (!inputValue || inputValue.length < 4) {
        nameInput.className = "input-error";
        const p = document.createElement("p");
        p.className = "input-error"
        nameVal = false
    } else nameVal=true
    checkParams()
})

nameInput.addEventListener("focus", () => {
    document.querySelector("#name-input-container > p").remove();
})



const passwordInput = document.querySelector("#password-input");

passwordInput.addEventListener("input", () => {
    inputValue = passwordInput.value
    console.log(inputValue);
    checkParams()
})

passwordInput.addEventListener("blur", () => {
    if (!inputValue || inputValue.length < 8) {
        passwordInput.className = "input-error";
        const p = document.createElement("p");
        p.className = "input-error"
        pasVal =false
    } else  pasVal=true
    checkParams()
})

passwordInput.addEventListener("focus", () => {
    document.querySelector("#password-input > p").remove();
})


const checkboxInput = document.querySelector("#checkbox");

checkboxInput.addEventListener("click", () => {
    document.body.classList.toggle('page-dark');
})