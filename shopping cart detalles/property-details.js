const sliderImages = document.querySelectorAll('.slider img');
const thumbnails = document.querySelectorAll('.thumbnail');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

// Actualiza el slider y miniaturas
function updateSlider(index) {
    sliderImages.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
    thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

// Navegar hacia atrás
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
    updateSlider(currentIndex);
});

// Navegar hacia adelante
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % sliderImages.length;
    updateSlider(currentIndex);
});

// Cambiar al hacer clic en miniaturas
thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        currentIndex = index;
        updateSlider(currentIndex);
    });
});
