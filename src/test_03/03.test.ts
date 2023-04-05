import {StudentType} from "../test_02/02";
import {addSkill, changeToActive, whereStudentLeave} from "./03";

let student: StudentType;
beforeEach(() => {
    student = {
        id: 1,
        name: 'Vitalik',
        age: 30,
        isActive: false,
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
})

test('new tech skill should added to student', () => {
    expect(student.technologies.length).toBe(3);
    addSkill(student, 'React');
    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe("React");
    expect(student.technologies[3].id).toBeDefined();
})

test('student should be active', () => {
    expect(student.isActive).toBe(false);
    changeToActive(student);
    expect(student.isActive).toBe(true);
})

test('where students leaves', () => {
    const result1 = whereStudentLeave(student, 'Moscow');
    const result2 = whereStudentLeave(student, 'Minsk');

    expect(result1).toBe(false);
    expect(result2).toBe(true);
})