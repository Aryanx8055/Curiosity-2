window.addEventListener("scroll", function () {
    let nav = document.querySelector("nav");
    if (window.scrollY > 700) {
        nav.classList.add("scrolled"); // Add glass effect when scrolled
    } else {
        nav.classList.remove("scrolled"); // Remove it when at top
    }
});
