let body = document.querySelector(".body");
let button = document.querySelector(".button");
let projectItem = document.querySelector(".project__listItem")
let buttonName = document.querySelector(".button__name")

button.addEventListener("click", () => {
    body.classList.toggle("dark");
    projectItem.classList.toggle("project__listItem--dark");

    if (body.classList.contains("dark")){
        buttonName.innerText = ("Jasny motyw");
    } else {
        buttonName.innerText = ("Ciemny motyw");
    }

})