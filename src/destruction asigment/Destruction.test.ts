import {PerosnType} from './Destruction';

let person: PerosnType;
beforeEach(() => {
    person = {
        name: 'Max',
        age: 31,
        lessons: [{title: '1'}, {title: '2'}, {title: '3'}],
        address: {
            street: {
                title: 'Russianova'
            }
        }
    }
})

test('', () => {
    const {name, age, lessons,} = person;
    const {title} = person.address.street;

    expect(name).toBe('Max');
    expect(age).toBe(31);
    expect(lessons.length).toBe(3);
    expect(title).toBe('Russianova');

})

test('array destr', () => {
    const less1 = person.lessons[0];
    const less2 = person.lessons[1];

    const [ls1, ls2] = person.lessons;

    const [l1, ...l2] = person.lessons;

    const {lessons} = person;

    expect(less1.title).toBe('1');
    expect(less2.title).toBe('2');
    expect(ls1.title).toBe('1');
    expect(ls2.title).toBe('2');
    expect(l2.length).toBe(2);
    expect(lessons).toStrictEqual([{title: '1'}, {title: '2'}, {title: '3'}])
})