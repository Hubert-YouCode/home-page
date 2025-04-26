{
const body = document.querySelector(".body");
const button = document.querySelector(".button");
const projectItem = document.querySelector(".project__listItem")
const buttonName = document.querySelector(".button__name")

button.addEventListener("click", () => {
    body.classList.toggle("dark");
    projectItem.classList.toggle("project__listItem--dark");

    if (body.classList.contains("dark")){
        buttonName.innerText = ("Jasny motyw");
    } else {
        buttonName.innerText = ("Ciemny motyw");
    }

});
}