type UsersType = {
    [key: string]: { id: number, name: string }
}

let users: UsersType = {
    '101': {id: 101, name: 'Dimych'},
    '1212': {id: 1212, name: 'Natasha'},
    '123': {id: 123, name: 'Valera'},
    '1': {id: 1, name: 'Katya'}
}

beforeEach(() => {
    users = {
        '101': {id: 101, name: 'Dimych'},
        '1212': {id: 1212, name: 'Natasha'},
        '123': {id: 123, name: 'Valera'},
        '1': {id: 1, name: 'Katya'}
    }
})

test('should update user', () => {
    users['1'].name = 'Ekaterina';
    expect(users['1'].name).toBe('Ekaterina');
    expect(users['1']).toEqual({id: 1, name: 'Ekaterina'})
})

test('should dekete user', () => {
    delete users['1']

    expect(users['1']).toBe(undefined);
})