<?php
// Подключение к базе данных
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "mydatabase";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Обработка запроса и получение данных из базы данных
if (isset($_GET['tab']) && $_GET['tab'] === 'popular') {
    $sql = "SELECT * FROM authors ORDER BY popularity DESC";
} else {
    $sql = "SELECT * FROM authors ORDER BY trending_score DESC";
}

$result = $conn->query($sql);

// Формирование HTML-кода для возвращаемых данных
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "<p>" . $row["author_name"] . "</p>";
        // Другие данные автора, которые вы хотите отобразить
    }
} else {
    echo "0 результатов";
}

$authorsHTML = '<ul>';
while($row = $result->fetch_assoc()) {
    $authorsHTML .= '<li>' . $row["author_name"] . '</li>';
}
$authorsHTML .= '</ul>';

// Возвращаем HTML-код списка авторов
echo $authorsHTML;

$conn->close();

?>