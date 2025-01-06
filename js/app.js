
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


document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.brands-item');
    const toggleButton = document.querySelector('.toggle-button');
    if (!toggleButton) {
        console.warn('Элемент .toggle-button не найден.');
        return;
    }
    const buttonText = toggleButton.querySelector('.brands-button__more');
    const buttonIcon = toggleButton.querySelector('.icon');
    const visibleCount = 8;
    let expanded = false;

    items.forEach((item, index) => {
        if (index < visibleCount) item.classList.add('visible');
    });

    if (items.length > visibleCount) toggleButton.style.display = 'flex';

    toggleButton.addEventListener('click', function() {
        expanded = !expanded;
        items.forEach((item, index) => {
            if (index >= visibleCount) item.classList.toggle('visible', expanded);
        });
        buttonText.textContent = expanded ? 'Скрыть' : 'Показать все';
        buttonIcon.classList.toggle('rotated', expanded);
    });
});