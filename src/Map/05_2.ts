import {BuildingType, HouseType} from '../test_02/02.type';

export const getStreetTitleList = (buildings: Array<BuildingType>) => {
    return buildings.map(building => building.address.street.title);
}

export const getStreetHousesTitleList = (houses: Array<HouseType>) => {
    return houses.map(house => house.address.street.title);
}

export const createGreetingMessage = (houses: Array<HouseType>) => {
    const callbackfn = (house: HouseType) => 'Hello ' + house.address.street.title;
    return houses.map(callbackfn)
}