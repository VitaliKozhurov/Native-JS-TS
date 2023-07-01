import axios from 'axios';
import {type} from 'os';
import {Dispatch} from 'redux';
import {ThunkAction} from 'redux-thunk';

// examples
// В данном примере dispatch не типизируем и можем диспатчить что угодно
const removeTodoListTC_1 = (todoListID: string) => (dispatch: any) => {
    return axios.delete('example.url.com').then((res) => dispatch(1));
};

// Второй пример, достаем тип dispatch из redux !!!
// тип по умолчанию такой объект {  type: T}
const removeTodoListTC_2 = (todoListID: string) => (dispatch: Dispatch) => {
    return axios
        .delete('example.url.com')
        .then((res) => dispatch({type: res}));
};

// Более конкретная типизация dispatch для конкретого action
type ExampleType = {
    type: 'MY-TYPE';
    payload: any;
};

const removeTodoListTC_3 =
    (todoListID: string) => (dispatch: Dispatch<ExampleType>) => {
        return (
            axios
                .delete('example.url.com')
                //.then((res) => dispatch({ type: any })); // будет ошибка
                .then((res) => dispatch({type: 'MY-TYPE', payload: '123'}))
        );
    };

// Более конкретная типизация dispatch для всех actions редьюсера
type FirstActionType = {
    type: 'FIRST-ACTION-TYPE';
    payload: any;
};
type SecondActionType = {
    type: 'SECOND-ACTION-TYPE';
    payload: any;
};
type ThirdActionType = {
    type: 'THIRD-ACTION-TYPE';
    payload: any;
};
type ActionsType = FirstActionType | SecondActionType | ThirdActionType;

// теперь можно диспачить любой из трех action
const removeTodoListTC_4 =
    (todoListID: string) => (dispatch: Dispatch<ActionsType>) => {
        return (
            axios
                .delete('example.url.com')
                //.then((res) => dispatch({ type: any })); // будет ошибка
                .then((res) =>
                    dispatch({type: 'FIRST-ACTION-TYPE', payload: '123'})
                )
        );
    };

// !!! Но если внутри санки диспатчить другую санку это приведет к ошибке
// Необходима другая типизация для dispatch

const getTodoListTC_1 =
    (todoListID: string) => (dispatch: Dispatch<ActionsType>) => {
        return axios
            .post('example.url.com' + todoListID)
            .then((res) =>
                dispatch({type: 'SECOND-ACTION-TYPE', payload: res})
            );
    };

// const addTodoListTC_1 = () => (dispatch: Dispatch<ActionsType>) => {
//     return axios
//         .post('example.url.com')
//         .then((res) => dispatch(getTodoListTC_1(res))); // ошибка нелбзя диспатчить функцию
//     // только объект с полем type
// };


// type ThunkAction<ReturnType, State, ExtraThunkArg, BasicAction extends Action> = (dispatch: ThunkDispatch<State, ExtraThunkArg, BasicAction>, getState: () => State, extraArgument: ExtraThunkArg) => ReturnType;
// ReturnType то что санка возвращает --- void (ничего)
// State тип нашего стейта
// Extra arguments -- unknown -- неизвестно
// Basic action -- все экшены приложения
// объекты с полем type
type AppState = any;    // -- state app
type AppWithThunkType = ThunkAction<void, AppState, unknown, ActionsType>;
// Теперь типизируем только thunk creator
const getTodoListTC_2 =
    (todoListID: string): AppWithThunkType => (dispatch) => {
        return axios
            .post('example.url.com' + todoListID)
            .then((res) =>
                dispatch({type: 'SECOND-ACTION-TYPE', payload: res})
            );
    };

const addTodoListTC_2 = (): AppWithThunkType => (dispatch) => {
    return axios
        .post('example.url.com')
        .then((res) => dispatch(getTodoListTC_2('id_todo'))); // ошибка нелбзя диспатчить функцию
    // только объект с полем type
};


// ======================== //
// type for redux-toolkit
// типизация стейта выглядит следующим образом
// type RootState = ReturnType<typeof store.getState>
// type AppDispatch = typeof store.dispatch

// кастомный dispatch с типизацией
// const AppDispatch = ()=>useDispatch<AppDispatch>()

// кастомный селект с типизацией
// TypeUseSelectorHook взят из react-redux
// const useAppSelector:TypeUseSelectorHook<RootState> = useSelector


// ========== REDUX ================ /

// type RootStateType = ReturnType<typeof store.getState>


const getTodosReduxTC_1 = (todoListID: string) => (dispatch: Dispatch/*(из redux)*/) => {
    axios.get('example.com')
        .then(res => dispatch({type: res}))
}

// типизация для санок когда надо диспатчить санку
// type AppThunk = ThunkAction<void, AppState, unknown, ActionsType>;

// типизация dispatch
// здесь мы используем ThunkDispatch из redux-thunk
// указываем туда тип стейта, неизвестный тип
// и тип экшенов для редьюсеров
// type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>








