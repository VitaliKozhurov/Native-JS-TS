import {StudentType} from "../test_02/02";
import {BuildingType, CityType, HouseType} from "../test_02/02.type";

export const sum = (a: number, b: number) => {
    return a + b;
}

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function changeToActive(student: StudentType) {
    student.isActive = true;
}

export function whereStudentLeave(student: StudentType, city: string) {
    return student.address.city.title === city;
}

export function addMoneyToBudget(building: BuildingType, money: number) {
    building.budget = building.budget + money
}

export const repairHouse = (house: HouseType) => {
    house.repaired = true;
}

export const decreiseFireStaff = (staff: BuildingType, count: number) => {
    staff.staffCount -= count;
}

export const increiseFireStaff = (staff: BuildingType, count: number) => {
    staff.staffCount += count;
}