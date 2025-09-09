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





// function f(n: number): void {
//     if (n <= 0) return;
//     f(n - 1);
//     f(n - 2);
// }

// f(3); // вызовет себя 9 раз




// const arr1: number[] = [1, 2, 3, 4];

// function sum(arr: number[], i: number = 0): number {
//     if (i === arr.length) return 0;
//     return arr[i] + sum(arr, i + 1);
// }

// console.log(sum(arr1));








// БЫСТРАЯ СОРТИРОВКА
/**
 * Быстрая сортировка — это рекурсивный алгоритм, который использует принцип "разделяй и властвуй":
>
> 1. Выбираем **опорный элемент** (pivot).
> 2. Делим массив на два:
>     - элементы **меньше pivot**
>     - элементы **больше или равны pivot**
> 3. Рекурсивно сортируем обе части.
 */

/*
const arr1: number[] = [2, 5, 3, 78, 94, 34, 0, 1, 34]

function quickSort(array: number[]): number[] {
    if (array.length < 2) return array; // определям базовый случай для работы с рекурсией

    const pivot = array[0]; // обозначаем опорный элемент (первый в массиве), о нам нужен как границ между двумя новыми массивами (1 массив будет содержать элементы больишие чем опорныц элемент, 2 массив - меньшие)

    const lessEl = array.slice(1).filter((el) => el < pivot); // создаем новый массив из элементов предидущего массива (без первого эл) и фильтруем его (все элементы должны быть меньше опорного)
    const greaterEl = array.slice(1).filter((el) => el >= pivot); // создаем новый массив из элементов предидущего массива (без первого эл) и фильтруем его (все элементы должны быть больше или равны опорному)
    return [...quickSort(lessEl), pivot, ...quickSort(greaterEl)] // собираем итоговый массив с помощью спреда

}

console.log(quickSort(arr1));
*/




// // через for - менее затратно для памяти (так как slice и filter очнь прожорливые из-за своей работы)

// const arr1: number[] = [2, 5, 3, 78, 94, 34, 0, 1, 34]

// function quickSortManual(array: number[]): number[] {
//     if (array.length < 2) return array;

//     const pivot = array[0];
//     const left: number[] = [];
//     const right: number[] = [];
//     let count = 0;

//     for (let i = 1; i < array.length; i++) {
//         if (array[i] < pivot) left.push(array[i]);
//         else right.push(array[i]);
//     }

//     return [...quickSortManual(left), pivot, ...quickSortManual(right)];
// }

// console.log(quickSortManual(arr1));






// const arr1: number[] = [2, 5, 3, 78, 94, 34, 0, 1, 34]

// function quickSort1(array: number[]): number[] {
//     if (array.length <= 1) return array;

//     let pivotIndex = Math.floor(array.length / 2);
//     let pivot = array[pivotIndex];
//     let lessThanPivotArray = [];
//     let greaterThanPivotArray = [];

//     for (let i = 0; i < array.length; i++) {
//         if (i === pivotIndex) continue; // убираем наш опорный элемент из прохода, чтобы не дублировать

//         if (array[i] < pivot) {
//             lessThanPivotArray.push(array[i])
//         } else {
//             greaterThanPivotArray.push(array[i])
//         }
//     }

//     return [...quickSort1(lessThanPivotArray), pivot, ...quickSort1(greaterThanPivotArray)]
// };

// console.log(quickSort1(arr1));









// GRAPH


/*
// Тип для вершины
type Vertex = string;

// Тип для графа: ключ — вершина, значение — массив соседей
type Graph = Map<Vertex, Vertex[]>;

const graph: Graph = new Map();

// Функция для добавления вершины
function addVertex(vertex: Vertex): void {
    if (!graph.has(vertex)) {
        graph.set(vertex, []);
    }
}

// Функция для добавления ребра (двустороннего)
function addEdge(v1: Vertex, v2: Vertex): void {
    graph.get(v1)?.push(v2);
    graph.get(v2)?.push(v1);
}

// Добавляем вершины
addVertex("A");
addVertex("B");
addVertex("C");
addVertex("D");

// Добавляем рёбра
addEdge("A", "B");
addEdge("A", "C");
addEdge("B", "D");
addEdge("C", "D");

// Выводим граф
console.log(graph);
*/





