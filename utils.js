let currentSlideIndex = 0;

const showSlide = (newIndex) => {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    if (newIndex > slides.length - 1) {currentSlideIndex = 0}
    if (newIndex < 0) {currentSlideIndex = slides.length - 1}
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[currentSlideIndex].style.display = "block";
}

const nextSlide = () => showSlide(++currentSlideIndex);
const prevSlide = () => showSlide(--currentSlideIndex);


showSlide(currentSlideIndex);