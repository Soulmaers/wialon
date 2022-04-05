//забираем коллекции
const time = document.querySelectorAll('.time');
const stat = document.querySelectorAll('.bg_stat');
//Объект1
const Obj729 = () => {
    const alls = document.querySelectorAll('.tiresD729');
    const allsT = document.querySelectorAll('.tiresT729');
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
    const logic729 = () => {
        alls.forEach(function (elem, index) {
            elem.textContent = arrD[index] + '\nатм';
        })
        allsT.forEach(function (elem, index) {
            elem.textContent = arrT[index] + '°C';
        })
        alls.forEach(function (elem, index) {
            elem.style.background = objColor[gener(arrD[index])];
        })
        allsT.forEach(function (elem, index) {
            elem.style.background = objColor[gener(arrT[index])];
        })
    }
    logic729();
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
    const alls = document.querySelectorAll('.tiresD730');
    const allsT = document.querySelectorAll('.tiresT730');
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
    const logic730 = () => {
        alls.forEach(function (elem, index) {
            elem.textContent = arrD[index] + '\nатм';
        })
        allsT.forEach(function (elem, index) {
            elem.textContent = arrT[index] + '°C';
        })
        alls.forEach(function (elem, index) {
            elem.style.background = objColor[gener(arrD[index])];
        })
        allsT.forEach(function (elem, index) {
            elem.style.background = objColor[gener(arrT[index])];
        })
    }
    logic730();
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
    const alls = document.querySelectorAll('.tiresD731');
    const allsT = document.querySelectorAll('.tiresT731');
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
        lcnt = Math.floor(Math.random() * 10);
        lcvt = Math.floor(Math.random() * 10);
        rcvt = Math.floor(Math.random() * 10);
        rcnt = Math.floor(Math.random() * 10);
        lrt = Math.floor(Math.random() * 10);
        rrt = Math.floor(Math.random() * 10);
        return arrT = [lft, rft, lcnt, lcvt, rcvt, rcnt, lrt, rrt];
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
    const logic731 = () => {
        alls.forEach(function (elem, index) {
            elem.textContent = arrD[index] + '\nатм';
        })
        allsT.forEach(function (elem, index) {
            elem.textContent = arrT[index] + '°C';
        })
        alls.forEach(function (elem, index) {
            elem.style.background = objColor[gener(arrD[index])];
        })
        allsT.forEach(function (elem, index) {
            elem.style.background = objColor[gener(arrT[index])];
        })
    }
    logic731();
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
//Объект 4
const Obj732 = () => {
    const alls = document.querySelectorAll('.tiresD732');
    const allsT = document.querySelectorAll('.tiresT732');
    time[3].textContent = getNowtime();
    function mathD() {
        lft = Math.floor(Math.random() * 10);
        rft = Math.floor(Math.random() * 10);
        lct = Math.floor(Math.random() * 10);
        rct = Math.floor(Math.random() * 10);
        lrnt = Math.floor(Math.random() * 10);
        lrvt = Math.floor(Math.random() * 10);
        rrvt = Math.floor(Math.random() * 10);
        rrnt = Math.floor(Math.random() * 10);
        return arrD = [lft, rft, lct, rct, lrnt, lrvt, rrvt, rrnt];
    }
    mathD();
    function mathT() {
        lft = Math.floor(Math.random() * 10);
        rft = Math.floor(Math.random() * 10);
        lct = Math.floor(Math.random() * 10);
        rct = Math.floor(Math.random() * 10);
        lrnt = Math.floor(Math.random() * 10);
        lrvt = Math.floor(Math.random() * 10);
        rrvt = Math.floor(Math.random() * 10);
        rrnt = Math.floor(Math.random() * 10);
        return arrT = [lft, rft, lct, rct, lrnt, lrvt, rrvt, rrnt];
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
    const logic732 = () => {
        alls.forEach(function (elem, index) {
            elem.textContent = arrD[index] + '\nатм';
        })
        allsT.forEach(function (elem, index) {
            elem.textContent = arrT[index] + '°C';
        })
        alls.forEach(function (elem, index) {
            elem.style.background = objColor[gener(arrD[index])];
        })
        allsT.forEach(function (elem, index) {
            elem.style.background = objColor[gener(arrT[index])];
        })
    }
    logic732();
    const statGal = () => {
        stat[3].style.backgroundImage = "url(image/gal.png)";
    }
    const statEr = () => {
        stat[3].style.backgroundImage = "url(image/er.png)";
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
Obj732();
setInterval(Obj732, 5000);

//Объект 5
const Obj733 = () => {
    const alls = document.querySelectorAll('.tiresD733');
    const allsT = document.querySelectorAll('.tiresT733');
    time[4].textContent = getNowtime();
    function mathD() {
        lft = Math.floor(Math.random() * 10);
        rft = Math.floor(Math.random() * 10);
        lcnt = Math.floor(Math.random() * 10);
        lcvt = Math.floor(Math.random() * 10);
        rcvt = Math.floor(Math.random() * 10);
        rnct = Math.floor(Math.random() * 10);
        lrnt = Math.floor(Math.random() * 10);
        lrvt = Math.floor(Math.random() * 10);
        rrvt = Math.floor(Math.random() * 10);
        rrnt = Math.floor(Math.random() * 10);
        return arrD = [lft, rft, lcnt, lcvt, rcvt, rnct, lrnt, lrvt, rrvt, rrnt];
    }
    mathD();
    function mathT() {
        lft = Math.floor(Math.random() * 10);
        rft = Math.floor(Math.random() * 10);
        lcnt = Math.floor(Math.random() * 10);
        lcvt = Math.floor(Math.random() * 10);
        rcvt = Math.floor(Math.random() * 10);
        rnct = Math.floor(Math.random() * 10);
        lrnt = Math.floor(Math.random() * 10);
        lrvt = Math.floor(Math.random() * 10);
        rrvt = Math.floor(Math.random() * 10);
        rrnt = Math.floor(Math.random() * 10);
        return arrT = [lft, rft, lcnt, lcvt, rcvt, rnct, lrnt, lrvt, rrvt, rrnt];
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
    const logic733 = () => {
        alls.forEach(function (elem, index) {
            elem.textContent = arrD[index] + '\nатм';
        })
        allsT.forEach(function (elem, index) {
            elem.textContent = arrT[index] + '°C';
        })
        alls.forEach(function (elem, index) {
            elem.style.background = objColor[gener(arrD[index])];
        })
        allsT.forEach(function (elem, index) {
            elem.style.background = objColor[gener(arrT[index])];
        })
    }
    logic733();
    const statGal = () => {
        stat[4].style.backgroundImage = "url(image/gal.png)";
    }
    const statEr = () => {
        stat[4].style.backgroundImage = "url(image/er.png)";
    }
    if (arrD[0] >= 2 && arrD[1] >= 2 && arrD[2] >= 2 && arrD[3] >= 2 && arrD[4] >= 2
        && arrD[5] >= 2 && arrD[6] >= 2 && arrD[7] >= 2 && arrD[8] >= 2 && arrD[9] >= 2 &&
        arrT[0] >= 2 && arrT[1] >= 2 && arrT[2] >= 2 && arrT[3] >= 2 && arrT[4] >= 2
        && arrT[5] >= 2 && arrD[6] >= 2 && arrD[7] >= 2 && arrT[8] >= 2 && arrT[9] >= 2) {
        statGal();
    } else {
        statEr();
    }
}
Obj733();
setInterval(Obj733, 5000);
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
function change() {
    const checkboxes = document.querySelectorAll('.input');
    const chekboxInputs = Array.from(checkboxes);
    const allAreUnselected = chekboxInputs.every(function (elem) {
        return !elem.checked;
    });
    if (!allAreUnselected) {
        chekboxInputs.forEach(function (input) {
            Array.from(document.querySelectorAll("." + input.getAttribute("rel"))).forEach(function (item) {
                item.style.display = input.checked ? 'block' : 'none';
            });
        });
    } else {
        chekboxInputs.forEach(function (input) {
            Array.from(document.querySelectorAll("." + input.getAttribute("rel"))).forEach(function (item) {
                item.style.display = 'block';
            });
        });
    }
}
change();









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