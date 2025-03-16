let currentIndex = 0; // Başlangıçta ilk slide'ı göstereceğiz
const slides = document.querySelectorAll(".slidess"); // Tüm slide'ları alıyoruz
const totalSlides = slides.length; // Toplam slide sayısı

// Slider geçiş fonksiyonu
function goToSlide(index) {
    const slideWidth = slides[0].clientWidth;
    document.querySelector(".slides").style.transform = `translateX(-${index * slideWidth}px)`;
}

document.querySelector(".prev-btn").addEventListener("click", function () {
    currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
    goToSlide(currentIndex);
});

document.querySelector(".next-btn").addEventListener("click", function () {
    currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
    goToSlide(currentIndex);
});

setInterval(function () {
    currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
    goToSlide(currentIndex);
}, 4000);


const container = document.querySelector('.urun-item-containerr');
const nextBtn = document.querySelector('.next-btnn');
const prevBtn = document.querySelector('.prev-btnn');

let index = 0;
const items = document.querySelectorAll('.urun-itemm');
const itemWidth = items[0].getBoundingClientRect().width + 30;  // Gerçek genişlik hesaplama
const visibleItems = Math.floor(document.querySelector('.urun-item-wrapper').clientWidth / itemWidth);

nextBtn.addEventListener('click', () => {
    if (index < items.length - visibleItems) {
        index++;
        container.style.transform = `translateX(-${index * itemWidth}px)`;
    }
});

prevBtn.addEventListener('click', () => {
    if (index > 0) {
        index--;
        container.style.transform = `translateX(-${index * itemWidth}px)`;
    }
});


const itemContainer = document.querySelector('.urun-item-containerrr'); // Yeni değişken adı
const forwardButton = document.querySelector('.next-btnn');
const backwardButton = document.querySelector('.prev-btnn');

let currentPos = 0;
const totalProducts = document.querySelectorAll('.urun-itemmm');
const productWidth = totalProducts[0].getBoundingClientRect().width + 30;
const visibleProducts = Math.floor(document.querySelector('.urun-item-wrapperr').clientWidth / productWidth);

forwardButton.addEventListener('click', () => {
    if (currentPos < totalProducts.length - visibleProducts) {
        currentPos++;
        itemContainer.style.transform = `translateX(-${currentPos * productWidth}px)`;
    }
});

backwardButton.addEventListener('click', () => {
    if (currentPos > 0) {
        currentPos--;
        itemContainer.style.transform = `translateX(-${currentPos * productWidth}px)`;
    }
});



document.addEventListener('DOMContentLoaded', function () {
    const sliderContainers = document.querySelectorAll('.urun-slider-containerr');

    sliderContainers.forEach(container => {
        const sliderWrapper = container.querySelector('.urun-item-wrapperr');
        const sliderContainer = container.querySelector('.urun-item-containerrr');
        const prevBtn = container.querySelector('.prev-btnn');
        const nextBtn = container.querySelector('.next-btnn');
        const slides = container.querySelectorAll('.urun-itemmm');
        const slideWidth = slides[0].offsetWidth + 30;
        let currentIndex = 0;

        prevBtn.addEventListener('click', function () {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = slides.length - 1;
            }
            updateSlider();
        });

        nextBtn.addEventListener('click', function () {
            if (currentIndex < slides.length - 1) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateSlider();
        });

        function updateSlider() {
            const offset = -currentIndex * slideWidth;
            sliderContainer.style.transform = `translateX(${offset}px)`;
        }
    });
});



document.querySelector('.kayit-ol-butonu').addEventListener('click', function () {
    const adSoyad = document.querySelector('.ad-soyad-input').value;
    const eposta = document.querySelector('.eposta-input').value;

    if (adSoyad && eposta) {
        alert(`Kayıt Başarılı!\nAd Soyad: ${adSoyad}\nE-posta: ${eposta}`);
    } else {
        alert('Lütfen tüm alanları doldurun.');
    }
});



document.addEventListener("DOMContentLoaded", function () {
    var scrollTopBtn = document.getElementById("scrollTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    });

    scrollTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});