import {
    getSquarePositiveIntegers,
    getSum,
    getTriangleType,
    isEvenIndexSumGreater,
    sum,
    sumFirstNumbers
} from './lesson_8';
// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).
test('get sum', (() => {
    expect(sum(3, 5, 8, 2, 2)).toBe(20);
    expect(sum(1, 1, 1, 6)).toBe(9);
    expect(sum(0)).toBe(0);
}))

//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.
test('get triangle type', () => {
    expect(getTriangleType(1, 1, 1)).toBe('10');
    expect(getTriangleType(2, 3, 3)).toBe('01');
    expect(getTriangleType(4, 5, 3)).toBe('11');
    expect(getTriangleType(10, 2, 2)).toBe('00');

})
// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа
test('get sum of numbers', () => {
    expect(getSum(145)).toBe(10);
    expect(getSum(99)).toBe(18);
    expect(getSum(105)).toBe(6);
})

// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.
test('what numbers is more', () => {
    expect(isEvenIndexSumGreater([1, 3, 2, 5])).toBe(false);
    expect(isEvenIndexSumGreater([8, 3, 2, 5])).toBe(true);
})

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив.
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.
test('should return arrat from squared element', () => {
    expect(getSquarePositiveIntegers([1, 2, 3, 4, 5])).toStrictEqual([1, 4, 9, 16, 25]);
    expect(getSquarePositiveIntegers([1, -2, 3, -4, 5])).toStrictEqual([1, 9, 25]);
})

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.
test('should return summ includes numbers', () => {
    expect(sumFirstNumbers(5)).toBe(15);
    expect(sumFirstNumbers(3)).toBe(6);
})