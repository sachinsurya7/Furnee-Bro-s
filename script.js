let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.ban img');
    const totalSlides = slides.length;

    slides.forEach((slide, idx) => {
        slide.classList.remove('active');
        if (idx === index) {
            slide.classList.add('active');
        }
    });
}

function startSlider() {
    const slides = document.querySelectorAll('.ban img');
    const totalSlides = slides.length;

    showSlide(currentIndex); // Show the initial slide

    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides; // Move to the next slide
        showSlide(currentIndex);
    }, 3000); // Change image every 3 seconds
}

document.addEventListener("DOMContentLoaded", startSlider);

/*code for shop page header*/


