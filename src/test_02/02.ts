// "isolatedModules": false,
// Необходимо в ts-config менять если ошибка по импорту

type StydentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: TechnologiesType
}

type AddressType = {
    streetTitle: string
    city: LocalCityType
}

type LocalCityType = {
    title: string
    countryTitle: string
}

type TechnologiesType = Array<TechnologyType>

type TechnologyType = {
    id: number
    title: string
}


const student: StydentType = {
    id: 1,
    name: 'Vitalik',
    age: 30,
    isActive: true,
    address: {
        streetTitle: 'Surganova 2',
        city: {
            title: 'Minsk',
            countryTitle: 'Belarus'
        }
    },
    technologies: [
        {
            id: 1,
            title: 'HTML'
        },
        {
            id: 2,
            title: 'CSS'
        },
        {
            id: 3,
            title: 'JS'
        },
    ]
}
