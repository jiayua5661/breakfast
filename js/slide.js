
let slideIndex = 0;
let x = document.getElementsByClassName("bannercutimg");
showDivs();

function showDivs() {
    for (let i = 0; i < x.length; i++) {
        x[i].style.opacity = "0";
    }
    x[slideIndex].style.opacity = "1";
    slideIndex++;
    if (slideIndex >= x.length) {
        slideIndex = 0;
    }
    setTimeout(showDivs, 3000);
}