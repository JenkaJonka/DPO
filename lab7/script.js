let count = document.querySelector(".result_count_out");
var randomNum = 1 + Math.floor(Math.random() * 10);
var item = 0;
var person = prompt("Как Вас зовут?")
alert("Привет, " + person + ". Начнем же игру!");

document.getElementById("f_btn").onclick = function () {
    let userNum = document.getElementById("f_input").value;

    if (isNaN(parseInt(userNum)) || userNum < 1 || userNum > 10) {
        alert('Ошибка! Введите целое число от 1 до 10');
    }
    else if (parseInt(userNum).toString().length < userNum.length) {
        alert('Ошибка! Введите целое число от 1 до 10');
    }

    else if (userNum > randomNum) {
        item++;
        alert("Загаданное число меньше! " + "Это была ваша " + item + " попытка!");
        count.textContent = item;
    }

    else if (userNum < randomNum) {
        item++;
        alert("Загаданное число больше! " + "Это была ваша " + item + " попытка!");
        count.textContent = item;
    }

    else if (userNum == randomNum) {
        item++;
        alert("Победа! Вы угадали число!!! " + "Это была ваша " + item + " попытка!");
        count.textContent = item;
        if (confirm("Сыграть еще раз?")) {
            item = 0;
            location.reload();
        }
        else {
            alert("Очень жаль! Будем ждать тебя снова!");
            item = 0;
            location.reload();
        }
    }

    if (item == 5) {
        alert("Это была последняя попытка!");
        if (confirm("Хотите сыграть новую игру?")) {
            location.reload();
        }
        else {
            alert("До встречи!");
            location.reload();
        }
    }
}

