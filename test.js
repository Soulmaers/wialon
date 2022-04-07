//забираем коллекции
const time = document.querySelectorAll('.time');
const stat = document.querySelectorAll('.bg_stat');

//запускаем рандом
function mathT() {
    return Math.floor(Math.random() * 10);
}
mathT();
function mathD() {
    return Math.floor(Math.random() * 10);
}
mathD();
function runTires() {
    return Math.floor(Math.random() * 10000);
}
runTires();

//Объект1
const Obj729 = () => {
    const alls = document.querySelectorAll('.tiresD729');
    const allsT = document.querySelectorAll('.tiresT729');
    time[0].textContent = getNowtime();
    //кладем рандомные значения в массив
    const arrD = Array(4).fill(0).map(mathD);
    const arrT = Array(4).fill(0).map(mathT);

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
    const arrD = Array(6).fill(0).map(mathD);
    const arrT = Array(6).fill(0).map(mathT);
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
    const arrD = Array(8).fill(0).map(mathD);
    const arrT = Array(8).fill(0).map(mathT);
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
    const arrD = Array(8).fill(0).map(mathD);
    const arrT = Array(8).fill(0).map(mathT);
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
    const arrD = Array(10).fill(0).map(mathD);
    const arrT = Array(10).fill(0).map(mathT);
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
//проваливаемся в колесо
const tires_link = document.querySelectorAll('.tires_link');
const arrTireslink = Array.from(tires_link);
arrTireslink.forEach(function (elem, index) {
    elem.addEventListener('click', tiresActive);
    function tiresActive() {
        arrTireslink.forEach(function (elem, index) {
            tD = document.querySelectorAll('.tiresD');
            tT = document.querySelectorAll('.tiresT');
            elem = tD[index].classList.remove('tiresActiveD');
            elem = tT[index].classList.remove('tiresActiveT');
        })
        tD = document.querySelectorAll('.tiresD');
        tT = document.querySelectorAll('.tiresT');
        elem = tD[index].classList.toggle('tiresActiveD');
        elem = tT[index].classList.toggle('tiresActiveT');
        check = document.querySelector('.check')
        check.style.display = 'none';
        dataActive = document.querySelector('.dataActive')
        dataActive.style.display = 'block';
        wCA = document.querySelector('.wrapper_containt')
        wCA.classList.add('wrapper_containt_active')
    }
    around();
});
//проверяем нажатую ссылку на соответсвие классу родителя и убираем не активные дивы
function around() {
    arrTireslink.forEach(function (elem) {
        elem.addEventListener('click', tiresActive2);
        function tiresActive2() {
            card = document.querySelectorAll('.card');
            for (let i = 0; i <= card.length; i++) {
                if (card[0] = elem.closest('.c2_2')) {
                    card[0].style.display = 'block';
                    card[1].style.display = 'none';
                    card[2].style.display = 'none';
                    card[3].style.display = 'none';
                    card[4].style.display = 'none';
                }
                if (card[1] = elem.closest('.c2_2_2')) {
                    card[1].style.display = 'block';
                    card[0].style.display = 'none';
                    card[2].style.display = 'none';
                    card[3].style.display = 'none';
                    card[4].style.display = 'none';
                }
                if (card[2] = elem.closest('.c2_4_2')) {
                    card[2].style.display = 'block';
                    card[0].style.display = 'none';
                    card[1].style.display = 'none';
                    card[3].style.display = 'none';
                    card[4].style.display = 'none';
                }
                if (card[3] = elem.closest('.c2_2_4')) {
                    card[3].style.display = 'block';
                    card[0].style.display = 'none';
                    card[1].style.display = 'none';
                    card[2].style.display = 'none';
                    card[4].style.display = 'none';
                }
                if (card[4] = elem.closest('.c2_4_4')) {
                    card[4].style.display = 'block';
                    card[0].style.display = 'none';
                    card[1].style.display = 'none';
                    card[2].style.display = 'none';
                    card[3].style.display = 'none';
                }
            }
        };
    })
}
//кладем рандом для пробега колес в массив
const runShine = Array(36).fill(0).map(runTires);
const probeg = document.querySelector('.probeg');
arrTireslink.forEach((elem, index) => {
    elem.addEventListener('click', tiresActivedatchik);
    function tiresActivedatchik() {
        elem = runShine[index];
        probeg.textContent = elem + ' ' + 'км';
    }
    tiresActivedatchik();
});
//рандомная дата
function randomDate(start, end) {
    return new Date(start.getTime()
        + Math.random() * (end.getTime() - start.getTime()));
}
const date01 = randomDate(new Date(2010, 0, 1), new Date()); const date02 = randomDate(new Date(2010, 0, 1), new Date());
const date03 = randomDate(new Date(2010, 0, 1), new Date()); const date04 = randomDate(new Date(2010, 0, 1), new Date());
const date05 = randomDate(new Date(2010, 0, 1), new Date()); const date06 = randomDate(new Date(2010, 0, 1), new Date());
const date07 = randomDate(new Date(2010, 0, 1), new Date()); const date08 = randomDate(new Date(2010, 0, 1), new Date());
const date09 = randomDate(new Date(2010, 0, 1), new Date()); const date10 = randomDate(new Date(2010, 0, 1), new Date());
const date11 = randomDate(new Date(2010, 0, 1), new Date()); const date12 = randomDate(new Date(2010, 0, 1), new Date());
const date13 = randomDate(new Date(2010, 0, 1), new Date()); const date14 = randomDate(new Date(2010, 0, 1), new Date());
const date15 = randomDate(new Date(2010, 0, 1), new Date()); const date16 = randomDate(new Date(2010, 0, 1), new Date());
const date17 = randomDate(new Date(2010, 0, 1), new Date()); const date18 = randomDate(new Date(2010, 0, 1), new Date());
const date19 = randomDate(new Date(2010, 0, 1), new Date()); const date20 = randomDate(new Date(2010, 0, 1), new Date());
const date21 = randomDate(new Date(2010, 0, 1), new Date()); const date22 = randomDate(new Date(2010, 0, 1), new Date());
const date23 = randomDate(new Date(2010, 0, 1), new Date()); const date24 = randomDate(new Date(2010, 0, 1), new Date());
const date25 = randomDate(new Date(2010, 0, 1), new Date()); const date26 = randomDate(new Date(2010, 0, 1), new Date());
const date27 = randomDate(new Date(2010, 0, 1), new Date()); const date28 = randomDate(new Date(2010, 0, 1), new Date());
const date29 = randomDate(new Date(2010, 0, 1), new Date()); const date30 = randomDate(new Date(2010, 0, 1), new Date());
const date31 = randomDate(new Date(2010, 0, 1), new Date()); const date32 = randomDate(new Date(2010, 0, 1), new Date());
const date33 = randomDate(new Date(2010, 0, 1), new Date()); const date34 = randomDate(new Date(2010, 0, 1), new Date());
const date35 = randomDate(new Date(2010, 0, 1), new Date()); const date36 = randomDate(new Date(2010, 0, 1), new Date());
const arrDates = [date01, date02, date03, date04, date05, date06, date07, date08, date09, date10, date11,
    date12, date13, date14, date15, date16, date17,
    date18, date19, date20, date21, date22, date23, date24, date25, date26, date27,
    date28, date29, date30, date31, date32, date33, date34, date35, date36];
function dataVunc() {
    arData = [];
    arrDates.forEach((elem) => {
        ar = (`${elem.getFullYear()}-${('0' + (elem.getMonth() + 1)).slice(-2)}-${('0' + elem.getDate()).slice(-2)}`);
        arData.push(ar);
        return arData;
    })
}
dataVunc()
const dataMade = document.querySelector('.data_made');
arrTireslink.forEach((elem, index) => {
    elem.addEventListener('click', dataMadefunc);
    function dataMadefunc() {
        elem = arData[index];
        dataMade.textContent = elem;
    }
    dataMadefunc();
});

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