document.addEventListener("DOMContentLoaded", function() {
    // Получаем ссылки на набирающих популярность и на популярных авторов
    var trendingLink = document.querySelector('a[name="trending"]');
    var popularLink = document.querySelector('a[name="popular"]');

    // Добавляем обработчики событий на клики по ссылкам
    trendingLink.addEventListener('click', function(event) {
        event.preventDefault(); // Предотвращаем переход по ссылке по умолчанию
        fetchData('/authors#trending'); // Отправляем запрос на сервер
    });

    popularLink.addEventListener('click', function(event) {
        event.preventDefault(); // Предотвращаем переход по ссылке по умолчанию
        fetchData('/authors?tab=popular#popular'); // Отправляем запрос на сервер
    });

    // Функция для отправки запроса на сервер
    function fetchData(url) {
        fetch(url)
            .then(response => response.text()) // Получаем текстовый ответ от сервера
            .then(data => {
                // Обновляем часть страницы с полученными данными
                document.getElementById('authorsList').innerHTML = data;
            })
            .catch(error => {
                console.error('Произошла ошибка:', error);
            });
    }
});