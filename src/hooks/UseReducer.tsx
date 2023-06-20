import { useReducer } from "react";

const reducer = (state: { count: number }, action: { type: string }) => {
    switch (action.type) {
        case "increase":
            return { count: state.count + 1 };
        case "decrease":
            return { count: state.count - 1 };
        case "reset":
            return { count: 0 };

        default:
            return state;
    }
};

export const UseReducer = () => {
    // useReducer возврощает состояние и dispatch
    // редьюсер это функция, которая в зависимости от переданного action изменяет состояние
    // action это объект, в котором тип экшена и данные(могут и не быть)
    // dispatch отправляет этот экшен в редьюсер
    const init = () => ({ count: 50 }); // функция для установки начального значения (вызывается только один раз),
    // если она передается, то второй параметр игнорируется
    const [state, dispatch] = useReducer(reducer, { count: 0 }, init); // параметры reducer - функция, initialArg - начение для вычисления начального состояния
    // init - третий необязательный параметр это функция, которая возвращает начальное состояние

    const inc = () => dispatch({ type: "increase" });
    const decr = () => dispatch({ type: "decrease" });
    const res = () => dispatch({ type: "reset" });

    return (
        <div>
            <h1>It is Use Reducer</h1>
            <h2>Counter with reducer: {state.count}</h2>
            <div>
                <button onClick={inc}>Increase value</button>
            </div>
            <div>
                <button onClick={decr}>Decrease value</button>
            </div>
            <div>
                <button onClick={res}>Reset value</button>
            </div>
        </div>
    );
};
