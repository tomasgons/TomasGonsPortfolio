const toggle = document.querySelector(".toggle")
const nav = document.querySelector("#nav")
const hireBtns = document.querySelectorAll(".cta-btn")
const modal = document.querySelector("#modal")

const container = document.querySelector(".container")
const closeNav = document.querySelector("#close-nav")

const closeModalBtn = document.querySelector("#close")



toggle.addEventListener("click", () => {
    nav.classList.remove("nav-closed");
})
    ;



closeNav.addEventListener("click", () => {
    nav.classList.toggle("nav-closed");


});





hireBtns.forEach((button) => {
    button.addEventListener("click", () => {
        modal.classList.add("modal-containeropen");

    });
})





closeModalBtn.addEventListener("click", () => {
    modal.classList.toggle("modal-containeropen");

});

window.addEventListener("click", (e) =>
    e.target == modal ? modal.classList.remove("modal-containeropen") : false


);





