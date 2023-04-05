import {greetingArr, ManType} from './05';

let people: Array<ManType> = [];

beforeEach(() => {
    people = [
        {name: 'Andrei Ivanov', age: 33},
        {name: 'Aleksandr Petrov', age: 24},
        {name: 'Dmitry Sidorov', age: 18},
    ]
})

test('should get array of greeting message', () => {
    const greetingArray = greetingArr(people);

    expect(greetingArray.length).toBe(3);
    expect(greetingArray[0]).toBe('Hello Andrei');
    expect(greetingArray[1]).toBe('Hello Aleksandr');
    expect(greetingArray[2]).toBe('Hello Dmitry');
})