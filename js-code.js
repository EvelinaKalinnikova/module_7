//ЗАДАНИЕ 6.10.1
const number = +prompt();
const sqr = number * number;
const cube = number * sqr;

alert(`Введённое число - ${number} \nКвадрат числа - ${sqr} \nКуб числа - ${cube}`)


//ЗАДАНИЕ 6.10.2
//const sale = prompt();
//
//if (sale.toLowerCase() === 'скидка') {
//    alert('Промокод применён');
//} else {
//    alert('Промокод не работает')
//}


//ЗАДАНИЕ 6.10.3
//const userName = prompt('Введите имя');
//const userYear = +prompt('Введите год рождения');
//
//if (isNaN(userYear)) {
//    alert('Год должен быть числом!')
//} else {
//    alert(`${userName}: ${new Date().getFullYear() - userYear}`);
//    }


//ЗАДАНИЕ 6.10.4
//const userName = prompt('Введите имя');
//const userYear = +prompt('Введите год рождения');
//const userAge = new Date().getFullYear()-userYear;
//
//if (isNaN(userYear)) {
//    console.log('Год должен быть числом!')
//} else {
//    const reminder = userAge % 10;
//    switch (reminder) {
//        case 1:
//            alert(`${userName}: ${userAge} год`);
//            break;
//        case 2:
//        case 3:
//        case 4:
//            alert(`${userName}: ${userAge} года`);
//            break;
//        default:
//            alert(`${userName}: ${userAge} лет`);
//        }
//    }

//ЗАДАНИЕ 6.10.5
//const age = +prompt('Введите Ваш возраст');
//let credit;
//let userCredit;
//
//if (age < 18) {
//    alert('Мы не выдаем кредит лицам младше 18 лет');
//}  
//
//else if (18 <= age <= 21) {
//        credit = 50000;
//        userCredit = +prompt(`Мы можем вам выдать максимум ${credit}. \nВведите сумму кратную 1000.`);
//        if (userCredit > credit) {
//            alert(`Ваш кредит не может превышать ${credit}`);
//        } else if (userCredit % 1000 !== 0) {
//            alert(`Вы ввели значение не кратное 1000. Мы можем выдать ${Math.ceil(userCredit/1000)*1000}`);
//            }
//    }
//
//else if (22 <= age <= 35) {
//        credit = 400000;
//        userCredit = +prompt(`Мы можем вам выдать максимум ${credit}. \nВведите сумму кратную 1000.`);
//        if (userCredit > credit) {
//            alert(`Ваш кредит не может превышать ${credit}`);
//        } else if (userCredit % 1000 !== 0) {
//            alert(`Вы ввели значение не кратное 1000. Мы можем выдать ${Math.ceil(userCredit/1000)*1000}`);
//            }
//    }
//
//else if (36 <= age <= 65) {
//        credit = 1000000;
//        userCredit = +prompt(`Мы можем вам выдать максимум ${credit}. \nВведите сумму кратную 1000.`);
//        if (userCredit > credit) {
//            alert(`Ваш кредит не может превышать ${credit}`);
//        } else if (userCredit % 1000 !== 0) {
//            alert(`Вы ввели значение не кратное 1000. Мы можем выдать ${Math.ceil(userCredit/1000)*1000}`);
//            }
//    }



//ЗАДАНИЕ 7.6.1
//const word = prompt('Введите слово');
//let wordReversed = '';
//
//if (word === '') {
//    console.log('Вы не ввели слово');
//} else {
//    for (let i = 1; i <= word.length; i +=1) {
//        wordReversed = wordReversed + word[word.length-i];
//    }
//    if (word === wordReversed) {
//        console.log(`Слово ${word} является палиндромом`);
//    } else
//        console.log(`Слово ${word} не является палиндромом`);
//}


//ЗАДАНИЕ 7.6.2
//const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ]; 
//const setUnique = new Set(arr);
//const arrUnique = Array.from(setUnique);
//
//console.log(arrUnique);


//ЗАДАНИЕ 7.6.3
//const num = +prompt();
//const arr = [];
//let i;
//
//for (i = 0; i <= num; i += 1) {
//    arr.push(i);
//}
//
//console.log(arr);


//ЗАДАНИЕ 7.6.4
//let row;
//let col;
//let isEven = 1;
//let str = '';
//
//for (row = 1; row <= 3; row += 1) {
//    for (col = 1; col <= 3; col += 1) {
//        if (isEven % 2 !== 0) {
//            str = str + ' x';
//            } else
//                str = str + ' o';
//        isEven += 1;
//    }
//    console.log(str);
//    str = '';
//}


//ЗАДАНИЕ 7.6.5
//const obj = {
//        some: 'some',
//        dom: 'text',
//        arr: [1, 2, 3, 4, 5],
//        tom: 'there'
//    };
//const arrValues = [];
//
//for (let elem in obj) {
//    if (!Array.isArray(obj[elem])) {
//        arrValues.push(obj[elem]);  
//    } else
//        for (let i of obj[elem]) {
//            arrValues.push(i)
//        }
//}
//
//console.log(arrValues);