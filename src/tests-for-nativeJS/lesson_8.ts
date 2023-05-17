// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {
    return nums.reduce(
        (prev, curr) => (curr % 1 === 0 && curr > 0 ? prev + curr : prev),
        0
    );
}

// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    if (a + b < c || b + c < a || c + a < b) return '00';
    const obj: { [key: string]: number } = {};
    for (let key in arguments) {
        if (!(arguments[key] in obj)) {
            obj[arguments[key]] = 1;
        } else obj[arguments[key]] += 1;
    }

    for (let key in obj) {
        if (obj[key] === 3) {
            return '10';
        }
        if (obj[key] === 2) {
            return '01';
        }
    }
    return '11';
}

// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    return number
        .toString()
        .split('')
        .reduce((prev, curr) => prev + +curr, 0);
}

// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    return (
        arr.reduce(
            (prev, curr, ind) => (ind % 2 === 0 ? prev + curr : prev - curr), 0) > 0
    );
};

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив.
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.

export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    return array.reduce((arr: Array<number>, curr: number) => {
        if (curr > 0) arr.push(curr ** 2);
        return arr;
    }, []);
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    if (N <= 1) return 1;
    return N + sumFirstNumbers(N - 1);
}

// ...и "лапку" вверх!!!!

// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено

export function getBanknoteList(amountOfMoney: number): Array<number> {
    if (amountOfMoney === 0) return [];
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1];

    for (let banknot of banknotes) {
        if (amountOfMoney - banknot >= 0) {
            return [banknot, ...getBanknoteList(amountOfMoney - banknot)];
        }
    }
    return [];
}
