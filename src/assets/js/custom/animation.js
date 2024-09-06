// Fungsi untuk memeriksa apakah elemen berada di viewport
const isElementInView = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

// Pilih semua elemen berdasarkan class
const featureCards = document.querySelectorAll('.features__card');
const testimonialCards = document.querySelectorAll('.testimonial__card');
const metricsCards = document.querySelectorAll('.metrics__card');
const otherElements = document.querySelectorAll('.clients, .heading--center, .heading__title--center, .heading__paragraf--center, .animation-heading-3, .logos__content-image-wrap, .cta__apps');

// Fungsi untuk animasi dengan delay untuk elemen .clients
const animateWithDelay = (elements, delayMultiplier) => {
    elements.forEach((el, index) => {
        if (isElementInView(el) && !el.classList.contains('is-visible')) {
            setTimeout(() => {
                el.style.opacity = 1;
                el.style.transform = 'translateY(0)';
                el.classList.add('is-visible');
            }, index * delayMultiplier); // Delay berdasarkan nilai multiplier
        }
    });
};

// Fungsi untuk animasi tanpa delay untuk elemen lainnya
const animateOtherElements = () => {
    otherElements.forEach(el => {
        if (isElementInView(el) && !el.classList.contains('is-visible')) {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
            el.classList.add('is-visible');
        }
    });
};

// Gabungkan fungsi-fungsi tersebut saat scroll atau load

const handleScroll = () => {
    animateWithDelay(featureCards, 100); // 100ms delay antara elemen .features__card
    animateWithDelay(testimonialCards, 0.1); // 200ms delay antara elemen .testimonial__card
    animateWithDelay(metricsCards, 100); // 300ms delay antara elemen .metrics__card
    animateOtherElements(); // Animasi tanpa delay untuk elemen lain

};

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);
