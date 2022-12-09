const arrowTop = document.querySelector('.arrow-body');

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        arrowTop.classList.add("_active");
    } else {
        arrowTop.classList.remove("_active");
    }
});

arrowTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})
