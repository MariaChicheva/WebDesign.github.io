var searchPlaceholder = document.getElementById('search');
var placeholders = [
    'Название',
    'bla',
    'blabla',
    'asdasd',
    'qweqwe',
    'zxczxc',
    '123456',
    'abcdef',
    'qwerty',
    '123123',
    '666666',
    '111111',
    '222222',
    '333333',
    '444444',
    '555555',
    '654321',
    '13579',
    'hello',
    'world'
];

var currentIndex = 0;

function changePlaceholder() {
    searchPlaceholder.placeholder = 'Название ' + placeholders[currentIndex];
    currentIndex = (currentIndex + 1) % (placeholders.length);
}

searchPlaceholder.placeholder = 'Название Название';
setInterval(changePlaceholder, 3000);

