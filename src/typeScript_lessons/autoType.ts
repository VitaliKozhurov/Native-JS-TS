import {PhotoType, UserType} from './generic';

type NullableType<NT> = null | NT

const initial = {
    age: 10,
    name: 'Dimych',
    user: null as UserType | null,  // Определяем тип (или null или UserType)
    photo: null as PhotoType | null // Определяем тип (или null или PhotoType)
}

const initial_2 = {
    age: 10,
    name: 'Dimych',
    user: null as NullableType<UserType>,
    photo: null as NullableType<PhotoType>,
}


type StateType = typeof initial;  // автоматическое определение типа объекта
type StateType_2 = typeof initial_2;


const actions = {
    AC1: (age: number) => ({type: 'SET-AGE', age} as const),
    AC2: (firstName: string, lastName: string) => ({type: 'SET-FULL-NAME', firstName, lastName} as const),
}

type ActionsType = ReturnType<PropertiesType<typeof actions>>

const reducer = (state: StateType = initial, action: ActionsType) => {
    switch (action.type) {
        case 'SET-AGE':
            return {...state, age: action.age}
        case 'SET-FULL-NAME':
            return {...state, name: action.firstName + ' ' + action.lastName}
    }

}

/*const reducer_2 = (state: StateType_2 = initial, action: ActionsType) => {

    return state;
}*/

type  PropertiesType<T> = T extends { [key: string]: infer U } ? U : never;

let actionsObj: ReturnType<PropertiesType<typeof actions>> = {type: 'SET-AGE', age: 33}


// const AC1 = (age: number) => ({type: 'SET-AGE', age} as const);  // as const нам конкретно говорит, что type === SET-AGE, если убрать as const то тип будет string
// const AC2 = (firstName: string, lastName: string) => ({type: 'SET-FULL-NAME', firstName, lastName} as const);

// type AC1Type = ReturnType<typeof AC1>;          // Возвращает тип объекта, который вернет функция
// type AC2Type = ReturnType<typeof AC2>;

// const action1: AC1Type = {type: 'asdsa', age: 21}    -- error

// Условный тип
type HipHop<T> = T extends 'user' ? UserType : PhotoType; // Тернарное выражение для определения типа

let a: HipHop<'user'> = {
    firstName: 'Max',
    lastName: 'Ros',
    age: 32
}
let b: HipHop<'photo'> = {
    large: 'large-it',
    small: 'small-it'
}


const obj = {
    a: {name: 'Dimych'},
    b: {age: 33},
    c: {site: {title: 'it-kamasutra.com'}}
}

type SomeTypes = typeof obj.a | typeof obj.b | typeof obj.c;
let someVar: SomeTypes = {age: 18, name: 'asd'}

type SomeType_2<T> = T extends { [key: string]: infer U } ? U : never;      // Если T является объектом у которого есть ключ и значения, то оператор infer додумает тип объекта (значения)

let newObj: SomeType_2<typeof obj> = {age: 41, name: 'XXX'}