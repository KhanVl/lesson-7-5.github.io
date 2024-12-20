const showButton = document.querySelector('.toggle-button:not(.hidden)');
const hideButton = document.querySelector('.toggle-button.hidden');
const additionalItems = document.querySelector('.brands-items__inner.second-block');
// Обработчик для кнопки "Показать все"
showButton.addEventListener('click', function () {
    additionalItems.style.display = 'flex';
    showButton.style.display = 'none'; // Скрываем верхнюю кнопку
    hideButton.style.display = 'flex'; // Показываем кнопку "Скрыть"
});
// Обработчик для кнопки "Скрыть"
hideButton.addEventListener('click', function () {
    additionalItems.style.display = 'none';
    showButton.style.display = 'flex'; // Показываем верхнюю кнопку
    hideButton.style.display = 'none'; // Скрываем кнопку "Скрыть"
});



function initSwiper() {
    if (window.innerWidth < 768) {
        swiper = new Swiper('.swiper', {
            direction: 'horizontal',
            slidesPerView: 1.4,
            spaceBetween: 10,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    } else if (swiper) {
        swiper.destroy(); // Уничтожаем Swiper, если он уже инициализирован
        swiper = null; // Обнуляем переменную
    }
}

window.addEventListener('resize', initSwiper);
window.addEventListener('load', initSwiper);

