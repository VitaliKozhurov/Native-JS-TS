import {CityType} from "../test_02/02.type";
import {addMoneyToBudget, decreiseFireStaff, increiseFireStaff, repairHouse} from "./03";

let city: CityType;


// Указываем, что необходимо выполнять перед выполнением теста
beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'White street'
                    }
                }
            }, {
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 100,
                    street: {
                        title: 'Happy street'
                    }
                }
            }, {
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
                type: "HOSPITAL",
                budget: 20000,
                staffCount: 200,
                address: {
                    street: {
                        title: 'Central Str'
                    }
                }
            },
            {
                type: "FIRE-STATION",
                budget: 50000,
                staffCount: 200,
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


test('Budget should be changed for HOSPITAL', () => {
    addMoneyToBudget(city.governmentBuilding[0], 10000);

    expect(city.governmentBuilding[0].budget).toBe(30000);
})

test('Budget should be changed for FIRE_STATION', () => {
    addMoneyToBudget(city.governmentBuilding[1], 10000);

    expect(city.governmentBuilding[1].budget).toBe(60000);
})

test('house should be repaired', () => {
    repairHouse(city.houses[1]);

    expect(city.houses[1].repaired).toBeTruthy();
})

test('fire-staff should be decreise', () => {
    decreiseFireStaff(city.governmentBuilding[1], 20);

    expect(city.governmentBuilding[1].staffCount).toBe(180);
})

test('fire-staff should be increise', () => {
    increiseFireStaff(city.governmentBuilding[1], 20);

    expect(city.governmentBuilding[1].staffCount).toBe(220);
})