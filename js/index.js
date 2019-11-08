window.onload = showSlidesAuto;

let slideIndex = { ind: 0 };

let i = { cont: 0 };
let slides = document.getElementsByClassName("mySlides");

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex.ind += n);


}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex.ind = n);
}



//Automatico;

let timer;
function showSlidesAuto() {

    for (i.cont = 0; i.cont < slides.length; i.cont++) {
        slides[i.cont].style.display = "none";
    }
    slideIndex.ind++;
    if (slideIndex.ind > slides.length) {
        slideIndex.ind = 1;
    }
    slides[slideIndex.ind - 1].style.display = "block";
    timer=setTimeout(showSlidesAuto, 5000); // Change image every 5 seconds
};

//manuale

function showSlides(n) {
    clearTimeout(timer);
    timer=setTimeout(showSlidesAuto, 5000);
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex.ind = 1;
    }
    if (n < 1) {
        slideIndex.ind = slides.length;
    }
    for (i.cont = 0; i.cont < slides.length; i.cont++) {
        slides[i.cont].style.display = "none";
    }
    for (i.cont = 0; i.cont < dots.length; i.cont++) {
        dots[i.cont].className = dots[i.cont].className.replace(" active", "");
    }
    slides[slideIndex.ind - 1].style.display = "block";
    dots[slideIndex.ind - 1].className += " active";
};