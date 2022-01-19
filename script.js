const toggle = document.querySelector(".toggle")
const nav = document.querySelector("#nav")
const hireBtns = document.querySelectorAll(".cta-btn")
const modal = document.querySelector("#modal")

const container = document.querySelector(".container")
const closeNav = document.querySelector("#close-nav")

const closeModalBtn = document.querySelector("#close")

const links = document.querySelectorAll("nav li")

toggle.addEventListener("click", () => {
    nav.classList.remove("nav-closed");
})
    ;



closeNav.addEventListener("click", () => {
    nav.classList.toggle("nav-closed");


});

links.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.add("nav-closed");
    })

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

container.addEventListener("click", (e) =>
    e.target !== nav ? nav.classList.add("nav-closed") : false


);


const slideInLeft = () => {
    const titleBox = document.querySelectorAll('.subtitle-left');

    titleBox.forEach(function (box) {

        const titlePosition = box.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.9;

        if (titlePosition < screenPosition) {
            box.classList.add('slide-in-left');
        }

    });
}
window.addEventListener('scroll', slideInLeft);
