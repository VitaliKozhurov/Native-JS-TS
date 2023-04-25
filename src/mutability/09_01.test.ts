import {UserType} from './09_01';

const increaseAge = (u: UserType) => {
    u.age++;
}


test('reference type test', () => {
    const user: UserType = {
        name: 'Vitali',
        age: 31,
        address: {
            title: 'Minsk'
        }
    }

    increaseAge((user));


    expect(user.age).toBe(32);

    const superMan = user;
    superMan.age = 1000;

    expect(user.age).toBe(1000)
})

test('array reference test', () => {
    const users = [
        {name: 'Max', age: 40},
        {name: 'Viktor', age: 45}
    ]

    const admins = users;

    admins.push({name: 'Anton', age: 10});

    expect(users[2]).toEqual({name: 'Anton', age: 10})
    expect(users.length).toBe(3)

})

test('value type test', () => {
    let usersCount = 100;

    let adminsCount = usersCount;
    adminsCount = adminsCount + 1;

    expect(usersCount).toBe(100);
})


test('reference type test#2', () => {
    const user: UserType = {
        name: 'Vitali',
        age: 31,
        address: {
            title: 'Minsk'
        }
    }

    let addr = user.address;

    const user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: user.address
    }


    user2.address.title = 'Minsk City';

    expect(user.address.title).toBe('Minsk City');
})

test('array reference test#2', () => {
    const address = {
        title: 'Minsk'
    }

    const user1: UserType = {name: 'Max', age: 40, address: address};
    const user2: UserType = {name: 'Iliya', age: 20, address: address};

    const users = [user1, user2, {name: 'Katya', age: 18, address: address}];

    const admins = [user1, user2];

    admins[0].name = 'Maxim';

    expect(users[0].name).toBe('Maxim');
    expect(admins[0].name).toBe('Maxim');
    expect(user1.name).toBe('Maxim');
})