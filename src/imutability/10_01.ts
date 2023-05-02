export type UserType = {
    name: string
    hair: number
    address: { city: string, house: number }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

export type WithCompanyTypes = {
    companies: Array<{ id: number, title: string }>
}

export function makeHairStyle(user: UserType, power: number) {
    return {...user, hair: user.hair / 2};
}

export function moveUser(user: UserWithLaptopType, city: string) {
    return {...user, address: {...user.address, city: city}}
}

export function changeToMac(user: UserWithLaptopType, title: string) {
    return {...user, laptop: {...user.laptop, title: title}}
}

export function moveUserToOtherHouse(user: UserWithLaptopType & UserWithBooksType, house: number) {
    return {...user, address: {...user.address, house: house}}
}

export function addNewBookToUser(user: UserWithLaptopType & UserWithBooksType, newBooks: Array<string>) {
    return {...user, books: [...user.books, ...newBooks]}
}

export function updateUserBook(user: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) {
    return {...user, books: user.books.map(book => book === oldBook ? newBook : book)}
}

export function removeUserBook(user: UserWithLaptopType & UserWithBooksType, removedBook: string) {
    return {...user, books: user.books.filter(book => book !== removedBook)}
}

export function updateTitleCompany(user: UserWithLaptopType & WithCompanyTypes, id: number, newTitle: string) {
    return {
        ...user,
        companies: user.companies.map(company => company.id === id ? {...company, title: newTitle} : company)
    }
}

export type CompanyPropsType = { [key: string]: Array<{ id: number, title: string }> }

export function updateTitleCompany_2(company: CompanyPropsType, userName: string, companyID: number, newTitle: string) {

    return {...company, [userName]: company[userName].map(c => c.id === companyID ? {...c, title: newTitle} : c)}
}