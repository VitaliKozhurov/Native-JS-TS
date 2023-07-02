// local storage для хранения данных в браузере
// срок хранения неограничен, пока сами не решите удалить данные

// методы local storage
// getItem -- достать значение
// setItem -- установить значение по ключу
// removeItem -- удалить значение по ключу
// clear -- очистить local storage

// для сохранения данных в local storage

const setToLocalStorage = () => {
    const valueForLS = [
        {key1: '123'},
        {key2: '456'}
    ]
    // В LS можно сетать только строку!!!
    const dataToString = JSON.stringify(valueForLS)

    localStorage.setItem('local_storage_key', dataToString)
}

const getFromLocalStorage = () => {
    // данные из LS достаются в строковом формате
    const dateFromLS = localStorage.getItem('local_storage_key');
    // проверка что данные из LS достали
    if (dateFromLS) {
        return JSON.parse(dateFromLS)
    }

}

const removeItemFromLS = (key: string) => {
    localStorage.removeItem(key)
}

const clearLocalStorage = () => {
    localStorage.clear()
}


// ===== Работа в Redux с LS ===== //

const todoLists = [
    {title: 'Todo_1'},
    {title: 'Todo_2'}
]

// Подписываемся на изменение стора, и при его изменении сетаем в LS измененное значение

// Можно сетать определенное значение или весь стейт сразу

// store.subscribe(()=>{
// localStorage.setItem('todos', JSON.stringify(todoLists))
// })

// store.subscribe(()=>{
// localStorage.setItem('app-state', JSON.stringify(store.getState())
// })

const preloadedState = localStorage.getItem('todos');
if (preloadedState) {

    // для того чтобы засетать значение из LS в стейт redux необходимо передать вторым параметром preloadedState (в которое попадает значение из LS)
// const store = createStore(rootReducer, preloadedState, applyMiddleware(thunk))

}

// Ссылка на статью
// https://medium.com/@jrcreencia/persisting-redux-state-to-local-storage-f81eb0b90e7e