// Найдем кратчайшее расстояние из точки A в точку G

/*
// создадим тип для работы с графами
type Graph = {
    [key: string]: string[];
}

const graph: Graph = {}; // создадим объект graph

// поля в объекте будут вершинами, а массив кажой вершины будет напрвлнием - ребром
graph.a = ['b', 'c'];
graph.b = ['f'];
graph.c = ['d', 'e'];
graph.d = ['f'];
graph.e = ['f'];
graph.f = ['g'];

// Функция поиска в ширину
function breadthSearch(graph: Graph, start: string, end: string): boolean {
    let queue: string[] = []; // Явно указываем тип queue как string[]
    queue.push(start);

    while (queue.length > 0) {
        const currentEl: string = queue.shift()!; // Используем non-null assertion, так как очередь не пуста

        if (!graph[currentEl]) graph[currentEl] = [];
        if (graph[currentEl].includes(end)) return true;
        else queue = [...queue, ...graph[currentEl]];
    }

    return false;
}

console.log(breadthSearch(graph, 'a', 'g'));
*/





/*
// выведем все узлы дерева
// создаем тип для узла
type TreeNode = {
    value: string;
    children: TreeNode[];
};


// создаем дерево через объект
const tree: TreeNode = {
    value: 'A',
    children: [{ value: 'B', children: [] }, { value: 'C', children: [] }]
};

// создаем функцию для вывода узлов дерева
function printTree(node: TreeNode): void {
    console.log(node.value);
    for (let child of node.children) { // пробегаемся с помощью for..of
        printTree(child);
    }
}

printTree(tree); // A B C
*/





/**
 * "Посчитать количество узлов в дереве"
 */

/*
type TreeNode = {
    value: string;
    children: TreeNode[];
};


const tree = {
    value: 'A',
    children: [
        { value: 'B', children: [] },
        { value: 'C', children: [] }
    ]
};


function countNodes(node: TreeNode): number {
  let count = 1; // считаем текущий узел
  for (const child of node.children) {
    count += countNodes(child); // прибавляем количество узлов в поддеревьях
  }
  return count;
}

console.log(countNodes(tree)); // 3
*/







/**
 * Алгоритм Дейктры
 */

/*
type Graph = {
    [node: string]: {
        [neighbor: string]: number;
    }
};

const graph: Graph = {};

graph.a = { b: 2, c: 1 };
graph.b = { f: 7 };
graph.c = { d: 5, e: 2 };
graph.d = { f: 2 };
graph.e = { f: 1 };
graph.f = { g: 1 };
graph.g = {}; // пустой объект для вершины без исходящих ребер

// Функция для поиска кратчайших путей
function shortPath(graph: Graph, start: string, end: string): Record<string, number> {
    // стоимость пути от start до каждой вершины
    const costs: Record<string, number> = {};

    // уже обработанные вершины
    const processed: string[] = [];

    // заполняем начальные стоимости
    Object.keys(graph).forEach(node => {
        if (node !== start) {
            const value = graph[start]?.[node];
            costs[node] = value !== undefined ? value : Infinity;
        }
    });

    let node = findNodeLowestCost(costs, processed);
    while (node) {
        const cost = costs[node];
        const neighbors = graph[node];

        Object.keys(neighbors).forEach(neighbor => {
            const newCost = cost + neighbors[neighbor];
            if (newCost < (costs[neighbor] ?? Infinity)) {
                costs[neighbor] = newCost;
            }
        });

        processed.push(node);
        node = findNodeLowestCost(costs, processed);
    }

    return costs;
}





// Функция для поиска необработанной вершины с минимальной стоимостью
function findNodeLowestCost(costs: Record<string, number>, processed: string[]): string | undefined {
    let lowestCost = Infinity;
    let lowestNode: string | undefined = undefined;

    Object.keys(costs).forEach(node => {
        const cost = costs[node];
        if (cost < lowestCost && !processed.includes(node)) {
            lowestCost = cost;
            lowestNode = node;
        }
    });

    return lowestNode;
}

// Пример использования
console.log(shortPath(graph, 'a', 'g'));
*/






