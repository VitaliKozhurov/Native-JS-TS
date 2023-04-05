import {CityType} from '../test_02/02.type';
import {createGreetingMessage, getStreetHousesTitleList, getStreetTitleList} from './05_2';

let city: CityType;

// Указываем, что необходимо выполнять перед выполнением теста
beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                id: 1,
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'White street'
                    }
                }
            }, {
                id: 2,
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'Happy street'
                    }
                }
            }, {
                id: 3,
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 101,
                    street: {
                        title: 'Happy street'
                    }
                }
            }],
        governmentBuilding: [
            {
                type: 'HOSPITAL',
                budget: 20000,
                staffCount: 200,
                address: {
                    street: {
                        title: 'Central Str'
                    }
                }
            },
            {
                type: 'FIRE-STATION',
                budget: 50000,
                staffCount: 1000,
                address: {
                    street: {
                        title: 'South Str'
                    }
                }
            }
        ],
        citizensNumber: 1000000
    }
})

test('should return list governmentBuilding street title', () => {
    const streetList = getStreetTitleList(city.governmentBuilding);

    expect(streetList.length).toBe(2);
    expect(streetList[0]).toBe('Central Str');
    expect(streetList[1]).toBe('South Str');
})

test('should return list houses street title', () => {
    const streetHousesList = getStreetHousesTitleList(city.houses);

    expect(streetHousesList.length).toBe(3);
    expect(streetHousesList[0]).toBe('White street');
    expect(streetHousesList[1]).toBe('Happy street');
    expect(streetHousesList[2]).toBe('Happy street');
})

test('creeting message for street', () => {
    const greetingMessages = createGreetingMessage(city.houses);

    expect(greetingMessages.length).toBe(3);
    expect(greetingMessages[0]).toBe('Hello White street');
    expect(greetingMessages[1]).toBe('Hello Happy street');
    expect(greetingMessages[2]).toBe('Hello Happy street');
})