

//Объект 1, забираем id

const lft01 = document.getElementById('left_front_tires_01');
const rft01 = document.getElementById('right_front_tires_01');
const lrt01 = document.getElementById('left_rear_tires_01');
const rrt01 = document.getElementById('right_rear_tires_01');
const stat1 = document.getElementById('obj1');
// рандомные значения
function math1() {
    randomlft01 = Math.floor(Math.random() * 10);
    randomrft01 = Math.floor(Math.random() * 10);
    randomlrt01 = Math.floor(Math.random() * 10);
    randomrrt01 = Math.floor(Math.random() * 10);
}
// логика выбора
const func1 = () => {
    math1();
    if (randomlrt01 >= 4) {
        lrt01.style.background = 'green';
        stat1.style.backgroundImage = "url(image/gal.png)";
    }
    if (randomrrt01 >= 4) {
        rrt01.style.background = 'green';
        stat1.style.backgroundImage = "url(image/gal.png)";
    }
    if (randomlft01 >= 4) {
        lft01.style.background = 'green';
        stat1.style.backgroundImage = "url(image/gal.png)";
    }
    if (randomrft01 >= 4) {
        rft01.style.background = 'green';
        stat1.style.backgroundImage = "url(image/gal.png)";
    }
    if (randomlrt01 >= 2 && randomlrt01 < 4) {
        lrt01.style.background = 'yellow';
        stat1.style.backgroundImage = "url(image/er.png)";
    }
    if (randomrrt01 >= 2 && randomrrt01 < 4) {
        rrt01.style.background = 'yellow';
        stat1.style.backgroundImage = "url(image/er.png)";
    }
    if (randomlrt01 < 2) {
        rrt01.style.background = 'red';
        stat1.style.backgroundImage = "url(image/er.png)";
    }
    if (randomrrt01 < 2) {
        rft01.style.background = 'red';
        stat1.style.backgroundImage = "url(image/er.png)";
    }
    if (randomlft01 >= 2 && randomlft01 < 4) {
        lft01.style.background = 'yellow';
        stat1.style.backgroundImage = "url(image/er.png)";
    }
    if (randomrft01 >= 2 && randomrft01 < 4) {
        rft01.style.background = 'yellow';
        stat1.style.backgroundImage = "url(image/er.png)";
    }
    if (randomlft01 < 2) {
        lft01.style.background = 'red';
        stat1.style.backgroundImage = "url(image/er.png)";
    }
    if (randomrft01 < 2) {
        rft01.style.background = 'red';
        stat1.style.backgroundImage = "url(image/er.png)";
    }

}
func1();
setInterval(func1, 1000);


//Объект 2, забираем id
const lft02 = document.getElementById('left_front_tires_02');
const rft02 = document.getElementById('right_front_tires_02');
const lrt02 = document.getElementById('left_rear_tires_02');
const rrt02 = document.getElementById('right_rear_tires_02');
const stat2 = document.getElementById('obj2');
// рандомные значения
function math2() {
    randomlft02 = Math.floor(Math.random() * 10);
    randomrft02 = Math.floor(Math.random() * 10);
    randomlrt02 = Math.floor(Math.random() * 10);
    randomrrt02 = Math.floor(Math.random() * 10);
}
// логика выбора
const func2 = () => {
    math2();
    if (randomlrt02 >= 4) {
        lrt02.style.background = 'green';
        stat2.style.backgroundImage = "url(image/gal.png)";
        console.log(randomlrt02);
    }
    if (randomrrt02 >= 4) {
        rrt02.style.background = 'green';
        stat2.style.backgroundImage = "url(image/gal.png)";
        console.log(randomrrt02);
    }
    if (randomlft02 >= 4) {
        lft02.style.background = 'green';
        stat2.style.backgroundImage = "url(image/gal.png)";
        console.log(randomlft02);
    }
    if (randomrft02 >= 4) {
        rft02.style.background = 'green';
        stat2.style.backgroundImage = "url(image/gal.png)";
        console.log(randomrft02);
    }
    if (randomlrt02 >= 2 && randomlrt02 < 4) {
        lrt02.style.background = 'yellow';
        stat2.style.backgroundImage = "url(image/er.png)";
    }
    if (randomrrt02 >= 2 && randomrrt02 < 4) {
        rrt02.style.background = 'yellow';
        stat2.style.backgroundImage = "url(image/er.png)";
    }
    if (randomlrt02 < 2) {
        lrt02.style.background = 'red';
        stat2.style.backgroundImage = "url(image/er.png)";
    }
    if (randomrrt02 < 2) {
        rrt02.style.background = 'red';
        stat2.style.backgroundImage = "url(image/er.png)";
    }
    if (randomlft02 >= 2 && randomlft02 < 4) {
        lft02.style.background = 'yellow';
        stat2.style.backgroundImage = "url(image/er.png)";
    }
    if (randomrft02 >= 2 && randomrft02 < 4) {
        rft02.style.background = 'yellow';
        stat2.style.backgroundImage = "url(image/er.png)";
    }
    if (randomlft02 < 2) {
        lft02.style.background = 'red';
        stat2.style.backgroundImage = "url(image/er.png)";
    }
    if (randomrft02 < 2) {
        rft02.style.background = 'red';
        stat2.style.backgroundImage = "url(image/er.png)";
    }

}
func2();
setInterval(func2, 1000);








