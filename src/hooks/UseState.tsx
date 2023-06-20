import { useState } from "react";

const getInitialState = () => {
    console.log("Call function");
    return false;
};

export const UseState = () => {
    // useState хранит внутреннее состояние компоненты, которое будет храниться между ререндерами
    // вызов useState возвращает массив из двух элементов
    // текущее состояние и функцию для его обновления

    // useState может принимать как инициализационное значение, так и функцию
    // const [state, setState] = useState<boolean>(false);

    // При такой записи функция будет вызываться каждый раз, что не выгодно если там тяжелые вычисления
    // const initState = getInitialState();
    // const [state, setState] = useState<boolean>(initState);

    // При такой записи функция будет вызываться только один раз при первоначальном рендеренге, но функцию вызывать не надо
    const [state, setState] = useState<boolean>(getInitialState);

    const handleClick = () => {
        // setState(!state) может принимать значение
        setState((prevState) => !prevState); // или функцию колбек которая принимает предыдущее состояние и возвращает новоесостояние
    };

    return (
        <div>
            <h1>It is UseState hook</h1>
            <h2>What is React?</h2>
            {state && <p>It is JS library for building user interface</p>}
            <button onClick={handleClick}>Show</button>
        </div>
    );
};
