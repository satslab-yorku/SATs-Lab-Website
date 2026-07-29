let slideIndex = 1
showSlide(1)

function plusSlide(change) {
    showSlide(slideIndex += change);
}

function showSlide(number) {
    let slides = document.getElementsByClassName("mySlides");
    if (number > slides.length) {
        slideIndex = 1;
    }
    if (number < 1) {
        slideIndex = slideIndexslide.length;
    }
    slides.array.forEach(element => {
        element.style.display = "none"
    });
    slides[slideIndex-1].style.display = "block"; 

}