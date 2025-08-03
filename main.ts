// const arr1: (number | string)[] = [1, '2', 3, 4, '5', 10, 23, 45, 3, 12];
// let count = 0; // будем считать количество прохода по массиву, чтобы понять сложность алгоритма


// КОНСТАНТНАЯ СЛОЖНОСТЬ O(1)
// // function getLastNumArr<T>(array: T[]): T {
//     return array[array.length - 1];
// };

// console.log(getLastNumArr(arr1));





// function areParamsEqual(param1: number, param2: number): boolean {
//     return param1 === param2;
// };

// console.log(areParamsEqual(-4, -4));







// ЛИНЕЙНЫЙ ПОИСК O(n)
// function findTarget(array: (number | string)[], target: number | string): number | undefined {
//     for (let index = 0; index < array.length; index++) {
//         count += 1;
//         if (array[index] === target) {
//             return index;
//         };
//     }
//     throw new Error("число не найдено");
// };

// console.log(findTarget(arr1, 12));
// console.log('count = ', count); // сложность алгоритма расчитывается из худшего исхода, то есть если в масссие 10 элементов, а нужный находиться в конце массива, то счетчик пройдет ло самомо конца массива и составит 10 итераций, итого сложность нащего линейного алгоритма O(10)





// БИНАРНЫЫЙ ПОИСК O(log n)

// const arr1: number[] = [1, 3, 3, 4, 9];


// function binarySerach<T extends number>(array: T[], target: T): number {
//     // Устанавливаем границы поиска
//     let leftSide = 0; // кряняя левая граница массива по индексу - 0
//     let rightSide = array.length - 1; // кряняя правая граница массива по индексу - 4

//     while (leftSide <= rightSide) { // пока 0 <= 4
//         let middle = Math.floor((leftSide + rightSide) / 2); // (0 + 4) / 2 = 2 | 3

//         if (array[middle] === target) { // 3 === 1 NO (значит не погружаемся в этот блок и идем дальше) | 4 === 1 NO идем дальше
//             return middle;
//         };

//         if (array[middle] < target) { // 3 < 1 NO
//             leftSide = middle + 1; // переприсваеваем в левую границу 3 + 1 = 4 и мдем опять в вверх в блок while
//         } else {
//             rightSide = middle - 1;
//         }
//     }
//     throw new Error("число не найдено");
// };

// console.log(binarySerach(arr1, 1));




/*
const arr1: number[] = [1, 9, 3, 4, 7, 10, 23, 45, 3, 12];
let count = 0;

function binarySearch(array: number[], target: number): number | never {
    const arr = array.slice().sort((a, b) => a - b);
    console.log('Отсортированный массив: ', arr); // [1, 3, 3, 4, 7, 9, 10, 12, 23, 45]
    let start = 0; // 0
    let end = arr.length - 1; // 9

    while (start <= end) { // 1iter: 0 <= 9 YES | 2iter: 5 <= 9 YES | 3iter: 8 <= 9 YES
        count += 1;
        let middle = Math.floor((start + end) / 2); // 1iter: middle = (0 + 9) / 2 = 4 | 2iter: middle = (5 + 9) / 2 = 7 | 3iter: (8 + 9) / 2 = 8

        if (arr[middle] === target) { // 1iter: arr[4] === 23, то есть 7 === 23 NO | 2iter: arr[7] === 23, то есть 12 === 23 NO | 3iter: arr[8] === 23, то есть 23 === 23 YES
            return middle; // middle === 23
        }

        if (target < arr[middle]) { // iter1: 23 < 7 NO | 2iter: 23 < 12 NO | 
            end = middle - 1; 
        } else {
            start = middle + 1; // 1iter: start = 4 + 1 = 5 | 2iter: start = 7 + 1 = 8
        }
    }

    throw new Error("В данном массиве искомое число отсутсвует");
}

console.log(binarySearch(arr1, 45));
console.log('итераций:', count);
*/







/*
// Сортировка выбором - O(n^2)
const arr1: number[] = [1, 3, 3, 4, 9, 1, 6, 23, 4, 45];
let count = 0;

function selection(array: number[]): number[] {
    for (let i = 0; i < array.length; i++) {
        let indexMin = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[indexMin]) { 
                indexMin = j;
            }
            count += 1;
        }

        let tempVal = array[i];
        array[i] = array[indexMin];
        array[indexMin] = tempVal;
    }
    return array;
}
    */






// Найти все пары чисел в массиве nums, сумма которых равна target. - O(n^2)

// const nums = [1, 3, 2, 8, 4, 0];
// const target = 4;
// const result: number[][] = [];

// for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//         if (nums[i] + nums[j] === target) {
//             result.push([nums[i], nums[j]]);
//         }
//     }
// }

