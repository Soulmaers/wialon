
const Obj729 = () => {
    //забираем коллекции
    let alls = document.getElementsByClassName('tiresD');
    let allsT = document.getElementsByClassName('tiresT');
    let time1 = document.getElementById('tObj1');
    const stat = document.getElementsByClassName('bg_stat');
    time1.textContent = getNowtime();
    //запускаем рандом и кладем значения в массив
    function mathD1() {
        randomlft01 = Math.floor(Math.random() * 10);
        randomrft01 = Math.floor(Math.random() * 10);
        randomlrt01 = Math.floor(Math.random() * 10);
        randomrrt01 = Math.floor(Math.random() * 10);
        return arrD = [randomlft01, randomrft01, randomlrt01, randomrrt01];
    }
    mathD1()
    function mathT1() {
        randomlft01T = Math.floor(Math.random() * 10);
        randomrft01T = Math.floor(Math.random() * 10);
        randomlrt01T = Math.floor(Math.random() * 10);
        randomrrt01T = Math.floor(Math.random() * 10);
        return arrT = [randomlft01T, randomrft01T, randomlrt01T, randomrrt01T];
    }
    mathT1()
    //проверяем условия
    function gener(el) {
        let generatedValue;
        if (el >= 3)
            generatedValue = 3;
        if (el >= 1 && el < 3)
            generatedValue = 2;
        if (el < 1)
            generatedValue = 1;
        return generatedValue;
    };
    //создаем объект где ключ-результат условия, а свойства - соответсующее условию значение
    const objColor = {
        1: '#e03636',
        2: '#9ba805',
        3: '#3eb051'
    }
    //добавляем итог в нужный div
    alls[0].style.background = objColor[gener(arrD[0])];
    alls[0].textContent = arrD[0] + '\nатм';
    alls[1].style.background = objColor[gener(arrD[1])];
    alls[1].textContent = arrD[1] + '\nатм';
    alls[2].style.background = objColor[gener(arrD[2])];
    alls[2].textContent = arrD[2] + '\nатм';
    alls[3].style.background = objColor[gener(arrD[3])];
    alls[3].textContent = arrD[3] + '\nатм';
    allsT[0].style.background = objColor[gener(arrT[0])];
    allsT[0].textContent = arrT[0] + '°C';
    allsT[1].style.background = objColor[gener(arrT[1])];
    allsT[1].textContent = arrT[1] + '°C';
    allsT[2].style.background = objColor[gener(arrT[2])];
    allsT[2].textContent = arrT[2] + '°C';
    allsT[3].style.background = objColor[gener(arrT[3])];
    allsT[3].textContent = arrT[3] + '°C';

    // добавляем статус машины
    const statGal1 = () => {
        stat[0].style.backgroundImage = "url(image/gal.png)";
    }
    const statEr1 = () => {
        stat[0].style.backgroundImage = "url(image/er.png)";
    }
    if (arrD[0] >= 3 && arrD[1] >= 3 && arrD[2] >= 3 && arrD[3] >= 3 &&
        arrT[0] >= 3 && arrT[1] >= 3 && arrT[2] >= 3 && arrT[3] >= 3) {
        statGal1();
    } else {
        statEr1();
    }
}
Obj729();
setInterval(Obj729, 1000);

//добавление статуса

// логика выбора
/*const func1 = () => {
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
        allsT[3].textContent = randomrrt01 + '°C';
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

//Объект 2*/
/*let time2 = document.getElementById('tObj2');
// рандомные значения
function math2() {
    randomlft02 = Math.floor(Math.random() * 10);
    randomrft02 = Math.floor(Math.random() * 10);
    randomlrt02 = Math.floor(Math.random() * 10);
    randomrrt02 = Math.floor(Math.random() * 10);
}

const statGal2 = () => {
    stat[1].style.backgroundImage = "url(image/gal.png)";
}
const statEr2 = () => {
    stat[1].style.backgroundImage = "url(image/er.png)";
}
// логика выбора
const func2 = () => {
    math2();
    time2.textContent = getNowtime();
    if (randomlrt02 >= 3) {
        alls[6].style.background = 'green';
        alls[6].textContent = randomlrt02;
        statGal2();
    }
    if (randomrrt02 >= 3) {
        alls[7].style.background = 'green';
        statGal2();
    }
    if (randomlft02 >= 3) {
        alls[4].style.background = 'green';
        statGal2();
    }
    if (randomrft02 >= 3) {
        alls[5].style.background = 'green';
        statGal2();
    }
    if (randomlrt02 >= 1 && randomlrt02 < 3) {
        alls[6].style.background = 'yellow';
        statEr2();
    }
    if (randomrrt02 >= 1 && randomrrt02 < 3) {
        alls[7].style.background = 'yellow';
        statEr2();
    }
    if (randomlrt02 < 1) {
        alls[6].style.background = 'red';
        statEr2();
    }
    if (randomrrt02 < 1) {
        alls[7].style.background = 'red';
        statEr2();
    }
    if (randomlft02 >= 1 && randomlft02 < 3) {
        alls[4].style.background = 'yellow';
        statEr2();
    }
    if (randomrft02 >= 1 && randomrft02 < 3) {
        alls[5].style.background = 'yellow';
        statEr2();
    }
    if (randomlft02 < 1) {
        alls[4].style.background = 'red';
        statEr2();
    }
    if (randomrft02 < 1) {
        alls[5].style.background = 'red';
        statEr2();
    }

}
func2();
setInterval(func2, 5000);

*/


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