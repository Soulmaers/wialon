

//забираем объект
let alls = document.querySelectorAll('.tiresD');
let allsT = document.querySelectorAll('.tiresT');
const stat = document.querySelectorAll('.bg_stat');
let time1 = document.getElementById('tObj1');
//Объект 1, 

// рандомные значения
function mathD1() {
    randomlft01 = Math.floor(Math.random() * 10);
    randomrft01 = Math.floor(Math.random() * 10);
    randomlrt01 = Math.floor(Math.random() * 10);
    randomrrt01 = Math.floor(Math.random() * 10);
}
function mathT1() {
    randomlft01T = Math.floor(Math.random() * 10);
    randomrft01T = Math.floor(Math.random() * 10);
    randomlrt01T = Math.floor(Math.random() * 10);
    randomrrt01T = Math.floor(Math.random() * 10);
}
//добавление статуса
const statGal1 = () => {
    stat[0].style.backgroundImage = "url(image/gal.png)";
}
const statEr1 = () => {
    stat[0].style.backgroundImage = "url(image/er.png)";
}
// логика выбора
const func1 = () => {
    mathD1();
    mathT1();
    time1.textContent = getNowtime();
    if (randomlrt01 >= 3) {
        alls[2].style.background = '#3eb051';
        alls[2].textContent = randomlrt01 + '\nатм';
        statGal1();

    }
    if (randomrrt01 >= 3) {
        alls[3].style.background = '#3eb051';
        alls[3].textContent = randomrrt01 + '\nатм';
        statGal1();
    }
    if (randomlft01 >= 3) {
        alls[0].style.background = '#3eb051';
        alls[0].textContent = randomlft01 + '\nатм';
        statGal1();
    }
    if (randomrft01 >= 3) {
        alls[1].style.background = '#3eb051';
        alls[1].textContent = randomrft01 + '\nатм';
        statGal1();
    }
    if (randomlrt01 >= 1 && randomlrt01 < 3) {
        alls[2].style.background = '#9ba805';
        alls[2].textContent = randomlrt01 + '\nатм';
        statEr1();
    }
    if (randomrrt01 >= 1 && randomrrt01 < 3) {
        alls[3].style.background = '#9ba805';
        alls[3].textContent = randomrrt01 + '\nатм';
        statEr1();
    }
    if (randomlrt01 < 1) {
        alls[2].style.background = '#e03636';
        alls[2].textContent = randomlrt01 + '\nатм';
        statEr1();
    }
    if (randomrrt01 < 1) {
        alls[3].style.background = '#e03636';
        alls[3].textContent = randomrrt01 + '\nатм';
        statEr1();
    }
    if (randomlft01 >= 1 && randomlft01 < 3) {
        alls[0].style.background = '#9ba805';
        alls[0].textContent = randomlft01 + '\nатм';
        statEr1();
    }
    if (randomrft01 >= 1 && randomrft01 < 3) {
        alls[1].style.background = '#9ba805';
        alls[1].textContent = randomrft01 + '\nатм';
        statEr1();
    }
    if (randomlft01 < 1) {
        alls[0].style.background = '#e03636';
        alls[0].textContent = randomlft01 + '\nатм';
        statEr1();
    }
    if (randomrft01 < 1) {
        alls[1].style.background = '#e03636';
        alls[1].textContent = randomrft01 + '\nатм';
        statEr1();
    }

    //условия по температуре
    if (randomlrt01T >= 3) {
        allsT[2].style.background = '#3eb051';
        allsT[2].textContent = randomlrt01T + '°C';


    }
    if (randomrrt01T >= 3) {
        allsT[3].style.background = '#3eb051';
        allsT[3].textContent = randomrrt01T + '°C';

    }
    if (randomlft01T >= 3) {
        allsT[0].style.background = '#3eb051';
        allsT[0].textContent = randomlft01T + '°C';

    }
    if (randomrft01T >= 3) {
        allsT[1].style.background = '#3eb051';
        allsT[1].textContent = randomrft01T + '°C';

    }
    if (randomlrt01T >= 1 && randomlrt01T < 3) {
        allsT[2].style.background = '#9ba805';
        allsT[2].textContent = randomlrt01T + '°C';

    }
    if (randomrrt01T >= 1 && randomrrt01T < 3) {
        allsT[3].style.background = '#9ba805';
        allsT[3].textContent = randomrrt01T + '°C';

    }
    if (randomlrt01T < 1) {
        allsT[2].style.background = '#e03636';
        allsT[2].textContent = randomlrt01T + '°C';

    }
    if (randomrrt01T < 1) {
        allsT[3].style.background = '#e03636';
        allsT[3].textContent = randomrrt01T + '°C';

    }
    if (randomlft01T >= 1 && randomlft01T < 3) {
        allsT[0].style.background = '#9ba805';
        allsT[0].textContent = randomlft01T + '°C';

    }
    if (randomrft01T >= 1 && randomrft01T < 3) {
        allsT[1].style.background = '#9ba805';
        allsT[1].textContent = randomrft01T + '°C';

    }
    if (randomlft01T < 1) {
        allsT[0].style.background = '#e03636';
        allsT[0].textContent = randomlft01T + '°C';

    }
    if (randomrft01T < 1) {
        allsT[1].style.background = '#e03636';
        allsT[1].textContent = randomrft01T + '°C';

    }
}
func1();
setInterval(func1, 5000);

