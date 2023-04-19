export const userObj = {
    '0': 'Dimych',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya'
}

const user = {id: 100500, name: 'Igor'};

type UsersType = {
    [key: string]: { id: number, name: string }
}

export const users: UsersType = {
    '101': {id: 101, name: 'Dimych'},
    '1212': {id: 1212, name: 'Natasha'},
    '123': {id: 123, name: 'Valera'},
    '45': {id: 45, name: 'Katya'}
}

users[user.id] = user; // add user

delete users[user.id]; // delete user

users[user.id].name = 'Ivan'; // update user

export const userArray = [
    {id: 101, name: 'Dimych'},
    {id: 1212, name: 'Natasha'},
    {id: 123, name: 'Valera'},
    {id: 45, name: 'Katya'}
];