/*
// Дан массив чисел nums и число target. Нужно найти индексы двух чисел, сумма которых равна target.
// Можно предположить, что решение всегда существует, и одно число нельзя использовать дважды.

function findTarget(array: number[], target: number): number[] {
    let newArr: number[] = []; // сюда будем пушить новый массив индексов

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (target === array[i] + array[j]) {
                newArr = [i, j];
                return newArr;
            }
        }
    }
    throw new Error("пары не найдены");

};

console.log(findTarget([2, 7, 11, 15], 9));
*/







/**
 * Дан массив чисел nums. Нужно найти максимальное число в массиве и его индекс.
 * function findMax(array: number[]): { max: number; index: number } {
    if (array.length === 0) {
        throw new Error("Массив пустой");
    }

    let maxNum = array[0];
    let maxIndex = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maxNum) {
            maxNum = array[i];
            maxIndex = i;
        }
    }

    return { max: maxNum, index: maxIndex };
}

console.log(findMax([3, 7, 2, 9, 4]));
 *
 */



/**
 * Дан массив чисел `nums`. Нужно найти:

1. **Минимальное число** и его индекс.
2. **Максимальное число** и его индекс.
3. **Сумму всех элементов массива**.

type ReturnObj = {
    max: number;
    maxIndex: number;
    min: number;
    minIndex: number;
    sum: number
}

function findMaxMinSum(array: number[]): ReturnObj {
    if (array.length === 0) {
        throw new Error("Массив пустой");
    }

    let maxNum = array[0];
    let maxIndex = 0;
    let minNum = array[0];
    let minIndex = 0;
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > maxNum) {
            maxNum = array[i];
            maxIndex = i;
        }
        if (array[i] < minNum) {
            minNum = array[i];
            minIndex = i;
        }

        sum += array[i];
    }

    return { max: maxNum, maxIndex: maxIndex, min: minNum, minIndex: minIndex, sum: sum };
}

console.log(findMaxMinSum([3, 7, 2, 9, 4]));
 */




/**
 * Дан массив чисел.
Нужно:
Найти сумму всех элементов.
Посчитать среднее арифметическое.
Посчитать, сколько чисел строго больше среднего.

function func(array: number[]): { sum: number; average: number; greaterThanAverageCount: number } {
    let sum = 0;
    let average = 0;
    let greaterThanAverageCount = 0;
    let newArr: number[] = [];

    if (array.length < 1) {
        throw new Error("Массив пуст");
    }

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    };

    average = sum / array.length;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > average) {
            newArr.push(array[i])
            greaterThanAverageCount = newArr.length;

            // но можно и без массива, то будет производительнее
            // greaterThanAverageCount ++;
        }
    }

    return { sum, average, greaterThanAverageCount };
}

console.log(func([10, 20, 30, 40, 50]));
 *
 */


/**
 * Напиши функцию countUnique, которая принимает массив чисел и возвращает количество уникальных элементов в нём.
 *

function countUnique(array: number[]): number {
    return new Set(array).size;;
};

console.log(countUnique([1, 2, 2, 3, 4, 4, 5]));




function countUnique(array: number[]): number {
    if (array.length === 0) throw new Error("Ошибка массива");

    let count = 1;

    for (let i = 1; i < array.length; i++) {

        if (array[i] !== array[i - 1]) {
            count++;
        }

    }
    return count;
};

console.log(countUnique([1, 2, 2, 3, 4, 4, 5]));




function countUnique(array: number[]): number {
    const counter: Record<number, number> = {};

    for (let i = 0; i < array.length; i++) {
        const el = array[i]; // 1iter: 1 | 2iter:
        counter[el] = (counter[el] || 0) + 1; // 1iter: {1: }
        console.log(counter);
    }

    return Object.keys(counter).length;
}

console.log(countUnique([1, 2, 2, 3, 4, 4, 5]));
 */





