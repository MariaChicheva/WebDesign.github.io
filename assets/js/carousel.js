document.addEventListener("DOMContentLoaded", function() {
    const carouselContainer = document.querySelector('.js-fanfic-promo-carousel-card-container');
    const numCards = carouselContainer.children.length; // Количество карточек
    const visibleCards = 4; // Количество видимых карточек
    let currentIndex = 0; // Текущий индекс элемента
    let totalWidth = 0; // Суммарная ширина всех карточек

    // Вычислить суммарную ширину всех карточек
    Array.from(carouselContainer.children).forEach(card => {
        totalWidth += card.offsetWidth;
    });

    // Функция для отображения карточек в соответствии с текущим индексом
    function showCards() {
        for (let i = 0; i < numCards; i++) {
            if (i >= currentIndex && i < currentIndex + visibleCards) {
                carouselContainer.children[i].style.display = 'block';
            } else {
                carouselContainer.children[i].style.display = 'none';
            }
        }
    }

    // Показать первоначальные карточки
    showCards();

    // Обработчик для кнопки "вперед"
    document.querySelector('.js-fanfic-promo-carousel-forward').addEventListener('click', function() {
        if (currentIndex < numCards - visibleCards) {
            currentIndex++;
            showCards();
            carouselContainer.style.transform = `translateX(-${getOffset(currentIndex)}px)`;
        }
    });

    // Обработчик для кнопки "назад"
    document.querySelector('.js-fanfic-promo-carousel-backward').addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            showCards();
            carouselContainer.style.transform = `translateX(-${getOffset(currentIndex)}px)`;
        }
    });

    // Функция для вычисления смещения
    function getOffset(index) {
        let offset = 0;
        for (let i = 0; i < index; i++) {
            offset += carouselContainer.children[i].offsetWidth;
        }
        return offset;
    }
});