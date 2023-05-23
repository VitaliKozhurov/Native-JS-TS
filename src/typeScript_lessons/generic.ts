// Generic type -- уточнение типа

export type UserType = {
    firstName: string
    lastName: string
    age: number
}

export type PhotoType = {
    large: string
    small: string
}

// Через T мы уточняем какой подтип будем использовать внутри
type ServerResponseType<DataType> = {
    errorCode: number
    messages: Array<string>
    data: DataType
}

const response1: ServerResponseType<UserType> = {
    errorCode: 1,
    messages: ['it', 'kamasutra'],
    data: {
        firstName: 'Dmitry',
        lastName: 'Kuzyuberdin',
        age: 32
    }
}

const response2: ServerResponseType<PhotoType> = {
    errorCode: 1,
    messages: ['it', 'kamasutra'],
    data: {
        large: 'large picture',
        small: 'small picture'
    }
}