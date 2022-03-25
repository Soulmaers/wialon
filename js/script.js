
const lft01 = document.getElementById('left_front_tires_01');
const rft01 = document.getElementById('right_front_tires_01');
const stat = document.getElementById('obj1');

function math() {
    randomlft01 = Math.floor(Math.random() * 10);
    randomrft01 = Math.floor(Math.random() * 10);
}

const func = () => {
    math();
    if (randomlft01 >= 7) {
        lft01.style.background = 'green';
        stat.style.backgroundImage = "url(image/gal.png)";
    }
    if (randomrft01 >= 7) {
        rft01.style.background = 'green';
        stat.style.backgroundImage = "url(image/gal.png)";
    }
    if (randomlft01 >= 4 && randomlft01 < 7) {
        lft01.style.background = 'yellow';
        stat.style.backgroundImage = "url(image/er.png)";
    }
    if (randomrft01 >= 4 && randomrft01 < 7) {
        rft01.style.background = 'yellow';
        stat.style.backgroundImage = "url(image/er.png)";
    }
    if (randomlft01 < 4) {
        lft01.style.background = 'red';
        stat.style.backgroundImage = "url(image/er.png)";
    }
    if (randomrft01 < 4) {
        rft01.style.background = 'red';
        stat.style.backgroundImage = "url(image/er.png)";
    }

}
func();
setInterval(func, 700);










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