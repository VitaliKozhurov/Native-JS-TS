import axios from "axios";
import { type } from "os";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

// examples
// В данном примере dispatch не типизируем и можем диспатчить что угодно
const removeTodoListTC_1 = (todoListID: string) => (dispatch: any) => {
    return axios.delete("example.url.com").then((res) => dispatch(1));
};

// Второй пример, достаем тип dispatch из redux !!!
// тип по умолчанию такой объект {  type: T}
const removeTodoListTC_2 = (todoListID: string) => (dispatch: Dispatch) => {
    return axios
        .delete("example.url.com")
        .then((res) => dispatch({ type: res }));
};

// Более конкретная типизация dispatch для конкретого action
type ExampleType = {
    type: "MY-TYPE";
    payload: any;
};

const removeTodoListTC_3 =
    (todoListID: string) => (dispatch: Dispatch<ExampleType>) => {
        return (
            axios
                .delete("example.url.com")
                //.then((res) => dispatch({ type: any })); // будет ошибка
                .then((res) => dispatch({ type: "MY-TYPE", payload: "123" }))
        );
    };

// Более конкретная типизация dispatch для всех actions редьюсера
type FirstActionType = {
    type: "FIRST-ACTION-TYPE";
    payload: any;
};
type SecondActionType = {
    type: "SECOND-ACTION-TYPE";
    payload: any;
};
type ThirdActionType = {
    type: "THIRD-ACTION-TYPE";
    payload: any;
};
type ActionsType = FirstActionType | SecondActionType | ThirdActionType;

// теперь можно диспачить любой из трех action
const removeTodoListTC_4 =
    (todoListID: string) => (dispatch: Dispatch<ActionsType>) => {
        return (
            axios
                .delete("example.url.com")
                //.then((res) => dispatch({ type: any })); // будет ошибка
                .then((res) =>
                    dispatch({ type: "FIRST-ACTION-TYPE", payload: "123" })
                )
        );
    };

// !!! Но если внутри санки диспатчить другую санку это приведет к ошибке
// Необходима другая типизация для dispatch

const getTodoListTC_1 =
    (todoListID: string) => (dispatch: Dispatch<ActionsType>) => {
        return axios
            .post("example.url.com" + todoListID)
            .then((res) =>
                dispatch({ type: "SECOND-ACTION-TYPE", payload: res })
            );
    };

const addTodoListTC_1 = () => (dispatch: Dispatch<ActionsType>) => {
    return axios
        .post("example.url.com")
        .then((res) => dispatch(getTodoListTC_1(res))); // ошибка нелбзя диспатчить функцию
    // только объект с полем type
};
// type ThunkAction<ReturnType, State, ExtraThunkArg, BasicAction extends Action> = (dispatch: ThunkDispatch<State, ExtraThunkArg, BasicAction>, getState: () => State, extraArgument: ExtraThunkArg) => ReturnType;
// ReturnType то что санка возвращает --- void (ничего)
type AppWithThunType = ThunkAction<>;

const getTodoListTC_2 =
    (todoListID: string) => (dispatch: Dispatch<ActionsType>) => {
        return axios
            .post("example.url.com" + todoListID)
            .then((res) =>
                dispatch({ type: "SECOND-ACTION-TYPE", payload: res })
            );
    };

const addTodoListTC_2 = () => (dispatch: Dispatch<ActionsType>) => {
    return axios
        .post("example.url.com")
        .then((res) => dispatch(getTodoListTC_2(res))); // ошибка нелбзя диспатчить функцию
    // только объект с полем type
};