//Объект 2
let time2 = document.getElementById('tObj2');
// рандомные значения
function mathD2() {
    randomlft02 = Math.floor(Math.random() * 10);
    randomrft02 = Math.floor(Math.random() * 10);
    randomlct02 = Math.floor(Math.random() * 10);
    randomrct02 = Math.floor(Math.random() * 10);
    randomlrt02 = Math.floor(Math.random() * 10);
    randomrrt02 = Math.floor(Math.random() * 10);
}
function mathT2() {
    randomlft02T = Math.floor(Math.random() * 10);
    randomrft02T = Math.floor(Math.random() * 10);
    randomlct02T = Math.floor(Math.random() * 10);
    randomrct02T = Math.floor(Math.random() * 10);
    randomlrt02T = Math.floor(Math.random() * 10);
    randomrrt02T = Math.floor(Math.random() * 10);
}

const statGal2 = () => {
    stat[1].style.backgroundImage = "url(image/gal.png)";
}
const statEr2 = () => {
    stat[1].style.backgroundImage = "url(image/er.png)";
}
// логика выбора
const func2 = () => {
    mathD2();
    mathT2();
    time2.textContent = getNowtime();

    if (randomlft02 >= 4) {
        alls[4].style.background = '#3eb051';
        alls[4].textContent = randomlft02 + '\nатм';
        statGal2();
    }
    if (randomrft02 >= 4) {
        alls[5].style.background = '#3eb051';
        alls[5].textContent = randomrft02 + '\nатм';
        statGal2();
    }
    if (randomlct02 >= 4) {
        alls[6].style.background = '#3eb051';
        alls[6].textContent = randomlct02 + '\nатм';
        statGal2();
    }
    if (randomrct02 >= 4) {
        alls[7].style.background = '#3eb051';
        alls[7].textContent = randomrct02 + '\nатм';
        statGal2();
    }
    if (randomlrt02 >= 4) {
        alls[8].style.background = '#3eb051';
        alls[8].textContent = randomlrt02 + '\nатм';
        statGal2();
    }
    if (randomrrt02 >= 4) {
        alls[9].style.background = '#3eb051';
        alls[9].textContent = randomrrt02 + '\nатм';
        statGal2();
    }
    if (randomlrt02 >= 2 && randomlrt02 < 4) {
        alls[8].style.background = '#9ba805';
        alls[8].textContent = randomlrt02 + '\nатм';
        statEr2();
    }
    if (randomrrt02 >= 2 && randomrrt02 < 4) {
        alls[9].style.background = '#9ba805';
        alls[9].textContent = randomrrt02 + '\nатм';
        statEr2();
    }
    if (randomlct02 >= 2 && randomlct02 < 4) {
        alls[6].style.background = '#9ba805';
        alls[6].textContent = randomlct02 + '\nатм';
        statGal2();
    }
    if (randomrct02 >= 2 && randomrct02 < 4) {
        alls[7].style.background = '#9ba805';
        alls[7].textContent = randomrct02 + '\nатм';
        statGal2();
    }
    if (randomlrt02 < 2) {
        alls[8].style.background = '#e03636';
        alls[8].textContent = randomlrt02 + '\nатм';
        statEr2();
    }
    if (randomrrt02 < 2) {
        alls[9].style.background = '#e03636';
        alls[9].textContent = randomrrt02 + '\nатм';
        statEr2();
    }
    if (randomlct02 < 2) {
        alls[6].style.background = '#e03636';
        alls[6].textContent = randomlct02 + '\nатм';
        statGal2();
    }
    if (randomrct02 < 2) {
        alls[7].style.background = '#e03636';
        alls[7].textContent = randomrct02 + '\nатм';
        statGal2();
    }
    if (randomlft02 >= 2 && randomlft02 < 4) {
        alls[4].style.background = '#9ba805';
        alls[4].textContent = randomlft02 + '\nатм';
        statEr2();
    }
    if (randomrft02 >= 2 && randomrft02 < 4) {
        alls[5].style.background = '#9ba805';
        alls[5].textContent = randomrft02 + '\nатм';
        statEr2();
    }
    if (randomlft02 < 2) {
        alls[4].style.background = '#e03636';
        alls[4].textContent = randomlft02 + '\nатм';
        statEr2();
    }
    if (randomrft02 < 2) {
        alls[5].style.background = '#e03636';
        alls[5].textContent = randomrft02 + '\nатм';
        statEr2();
    }


    //условия по температуре

    if (randomlft02T >= 3) {
        allsT[4].style.background = '#3eb051';
        allsT[4].textContent = randomlft02T + '°C';
        statGal2();
    }
    if (randomrft02T >= 3) {
        allsT[5].style.background = '#3eb051';
        allsT[5].textContent = randomrft02T + '°C';
        statGal2();
    }
    if (randomlct02T >= 3) {
        allsT[6].style.background = '#3eb051';
        allsT[6].textContent = randomlct02T + '°C';
        statGal2();
    }
    if (randomrct02T >= 3) {
        allsT[7].style.background = '#3eb051';
        allsT[7].textContent = randomrct02T + '°C';
        statGal2();
    }
    if (randomlrt02T >= 3) {
        allsT[8].style.background = '#3eb051';
        allsT[8].textContent = randomlrt02T + '°C';
        statGal2();
    }
    if (randomrrt02T >= 3) {
        allsT[9].style.background = '#3eb051';
        allsT[9].textContent = randomrrt02T + '°C';
        statGal2();
    }
    if (randomlft02T >= 1 && randomlft02T < 3) {
        allsT[4].style.background = '#9ba805';
        allsT[4].textContent = randomlft02T + '°C';
        statEr2();
    }
    if (randomrft02T >= 1 && randomrft02T < 3) {
        allsT[5].style.background = '#9ba805';
        allsT[5].textContent = randomrft02T + '°C';
        statEr2();
    }
    if (randomlct02T >= 1 && randomlct02T < 3) {
        alls[6].style.background = '#9ba805';
        alls[6].textContent = randomlct02T + '\nатм';
        statEr2();
    }
    if (randomrct02T >= 1 && randomrct02T < 3) {
        alls[7].style.background = '#9ba805';
        alls[7].textContent = randomrct02T + '\nатм';
        statEr2();
    }
    if (randomlrt02T >= 1 && randomlrt02T < 3) {
        allsT[8].style.background = '#9ba805';
        allsT[8].textContent = randomlrt02T + '°C';
        statEr2();
    }
    if (randomrrt02T >= 1 && randomrrt02T < 3) {
        allsT[9].style.background = '#9ba805';
        allsT[9].textContent = randomrrt02T + '°C';
        statEr2();
    }
    if (randomlft02T < 1) {
        allsT[4].style.background = '#e03636';
        allsT[4].textContent = randomlft02T + '°C';
        statEr2();
    }
    if (randomrft02T < 1) {
        allsT[5].style.background = '#e03636';
        allsT[5].textContent = randomrft02T + '°C';
        statEr2();
    }
    if (randomlct02T < 1) {
        allsT[6].style.background = '#e03636';
        allsT[6].textContent = randomlct02T + '°C';
        statEr2();
    }
    if (randomrct02T < 1) {
        allsT[7].style.background = '#e03636';
        allsT[7].textContent = randomrct02T + '°C';
        statEr2();;
    }
    if (randomlrt02T < 1) {
        allsT[8].style.background = '#e03636';
        allsT[8].textContent = randomlrt02T + '°C';
        statEr2();
    }
    if (randomrrt02T < 1) {
        allsT[9].style.background = '#e03636';
        allsT[9].textContent = randomrrt02T + '°C';
        statEr2();
    }
}
func2();
setInterval(func2, 5000);




//текущее время
function getNowtime() {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth();
    if (now.getMonth() < 10) {
        month = "0" + month;
    }
    let date = now.getDate();
    if (now.getDate() < 10) {
        date = "0" + date;
    }

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
        seconds = "0" + seconds;
    }
    let nowTime = (`${date}-${month}-${year}   ${hours}:${minutes}:${seconds}`);
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