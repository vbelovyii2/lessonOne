'use strict'

let money = +prompt("Ваш бюджет на месяц?","");
let time = prompt("Введите дату в формате YYYY-MM-DD","");
let importantExpences = prompt("Введите обязательную статью расходов в этом месяце","");
let importantExpencesValue = +prompt("Во сколько обойдется?","");


let appData = {
    money: money,
    timeData: time,
     expences: {

    },
     optionalExpences: {

    },
    income: [],
    saving: false
}
appData.expences[importantExpences] = importantExpencesValue;

let perDay = (money-importantExpencesValue)/31;
alert('У вас на каждый день денег '+ perDay + ' руб');