/**
 * Подсчёт количества чётных и нечётных чисел в массиве
 * {
  even: number; // количество чётных
  odd: number;  // количество нечётных
}
 *
 * countEvenOdd([1, 2, 3, 4, 5]);
// { even: 2, odd: 3 }


function countEvenOdd(array: number[]): { even: number, odd: number } {
    let evenArr: number[] = [];
    let oddArr: number[] = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) evenArr.push(array[i])
        else oddArr.push(array[i])
    }

    let result = { even: evenArr.length, odd: oddArr.length };
    return result;
};

console.log(countEvenOdd([1, 2, 3, 4, 5]));

 *
 */





/**
 * const vowels = ['a','e','i','o','u'];
 * countVowels("hello world") результат: 3 (e, o, o)
 *
 * function countVowels(array: string): number {
    let count: number = 0;
    const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < array.length; i++) {
        if (vowels.includes(array[i].toLocaleLowerCase())) {
            count++;
        }
    }

    return count;
};

console.log(countVowels("HEllo World"));
 */





/** Задача 9 (объекты / Map)
Напиши функцию countWords, которая принимает строку и возвращает объект, где:
- ключи → уникальные слова в строке
- значения → количество вхождений каждого слова

countWords("hello world hello world world")
// результат: { hello: 2, world: 3 }



type returnObj = {
    [uniqueWords: string]: number;
}

function countWords(text: string): returnObj {
    let result: returnObj = {};
    let splitText = text.toLowerCase().split(' ').filter(word => word !== '');

    if (typeof text !== 'string') {
        throw new Error('Аргумент должен быть строкой');
    }

    for (let i = 0; i < splitText.length; i++) {
        const word = splitText[i];

        if (!result[word]) {
            result[word] = 1; // если отсутсвтует такой ключ — назначаем его и присваиваем кол-во 1
        } else {
            result[word] += 1; // если слово(такой ключ) уже есть, увеличиваем счётчик
        }
    }

    return result;
}


console.log(countWords("Hello world hello World hello world world"));
 */












// function reverseText(text: string): string {

//     if (!text) throw new Error("string is empty");

//     let result = '';

//     for (let i = text.length - 1; i >= 0; i--) {
//         result += text[i];
//     }
//     return result;
// };

// console.log(reverseText(''));






// async function reverseTextAsync(text: string): Promise<string> {
//     if (!text) throw new Error("string is empty");

//     let result = '';
//     for (let i = text.length - 1; i >= 0; i--) {
//         result += text[i];
//     }
//     return result;
// }

// // Используем async/await
// (async () => {
//     try {
//         const reversed = await reverseTextAsync("hello");
//         console.log(reversed); // "olleh"
//     } catch (err) {
//         console.error(err);
//     }
// })();





// группировка
// const weatherData = [
//     { date: '2010-03-23', maxTemp: 15, minTemp: 8, description: 'холодно' },
//     { date: '2010-04-28', maxTemp: 14, minTemp: 5, description: 'тепло' },
//     { date: '2010-05-20', maxTemp: 12, minTemp: 3, description: 'солнечно' },
//     { date: '2010-04-21', maxTemp: 10, minTemp: 5, description: 'туман' },
// ];

// const groupByDescription = weatherData.reduce((acc, item) => {
//     const key = item.description;

//     if (!acc[key]) {
//         acc[key] = [];
//     };

//     acc[key].push(item);
//     return acc;
// }, {});

// console.log(groupByDescription);






