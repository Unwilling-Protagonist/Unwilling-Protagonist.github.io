document.addEventListener("DOMContentLoaded", () => {
        const header = document.getElementById("header");
    const page = document.body.getAttribute("class")
    window.onload = function() {
        header.className = "slide-down"
        if (page === "home"){
            header.className  = "delayed-slide-down";
        }
        backgroundimage.className  = "slow-slide-down";
        title.className = "even-slower-slide-down";
    }
    function hideHeader() {
        if (window.scrollY > 1000) {
            header.className = "slide-down";
            header.style.position = "sticky";
            header.style.top = "0";
        } else {
            header.style.position = "static";
            header.className = "none";
        }
    }
    window.addEventListener("scroll", hideHeader)
});