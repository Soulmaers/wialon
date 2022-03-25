

//забираем объект
let alls = document.getElementsByClassName('tires');
const stat1 = document.getElementById('obj1');
let time1 = document.getElementById('tObj1');
//Объект 1, 

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
    time1.textContent = getNowtime();
    if (randomlrt01 >= 4) {
        alls[2].style.background = 'green';
        stat1.style.backgroundImage = "url(image/gal.png)";

    }
    if (randomrrt01 >= 4) {
        alls[3].style.background = 'green';
        stat1.style.backgroundImage = "url(image/gal.png)";
    }
    if (randomlft01 >= 4) {
        alls[0].style.background = 'green';
        stat1.style.backgroundImage = "url(image/gal.png)";
    }
    if (randomrft01 >= 4) {
        alls[1].style.background = 'green';
        stat1.style.backgroundImage = "url(image/gal.png)";
    }
    if (randomlrt01 >= 2 && randomlrt01 < 4) {
        alls[2].style.background = 'yellow';
        stat1.style.backgroundImage = "url(image/er.png)";
    }
    if (randomrrt01 >= 2 && randomrrt01 < 4) {
        alls[3].style.background = 'yellow';
        stat1.style.backgroundImage = "url(image/er.png)";
    }
    if (randomlrt01 < 2) {
        alls[2].style.background = 'red';
        stat1.style.backgroundImage = "url(image/er.png)";
    }
    if (randomrrt01 < 2) {
        alls[3].style.background = 'red';
        stat1.style.backgroundImage = "url(image/er.png)";
    }
    if (randomlft01 >= 2 && randomlft01 < 4) {
        alls[0].style.background = 'yellow';
        stat1.style.backgroundImage = "url(image/er.png)";
    }
    if (randomrft01 >= 2 && randomrft01 < 4) {
        alls[1].style.background = 'yellow';
        stat1.style.backgroundImage = "url(image/er.png)";
    }
    if (randomlft01 < 2) {
        alls[0].style.background = 'red';
        stat1.style.backgroundImage = "url(image/er.png)";
    }
    if (randomrft01 < 2) {
        alls[1].style.background = 'red';
        stat1.style.backgroundImage = "url(image/er.png)";
    }
}
func1();
setInterval(func1, 1000);

//Объект 2
const stat2 = document.getElementById('obj2');
let time2 = document.getElementById('tObj2');
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
    time2.textContent = getNowtime();
    if (randomlrt02 >= 4) {
        alls[6].style.background = 'green';
        stat2.style.backgroundImage = "url(image/gal.png)";
    }
    if (randomrrt02 >= 4) {
        alls[7].style.background = 'green';
        stat2.style.backgroundImage = "url(image/gal.png)";
    }
    if (randomlft02 >= 4) {
        alls[4].style.background = 'green';
        stat2.style.backgroundImage = "url(image/gal.png)";
    }
    if (randomrft02 >= 4) {
        alls[5].style.background = 'green';
        stat2.style.backgroundImage = "url(image/gal.png)";
    }
    if (randomlrt02 >= 2 && randomlrt02 < 4) {
        alls[6].style.background = 'yellow';
        stat2.style.backgroundImage = "url(image/er.png)";
    }
    if (randomrrt02 >= 2 && randomrrt02 < 4) {
        alls[7].style.background = 'yellow';
        stat2.style.backgroundImage = "url(image/er.png)";
    }
    if (randomlrt02 < 2) {
        alls[6].style.background = 'red';
        stat2.style.backgroundImage = "url(image/er.png)";
    }
    if (randomrrt02 < 2) {
        alls[7].style.background = 'red';
        stat2.style.backgroundImage = "url(image/er.png)";
    }
    if (randomlft02 >= 2 && randomlft02 < 4) {
        alls[4].style.background = 'yellow';
        stat2.style.backgroundImage = "url(image/er.png)";
    }
    if (randomrft02 >= 2 && randomrft02 < 4) {
        alls[5].style.background = 'yellow';
        stat2.style.backgroundImage = "url(image/er.png)";
    }
    if (randomlft02 < 2) {
        alls[4].style.background = 'red';
        stat2.style.backgroundImage = "url(image/er.png)";
    }
    if (randomrft02 < 2) {
        alls[5].style.background = 'red';
        stat2.style.backgroundImage = "url(image/er.png)";
    }

}
func2();
setInterval(func2, 2000);




//текущее время
function getNowtime() {
    let now = new Date();
    let hours = now.getHours();
    if (now.getHours() < 10) {
        hours = "0" + hours;
    }
    let minutes = now.getMinutes();
    if (now.getMinutes() < 10) {
        minutes = "0" + minutes;
    }
    let seconds = now.getSeconds();
    if (now.getSeconds() < 10) {
        seconds = "0" + minutes;
    }
    let nowTime = (`${hours}:${minutes}:${seconds}`);
    return nowTime;
}
















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