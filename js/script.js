//забираем коллекции
const alls = document.querySelectorAll('.tiresD');
const allsT = document.querySelectorAll('.tiresT');
const time = document.querySelectorAll('.time');
const stat = document.querySelectorAll('.bg_stat');

//Объект1
const Obj729 = () => {
    time[0].textContent = getNowtime();
    //запускаем рандом и кладем значения в массив
    function mathD() {
        lft = Math.floor(Math.random() * 10);
        rft = Math.floor(Math.random() * 10);
        lrt = Math.floor(Math.random() * 10);
        rrt = Math.floor(Math.random() * 10);
        return arrD = [lft, rft, lrt, rrt];
    }
    mathD()
    function mathT() {
        lft = Math.floor(Math.random() * 10);
        rft = Math.floor(Math.random() * 10);
        lrt = Math.floor(Math.random() * 10);
        rrt = Math.floor(Math.random() * 10);
        return arrT = [lft, rft, lrt, rrt];
    }
    mathT()
    //проверяем условия
    function gener(el) {
        let generatedValue;
        if (el >= 2)
            generatedValue = 3;
        if (el > 0 && el < 2)
            generatedValue = 2;
        if (el == 0)
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
    const statGal = () => {
        stat[0].style.backgroundImage = "url(image/gal.png)";
    }
    const statEr = () => {
        stat[0].style.backgroundImage = "url(image/er.png)";
    }
    if (arrD[0] >= 2 && arrD[1] >= 2 && arrD[2] >= 2 && arrD[3] >= 2 &&
        arrT[0] >= 2 && arrT[1] >= 2 && arrT[2] >= 2 && arrT[3] >= 2) {
        statGal();
    } else {
        statEr();
    }
}
Obj729();
setInterval(Obj729, 5000);

//Объект 2
const Obj730 = () => {
    time[1].textContent = getNowtime();
    function mathD() {
        lft = Math.floor(Math.random() * 10);
        rft = Math.floor(Math.random() * 10);
        lct = Math.floor(Math.random() * 10);
        rct = Math.floor(Math.random() * 10);
        lrt = Math.floor(Math.random() * 10);
        rrt = Math.floor(Math.random() * 10);
        return arrD = [lft, rft, lct, rct, lrt, rrt];
    }
    mathD();
    function mathT() {
        lft = Math.floor(Math.random() * 10);
        rft = Math.floor(Math.random() * 10);
        lct = Math.floor(Math.random() * 10);
        rct = Math.floor(Math.random() * 10);
        lrt = Math.floor(Math.random() * 10);
        rrt = Math.floor(Math.random() * 10);
        return arrT = [lft, rft, lct, rct, lrt, rrt];
    }
    mathT();
    function gener(el) {
        let generatedValue;
        if (el >= 2)
            generatedValue = 3;
        if (el > 0 && el < 2)
            generatedValue = 2;
        if (el == 0)
            generatedValue = 1;
        return generatedValue;
    };
    const objColor = {
        1: '#e03636',
        2: '#9ba805',
        3: '#3eb051'
    }
    alls[4].style.background = objColor[gener(arrD[0])];
    alls[4].textContent = arrD[0] + '\nатм';
    alls[5].style.background = objColor[gener(arrD[1])];
    alls[5].textContent = arrD[1] + '\nатм';
    alls[6].style.background = objColor[gener(arrD[2])];
    alls[6].textContent = arrD[2] + '\nатм';
    alls[7].style.background = objColor[gener(arrD[3])];
    alls[7].textContent = arrD[3] + '\nатм';
    alls[8].style.background = objColor[gener(arrD[4])];
    alls[8].textContent = arrD[4] + '\nатм';
    alls[9].style.background = objColor[gener(arrD[5])];
    alls[9].textContent = arrD[5] + '\nатм';
    allsT[4].style.background = objColor[gener(arrT[0])];
    allsT[4].textContent = arrT[0] + '°C';
    allsT[5].style.background = objColor[gener(arrT[1])];
    allsT[5].textContent = arrT[1] + '°C';
    allsT[6].style.background = objColor[gener(arrT[2])];
    allsT[6].textContent = arrT[2] + '°C';
    allsT[7].style.background = objColor[gener(arrT[3])];
    allsT[7].textContent = arrT[3] + '°C';
    allsT[8].style.background = objColor[gener(arrT[4])];
    allsT[8].textContent = arrT[4] + '°C';
    allsT[9].style.background = objColor[gener(arrT[5])];
    allsT[9].textContent = arrT[5] + '°C';
    const statGal = () => {
        stat[1].style.backgroundImage = "url(image/gal.png)";
    }
    const statEr = () => {
        stat[1].style.backgroundImage = "url(image/er.png)";
    }
    if (arrD[0] >= 2 && arrD[1] >= 2 && arrD[2] >= 2 && arrD[3] >= 2 && arrD[4] >= 2 && arrD[5] >= 2 &&
        arrT[0] >= 2 && arrT[1] >= 2 && arrT[2] >= 2 && arrT[3] >= 2 && arrT[4] >= 2 && arrT[5] >= 2) {
        statGal();
    } else {
        statEr();
    }
}
Obj730();
setInterval(Obj730, 5000);

//Объект 3
const Obj731 = () => {
    time[2].textContent = getNowtime();
    function mathD() {
        lft = Math.floor(Math.random() * 10);
        rft = Math.floor(Math.random() * 10);
        lct = Math.floor(Math.random() * 10);
        lcnt = Math.floor(Math.random() * 10);
        lcvt = Math.floor(Math.random() * 10);
        rct = Math.floor(Math.random() * 10);
        lrt = Math.floor(Math.random() * 10);
        rrt = Math.floor(Math.random() * 10);
        return arrD = [lft, rft, lct, lcnt, lcvt, rct, lrt, rrt];

    }
    mathD();
    function mathT() {
        lft = Math.floor(Math.random() * 10);
        rft = Math.floor(Math.random() * 10);
        lct = Math.floor(Math.random() * 10);
        lcnt = Math.floor(Math.random() * 10);
        lcvt = Math.floor(Math.random() * 10);
        rct = Math.floor(Math.random() * 10);
        lrt = Math.floor(Math.random() * 10);
        rrt = Math.floor(Math.random() * 10);
        return arrT = [lft, rft, lct, lcnt, lcvt, rct, lrt, rrt];
    }
    mathT();
    function gener(el) {
        let generatedValue;
        if (el >= 2)
            generatedValue = 3;
        if (el > 0 && el < 2)
            generatedValue = 2;
        if (el == 0)
            generatedValue = 1;
        return generatedValue;
    };
    const objColor = {
        1: '#e03636',
        2: '#9ba805',
        3: '#3eb051'
    }
    alls[10].style.background = objColor[gener(arrD[0])];
    alls[10].textContent = arrD[0] + '\nатм';
    alls[11].style.background = objColor[gener(arrD[1])];
    alls[11].textContent = arrD[1] + '\nатм';
    alls[12].style.background = objColor[gener(arrD[2])];
    alls[12].textContent = arrD[2] + '\nатм';
    alls[13].style.background = objColor[gener(arrD[3])];
    alls[13].textContent = arrD[3] + '\nатм';
    alls[14].style.background = objColor[gener(arrD[4])];
    alls[14].textContent = arrD[4] + '\nатм';
    alls[15].style.background = objColor[gener(arrD[5])];
    alls[15].textContent = arrD[5] + '\nатм';
    alls[16].style.background = objColor[gener(arrD[6])];
    alls[16].textContent = arrD[6] + '\nатм';
    alls[17].style.background = objColor[gener(arrD[7])];
    alls[17].textContent = arrD[7] + '\nатм';
    allsT[10].style.background = objColor[gener(arrT[0])];
    allsT[10].textContent = arrT[0] + '°C';
    allsT[11].style.background = objColor[gener(arrT[1])];
    allsT[11].textContent = arrT[1] + '°C';
    allsT[12].style.background = objColor[gener(arrT[2])];
    allsT[12].textContent = arrT[2] + '°C';
    allsT[13].style.background = objColor[gener(arrT[3])];
    allsT[13].textContent = arrT[3] + '°C';
    allsT[14].style.background = objColor[gener(arrT[4])];
    allsT[14].textContent = arrT[4] + '°C';
    allsT[15].style.background = objColor[gener(arrT[5])];
    allsT[15].textContent = arrT[5] + '°C';
    allsT[16].style.background = objColor[gener(arrD[6])];
    allsT[16].textContent = arrD[6] + '\nатм';
    allsT[17].style.background = objColor[gener(arrD[7])];
    allsT[17].textContent = arrD[7] + '\nатм';
    const statGal = () => {
        stat[2].style.backgroundImage = "url(image/gal.png)";
    }
    const statEr = () => {
        stat[2].style.backgroundImage = "url(image/er.png)";
    }
    if (arrD[0] >= 2 && arrD[1] >= 2 && arrD[2] >= 2 && arrD[3] >= 2 && arrD[4] >= 2
        && arrD[5] >= 2 && arrD[6] >= 2 && arrD[7] >= 2 &&
        arrT[0] >= 2 && arrT[1] >= 2 && arrT[2] >= 2 && arrT[3] >= 2 && arrT[4] >= 2
        && arrT[5] >= 2 && arrD[6] >= 2 && arrD[7] >= 2) {
        statGal();
    } else {
        statEr();
    }
}
Obj731();
setInterval(Obj731, 5000);
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
//логика чекбоксов
const cardHidden = document.querySelectorAll('.card');
const input = document.querySelectorAll('.input');
const arrInput = Array.from(input);
function showHide() {
    for (let i = 0; i <= arrInput.length; i++) {
        if (input[0].checked && !input[1].checked && !input[2].checked) {
            cardHidden[1].classList.add('card_hidden');
            cardHidden[2].classList.add('card_hidden');
            cardHidden[0].classList.remove('card_hidden');
        }
        if (input[1].checked && !input[0].checked && !input[2].checked) {
            cardHidden[0].classList.add('card_hidden');
            cardHidden[2].classList.add('card_hidden');
            cardHidden[1].classList.remove('card_hidden');
        }
        if (input[2].checked && !input[0].checked && !input[1].checked) {
            cardHidden[0].classList.add('card_hidden');
            cardHidden[1].classList.add('card_hidden');
            cardHidden[2].classList.remove('card_hidden');
        }
        if (input[0].checked && input[1].checked && !input[2].checked) {
            cardHidden[0].classList.remove('card_hidden');
            cardHidden[1].classList.remove('card_hidden');
            cardHidden[2].classList.add('card_hidden');
        }
        if (input[0].checked && input[2].checked && !input[1].checked) {
            cardHidden[0].classList.remove('card_hidden');
            cardHidden[2].classList.remove('card_hidden');
            cardHidden[1].classList.add('card_hidden');
        }
        if (input[1].checked && input[2].checked && !input[0].checked) {
            cardHidden[1].classList.remove('card_hidden');
            cardHidden[2].classList.remove('card_hidden');
            cardHidden[0].classList.add('card_hidden');
        }
        if (input[0].checked && input[1].checked && input[2].checked ||
            !input[0].checked && !input[1].checked && !input[2].checked) {
            cardHidden[0].classList.remove('card_hidden');
            cardHidden[1].classList.remove('card_hidden');
            cardHidden[2].classList.remove('card_hidden');
        }
    }
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