// console.log(result);





// const arr1: number[] = [0, 3, 4, 5, 6, 7, 8];
// let target: number = 7;
// let result: number[][] = [];

// for (let i = 0; i < arr1.length; i++) {
//     for (let j = i + 1; j < arr1.length; j++) {
//         if (arr1[i] + arr1[j] === target) {
//             result.push([arr1[i], arr1[j]]);
//         }
//     }
// };
// console.log(result);








//  СОРТИРОВКА ВЫБОРОМ
// мутируем тот же массив

// const arr1: number[] = [4, 6, 3, 2, 0, 8, 9, 1, 10, 12];
// let count = 0

// for (let i = 0; i < arr1.length; i++) {
//     let minIndex = i; // 0, 2, 3, 4

//     for (let j = i + 1; j < arr1.length; j++) {
//         if (arr1[j] < arr1[minIndex]) {
//             minIndex = j;
//         }
//         count += 1;
//     }
//     let tmp = arr1[i]; // 4, 3, 2, 0
//     arr1[i] = arr1[minIndex]; // 
//     arr1[minIndex] = tmp;
//     // можно обемн.и так сделать:  [arr1[i], arr1[minIndex]] = [arr1[minIndex], arr1[i]];
// }
// console.log(arr1);
// console.log(count);






// // а теперь через создание нового массива

// const arr1: number[] = [4, 6, 3, 2, 0, 8, 9, 1, 10, 12];

// function func(array: number[]): number[] {
//     let newArray: number[] = [];
//     let count = 0;
//     console.log(array);

//     while (array.length > 0) { // условие выхода из цикла - отсутсвие элементов в массиве

//         let minIndex = 0;
//         for (let i = 0; i < array.length; i++) {
//             count += 1;

//             if (array[i] < array[minIndex]) {
//                 minIndex = i;
//             }
//         }
//         newArray.push(array[minIndex])
//         array.splice(minIndex, 1)

//     }
//     console.log(count);
//     console.log(newArray);
//     return newArray;

// };

// func(arr1);




/*
// СОРТИРОВКА ПУЗЫРЬКОМ

const arr1: number[] = [4, 6, 3, 2, 0, 8, 9, 1, 10, 12];
let count = 0

function bubleSort(array: number[]) {
    for (let i = 0; i < array.length; i++) { // iter1: 0 | 
        for (let j = 0; j < array.length - 1 - i; j++) { // iter1: 0 | iter2: 1 | iter3: 2 | 
            if (array[j + 1] < array[j]) { // iter1: array[1] < array[0] = 6 < 4 NO | iter2: array[2] < array[1] = 3 < 6 YES | iter3: array[3] < array[2] = 2 < 6 YES и так далее....

                // при заходе в этот блок, мы найденные элементы просто меняем местами через временную переменную
                let tmp = array[j]; // iter1: tmp = array[1] = 6 | iter2: tmp = array[2] = 6 | 
                array[j] = array[j + 1]; // iter1: array[j] = 3 | iter2: array[j] = 2 |
                array[j + 1] = tmp; // iter1: array[j + 1] = 6 | iter1: array[j + 1] = 6 | 

                // iter1: [4, 3, 6, 2, 0, 8, 9, 1, 10, 12]
                // iter2: [4, 3, 2, 6, 0, 8, 9, 1, 10, 12]
                // iter3: [4, 3, 2, 0, 6, 8, 9, 1, 10, 12]
                // iter4: [4, 3, 2, 0, 6, 8, 1, 9, 10, 12]
                // во внешнем цикле переходим к следующему индексу:
                // iter5: [4, 3, 2, 0, 6, 8, 1, 9, 10, 12]
                // iter6: [3, 4, 2, 0, 6, 8, 1, 9, 10, 12]
                // iter7: [3, 2, 4, 0, 6, 8, 1, 9, 10, 12]
                // iter8: [3, 2, 0, 4, 6, 8, 1, 9, 10, 12]
                // iter9: [3, 2, 0, 4, 6, 1, 8, 9, 10, 12]
                // во внешнем цикле переходим к следующему индексу:
                // и так далее до прозода в конец
            }
            count++; // счетчик
        }
    }
    console.log(count);
    console.log(array);
    return array;
};

bubleSort(arr1);
*/







// РЕКУРСИЯ

// function minus1(number: number): void {
//     if (number <= 1) {
//         console.log(1);
//         return;
//     }

//     console.log(number);
//     minus1(number - 1);
// }

// minus1(10)




// function factorial(number:number): number {
//     if (number === 1) {
//         return 1;
//     }

//     return number * factorial(number -1);
// };

// console.log(factorial(50));






// БЫСТРАЯ СОРТИРОВКА

