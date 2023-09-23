//Scroll Bar
const bodyEl = document.body;
const barEl = document.querySelector('.bar');
const updateBar = () => {
    let scrollPos = (window.scrollY /
    (bodyEl.scrollHeight - window.innerHeight)) * 100;
    barEl.style.width = `${scrollPos}%`;
    requestAnimationFrame(updateBar);

};

updateBar();


//hamburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".unorder-list");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

