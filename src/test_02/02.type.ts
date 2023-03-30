export type StreetType = {
    title: string
}

export type AddressType = {
    number?: number // Опциональное свойство
    street: StreetType
}

export type HouseType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}

export type BuildingType = {
    type: string
    budget: number
    staffCount: number
    address: AddressType
}


export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuilding: Array<BuildingType>
    citizensNumber: number
}