/*const tires = document.getElementById('left_front_tires_01');
const stat = document.getElementById('obj1');
const func = () => {
    countTires = (Math.floor(Math.random() * 10));
    if (countTires <= 10 && countTires >= 7) {
        tires.style.background = 'green';
        stat.style.backgroundImage = "url(image/gal.png)";
    }
    if (countTires < 7 && countTires >= 4) {
        tires.style.background = 'yellow';
        stat.style.backgroundImage = "url(image/er.png)";
    }
    if (countTires < 4) {
        tires.style.background = 'red';
        stat.style.backgroundImage = "url(image/er.png)";
    }
}
func();
setInterval(func, 1000);*/


//let valueTires = parseInt(prompt('Введите значение давления в шине'));














/*
(function () {
    alert('Привет, Wialon!');

    let session = wialon.core.Session.getInstance();
    session.initSession('https://hst-api.wialon.com');

    let token = 'авторизационный токен';
    session.loginToken(token, loginCallback);


    function loginCallback(code) {
        if (code) {
            alert('Ошибка авторизации: ' + code);
        } else {
            alert('Авторизации прошла успешно');
            let user = session.getCurrUser();
            document.getElementById('username').innerHTML = user.getName();
            printItems();
        }
    }


    function printItems() {
        let searchSpec = {
            itemsType: "avl_unit", // тип искомых элементов системы Wialon
            propName: "sys_name", // имя свойства, по которому будет осуществляться поиск
            propValueMask: "*",   // значение свойства — могут быть использованы * | , > < =
            sortType: "sys_name"  // имя свойства, по которому будет осуществляться сортировка ответа
        };
        let dataFlags = wialon.item.Item.dataFlag.base |        // флаг базовых свойств
            wialon.item.Unit.dataFlag.lastMessage;  // флаг данных последнего сообщения

        // запрос поиска объектов
        session.searchItems(searchSpec, true, dataFlags, 0, 0, function (code, data) {
            if (code) {
                alert(wialon.core.Errors.getErrorText(code));
                return;
            }
            // генерация таблицы данных
            let table = '<table><tr><td>Unit</td><td colspan="3">Last message</td></tr>';
            let pos;
            for (let i = 0; i < data.totalItemsCount; i++) {
                pos = data.items[i].getPosition();
                table += '<tr><td>' + data.items[i].getName() + '</td>';
                if (pos) {
                    table += '<td>' + pos.y + '</td><td>' + pos.x + '</td><td>' +
                        wialon.util.DateTime.formatTime(pos.t);
                } else {
                    table += '<td colspan="3">';
                }
                table += '</td></tr>';
            }
            table += '</table>';
            document.querySelector("#units").innerHTML = table;
        });
    }

})();

*/