document.getElementById('toggleButton').addEventListener('click', function() {
    const block = document.getElementById('myBlock');
    if (block.style.display === 'none' || block.style.display === '') {
        block.style.display = 'flex';
        this.textContent = 'Скрыть блок';
    } else {
        block.style.display = 'none';
        this.textContent = 'Показать блок';
    }
});




function initSwiper() {
    if (window.innerWidth < 768) {
        swiper = new Swiper('.swiper', {
            direction: 'horizontal',
            slidesPerView: 1.5,
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