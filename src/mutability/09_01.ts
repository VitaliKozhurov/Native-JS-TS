export type UserType = {
    name: string
    age: number
    address: {
        title: string
    }
}

const user: UserType = {
    name: 'Vitali',
    age: 31,
    address: {
        title: 'Minsk'
    }
}

const increaseAge = (user: UserType) => {
    user.age++;
}