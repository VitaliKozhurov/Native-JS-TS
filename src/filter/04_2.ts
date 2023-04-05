import {BuildingType, CityType} from '../test_02/02.type';

export function demolishHouseOnTheStreet(city: CityType, street: string) {
    city.houses = city.houses.filter(house => house.address.street.title !== street)
}

export function correctStaffCountBuilding(building: Array<BuildingType>, count: number) {
    return building.filter(build => build.staffCount > count)
}