//ЗАДАНИЕ 7.6.1
const word = prompt('Введите слово');
let wordReversed = '';

if (word === '') {
    console.log('Вы не ввели слово');
} else {
    for (let i = 1; i <= word.length; i +=1) {
        wordReversed = wordReversed + word[word.length-i];
    }
    if (word === wordReversed) {
        console.log(`Слово ${word} является палиндромом`);
    } else
        console.log(`Слово ${word} не является палиндромом`);
}


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