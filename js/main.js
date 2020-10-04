"use strict";
const gorFirstNum = +prompt ('Enter the first number', ' '),
      gorSecondNum = +prompt ('Enter the second number', ' '),
      verFirstNum = +prompt ('Enter the first number', ' '),
      verSecondNum = +prompt ('Enter the second number', ' ');
let   maxSymbol = String((gorSecondNum * verSecondNum)).length, // количество символов в максимальном результате
      sumSymbol = String(verSecondNum).length, // количество символов в  последнем вертикальном числе
      space = "&numsp;", // пробел
      hyphen = "&ndash;"; //длинный дефиз

//Создание резервных переменных которые будут менять свои значения
let xGorFirstNum = gorFirstNum,
    xVerFirstNum = verFirstNum,
    xspace = space,
    xhyphen = hyphen,
    xMaxSymbol = maxSymbol,
    xSumSymbol = sumSymbol;         

// Прописуем количество пробелов в первом столбике 
while (xSumSymbol > 0) {
    xspace = space + xspace;
    xhyphen = hyphen + xhyphen;
    xSumSymbol--; 
}
xSumSymbol = sumSymbol;
document.write(xspace + " | ");
xspace = space;
//Выводим на экран все числа которые ввел пользователь
while (gorSecondNum >= xGorFirstNum) {
    let symbolGorFirstNum = String(xGorFirstNum).length;
    while (symbolGorFirstNum < maxSymbol) { // Необходимое количество пробелов между числами
        xspace = xspace + space;
        symbolGorFirstNum++;
    }
    document.write(xspace + xGorFirstNum);
    xGorFirstNum++;
    xspace = space;
}
document.write('<br/>');
xGorFirstNum = gorFirstNum;
//Прорисовка горизонтальной линии
document.write(xhyphen + "+");
xhyphen = hyphen;
while (xMaxSymbol > 0) { // Узнаем количество дефизов в зависимости от длины числа
    xhyphen = hyphen + xhyphen;
    xMaxSymbol--;
}
while (gorSecondNum >= xGorFirstNum) { //прописуем дефизы
    document.write(xhyphen);
    xGorFirstNum++;
}
document.write('<br/>');
xGorFirstNum = gorFirstNum;
let i = 0;
xspace = space;
// пишем саму таблицу Пифагора
while (xVerFirstNum <= verSecondNum) {
    let symbolVerFirstNum = String(xVerFirstNum).length; // Количество символов в первом столбце с цифрами
      
    while (symbolVerFirstNum < sumSymbol) { // Необходимое количество пробелов в первом столбце
        xspace = xspace + space;
        symbolVerFirstNum++;
      }
    document.write(xspace + xVerFirstNum + " |");
    xspace = space;
    
    while (xGorFirstNum <= gorSecondNum) {    // результат переумножения чисел     
        let result = xGorFirstNum * xVerFirstNum;
        let symbolResult = String(result).length;

        while (symbolResult < maxSymbol) { // Необходимое количество пробелов между результатами
            xspace = xspace + space;
            symbolResult++;
        }

        document.write(xspace + result);
        xGorFirstNum++;
        xspace = space;
    }
    document.write('<br/>');
    xGorFirstNum = gorFirstNum;
    xVerFirstNum++;
    xspace = space;
}