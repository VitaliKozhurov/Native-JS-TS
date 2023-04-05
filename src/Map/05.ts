export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: 'Andrei Ivanov', age: 33},
    {name: 'Aleksandr Petrov', age: 24},
    {name: 'Dmitry Sidorov', age: 18},
]

const devs = [
    {
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: 'Andrei',
        lastName: 'Ivanov',
    },
    {
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: 'Aleksandr',
        lastName: 'Petrov',
    },
    {
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: 'Dmitry',
        lastName: 'Sidorov',
    }
]

export const greetingArr = (people: Array<ManType>) => {
    return people.map(man => `Hello ${man.name.split(' ')[0]}`)
}