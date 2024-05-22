// Запросы. Домашняя работа

/* Задание №1.1. 
Сделайте запрос на адрес 'https://rickandmortyapi.com/api/character'.
Используйте fetch или ajax. Отобразите на странице имена персонажей из 
Рика и Морти в list. 
let block1 = $('.block1');
let list = $('.list');
(Вы можете стилизовать страницу по желанию.)
*/

/* Задание №1.2. 
Рядом с именами отобразите все изображения
которые вы получили вместе с остальными данными из сервера.
*/
let serverRM = "https://rickandmortyapi.com/api/character";
let API = "http://localhost:8000/characters";
let block1 = $(".block1");
let block2 = $(".block2");
let list = $(".list");
let list2 = $(".list2");

function displayCharacters(container, characters) {
  characters.forEach((person) => {
    container.innerHTML += `<li>${person.name} <img src="${person.image}" alt="${person.name}"></li>`;
  });
}
fetch(serverRM)
  .then((response) => response.json())
  .then((data) => {
    displayCharacters(list1, data.results);
    // Сохранение данных на локальный сервер
    data.results.forEach((person) => {
      fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(person),
      })
        .then((response) => response.json())
        .then((data) => console.log("Персонаж сохранен:", data))
        .catch((error) => console.error("Ошибка сохранения символа:", error));
    });
  })
  .catch((error) => console.error("Ошибка при получении данных:", error));
/* Задание №1.3. 
Создайте файл db.json и запустите локальный сервер.
Данные которые вы получили во втором задании, сохраните 
в локальном сервере db.json, в массиве под 
названием "characters".
Подсказка: как только ваши данные сохранились в db.json
функцию, которая отправляет запрос на db.json стоит закомментировать.
*/

// Получение данных с локального сервера и отображение их во втором блоке
fetch(API)
  .then((response) => response.json())
  .then((characters) => {
    displayCharacters(block2, characters);
  })
  .catch((error) => console.error("Ошибка получения локальных данных:", error));
/* Задание №1.4. 
А теперь сделайте запрос на локальный сервер.
Во второй блок с классом 'block-2', отобразите имена, которые 
вы получили (стянули) с db.json.*/
// Отправка запроса на локальный сервер и отображение данных во втором блоке
fetch(API)
  .then((response) => response.json())
  .then((characters) => {
    const block2 = document.querySelector(".block-2");
    characters.forEach((person) => {
      block2.innerHTML += `<li>${person.name}<img src="${person.image}"></li>`;
    });
  })
  .catch((error) => console.error("Ошибка получения локальных данных:", error));

// Удаление лишнего кода для отправки данных на локальный сервер

fetch(API)
  .then((response) => response.json())
  .then((info) => {
    info.results.forEach((person) => {
      let obj = {
        name: person.name,
        image: person.image,
      };
      setItemToJson(obj);
    });
  });

function setItemToJson(obj) {
  fetch(API, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  });
}

/* Задание №1.5. 
К именам добавьте картинки персонажей.
В итоге у вас должна получиться точная копия первых двух тасков.
Отличие которых лишь в базе данных.
*/
// Отправка запроса на локальный сервер и отображение данных во втором блоке
fetch(API)
  .then((response) => response.json())
  .then((characters) => {
    const block2 = document.querySelector(".block-2");
    characters.forEach((person) => {
      block2.innerHTML += `<li>${person.name}<img src="${person.image}"></li>`;
    });
  })
  .catch((error) => console.error("Ошибка получения локальных данных:", error));
