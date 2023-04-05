test('should return men older then 90 years old', () => {
    const ages = [10, 20, 22, 1, 100, 90, 14];
    const oldAges = ages.filter(age => age > 90);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})

test('should return cheap courses', () => {
    const courses = [
        {title: 'CSS', price: 110},
        {title: 'JS', price: 200},
        {title: 'REACT', price: 150}
    ]

    const cheapPredicate = (course: CourseType) => {
        return course.price < 160;
    }

    const cheapCourses = courses.filter(course => course.price < 160)

    expect(cheapCourses.length).toBe(2);
    expect(cheapCourses[0].title).toBe('CSS');
    expect(cheapCourses[1].title).toBe('REACT');
})


test('get only complited tasks', () => {
    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Solt', isDone: false},
        {id: 4, title: 'Sugar', isDone: true},
    ]

    const complitedTask = tasks.filter(task => task.isDone);

    expect(complitedTask.length).toBe(2);
    expect(complitedTask[0].title).toBe('Milk');
    expect(complitedTask[1].title).toBe('Sugar');
})

test('get only uncomplited tasks', () => {
    const tasks = [
        {id: 1, title: 'Bread', isDone: false},
        {id: 2, title: 'Milk', isDone: true},
        {id: 3, title: 'Solt', isDone: false},
        {id: 4, title: 'Sugar', isDone: true},
    ]

    const uncomplited = tasks.filter(task => !task.isDone);

    expect(uncomplited.length).toBe(2);
    expect(uncomplited[0].title).toBe('Bread');
    expect(uncomplited[1].title).toBe('Solt');
})