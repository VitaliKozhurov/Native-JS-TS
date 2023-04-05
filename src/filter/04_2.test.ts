import {CityType} from '../test_02/02.type';
import {correctStaffCountBuilding, demolishHouseOnTheStreet} from './04_2';

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

test('House should be destroyed on Happy Street', () => {
    demolishHouseOnTheStreet(city, 'Happy street');

    expect(city.houses.length).toBe(1);
    expect(city.houses[0].address.street.title).toBe('White street')
})


test('Building with correct staff count', () => {
    let building = correctStaffCountBuilding(city.governmentBuilding, 500);

    expect(building.length).toBe(1);
    expect(building[0].type).toBe('FIRE-STATION')
})