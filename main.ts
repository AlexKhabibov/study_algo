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






// Сортировка выбором
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