import {
    addNewBookToUser,
    changeToMac,
    makeHairStyle,
    moveUser, moveUserToOtherHouse,
    removeUserBook, updateTitleCompany, updateTitleCompany_2, updateUserBook,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompanyTypes
} from './10_01';


test('reference type test', () => {
    let user: UserType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 4
        }
    }

    const cutUser = makeHairStyle(user, 2)
    expect(cutUser.hair).toBe(16)
    expect(user.hair).toBe(32)
    expect(cutUser.address).toBe(user.address)
})

test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 4
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const movedUser = moveUser(user, 'Kiev');

    expect(user).not.toBe(movedUser);
    expect(user.address).not.toBe(movedUser.address);
    expect(user.address.city).not.toBe(movedUser.address.city);
    expect(user.laptop).toBe(movedUser.laptop);
    expect(movedUser.address.city).toBe('Kiev');
})

test('upgrade laptop to MacBook', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 4
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const userWithMac = changeToMac(user, 'MacBook');

    expect(user).not.toBe(userWithMac);
    expect(user.address).toBe(userWithMac.address);
    expect(user.laptop).not.toBe(userWithMac.laptop);
    expect(user.laptop.title).toBe('ZenBook');
    expect(userWithMac.laptop.title).toBe('MacBook');
})

test('upgrade books', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 4
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['JS', 'React', 'TS']
    }

    const userCopy = moveUserToOtherHouse(user, 9);

    expect(user).not.toBe(userCopy);
    expect(user.books).toBe(userCopy.books);
    expect(user.address.house).toBe(4);
    expect(userCopy.address.house).toBe(9);

})

test('add new book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 4
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['JS', 'React', 'TS']
    }

    const userCopy = addNewBookToUser(user, ['css', 'restApi']);

    expect(user).not.toBe(userCopy);
    expect(user.books).not.toBe(userCopy.books);
    expect(userCopy.books.length).toBe(5);


})

test('update book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 4
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['JS', 'React', 'HTML']
    }

    const userCopy = updateUserBook(user, 'JS', 'TS');

    expect(user).not.toBe(userCopy);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(user.books[0]).toBe('JS');
    expect(userCopy.books[0]).toBe('TS');

})

test('remove book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 4
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['JS', 'React', 'HTML']
    }

    const userCopy = removeUserBook(user, 'JS');

    expect(user).not.toBe(userCopy);
    expect(user.laptop).toBe(userCopy.laptop);
    expect(user.books.length).not.toBe(userCopy.books.length);
    expect(userCopy.books.length).toBe(2);
})

test('update company', () => {
    let user: UserWithLaptopType & WithCompanyTypes = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 4
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [{id: 1, title: 'ЕПАМ'}, {id: 2, title: 'IT-INCUBATOR'}, {id: 3, title: 'GOOGLE'}]
    }

    const userCopy = updateTitleCompany(user, 1, 'EPAM');

    expect(user).not.toBe(userCopy);
    expect(user.companies).not.toBe(userCopy.companies);
    expect(user.companies[0].title).toBe('ЕПАМ');
    expect(userCopy.companies[0].title).toBe('EPAM');
})

test('update company_2', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 4
        },
        laptop: {
            title: 'ZenBook'
        },
    }

    let companies = {
        'Dimych': [{id: 1, title: 'EPAM'}, {id: 2, title: 'IT-INCUBATOR'}, {id: 3, title: 'GOOGLE'}],
        'Artem': [{id: 2, title: 'IT-INCUBATOR'}],
    }

    const companyCopy = updateTitleCompany_2(companies, 'Dimych', 1, 'IT-KAMASUTRA')

    expect(companies['Dimych'][0].title).toBe('EPAM');
    expect(companyCopy['Dimych'][0].title).toBe('IT-KAMASUTRA');

})