/** Задача - Подсчёт повторяющихся чисел в массиве
 * [1, 2, 2, 3, 4, 4, 4, 5].
 * 
 * Пример ожидаемого результата:
{ 1: 1, 2: 2, 3: 1, 4: 3, 5: 1 }

type ResultType = {
    [num: number]: number;
};

function func(array: number[]): ResultType {

    if (!array) {
        throw new Error("массив пустой");
    }

    let result: ResultType = {};

    for (let i = 0; i < array.length; i++) {
        const num = array[i];

        if (!result[num]) {
            result[num] = 1; // если отсутсвтует такой ключ — назначаем его и присваиваем кол-во 1
        } else {
            result[num] += 1; // если слово(такой ключ) уже есть, увеличиваем счётчик 
        }
    }

    return result;
};

console.log(func( [1, 2, 2, 3, 4, 4, 4, 5]));
 */





/** Задача №7: Сдвиг элементов массива
Условие:
Напиши функцию, которая получает массив чисел и возвращает новый массив, где каждый элемент сдвинут на 1 вправо.
Последний элемент массива становится первым.
Пример:
shiftArray([1, 2, 3, 4]);
Результат: [4, 1, 2, 3] 

function shiftArray(array: number[]): number[] {
    let result: number[] = [];

    for (let i = 0; i < array.length; i++) {
        if (i === array.length - 1) {
            result[0] = array[i]; // последний элемент на первую позицию
        } else {
            result[i + 1] = array[i]; // остальные сдвигаем на +1
        }
    }
    return result;
}

console.log(shiftArray([1, 2, 3, 4]));
 */



/** ## Задача №8: **Найти все пары чисел с суммой `target`**

**Условие:**
Напиши функцию, которая получает массив чисел и число `target`.
Нужно вернуть **все уникальные пары чисел**, сумма которых равна `target`.

**Пример:**

findPairs([2, 4, 3, 5, 7], 7);
Результат: [[2,5], [4,3]]


function findPairs(array: number[], target: number): number[][] {
    if (array.length < 2) {
        throw new Error("массив должен быть более 1 элемента");
    }
    let resArray: number[][] = [];

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === target) {
                resArray.push([array[i], array[j]]);
            }
        }
    }
    return resArray;
}

console.log(findPairs([2, 4, 3, 5, 7], 7));
 */






/** Проверка палиндрома
 * 
 * function isPalindrome(text: string): boolean {
    if (!text) throw new Error("должен быть текст");

    let cleanText = text.toLowerCase().replace(/[^a-z0-9]/g, "");
    let newText = '';

    for (let i = cleanText.length - 1; i >= 0; i--) {
        newText += cleanText[i];
    };

    return cleanText === newText
};

console.log(isPalindrome("A man a plan a canal Panama"));
 * 
 */



/** ## **Задача:** Дана строка. Нужно найти **первый неповторяющийся символ** (который встречается ровно один раз). Если такого символа нет — вернуть `null`.

Пример:

```tsx
"swiss" → "w"
"level" → "v"
"aabbcc" → null
```

function findChar(text: string) {

    for (let i = 0; i < text.length; i++) {
        let uniqueChar = true;

        for (let j = 0; j < text.length; j++) {
            if (i !== j && text[i] === text[j]) {
                uniqueChar = false;
                break; // символ повторяется → выходим из внутреннего цикла
            }
        }

        if (uniqueChar) {
            return text[i];
        }
    }
    return null;
}

console.log(findChar('swwwiss'));

 * 
 */





/** Задача №11 — Проверка анаграммы

function isAnagram(word1: string, word2: string): boolean {
    if (!word1 || !word2) {
        throw new Error("введите текст");
    }

    let cleanWord1 = word1.trim().toLowerCase().replace(/\s/g, "");
    let cleanWord2 = word2.trim().toLowerCase().replace(/\s/g, "");

    if (cleanWord1.length !== cleanWord2.length) return false;

    let word1Arr = cleanWord1.split('');
    let word2Arr = cleanWord2.split('');

    return word1Arr.sort().join('') === word2Arr.sort().join('');
}

console.log(isAnagram(" lis   ten ", "sil   e  n  t ")); // true
console.log(isAnagram("hello", "bello")); // false
 */




