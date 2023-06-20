import { ChangeEvent, useEffect, useRef, useState } from "react";

export const UseRef = () => {
    // для хранения одного и того же значения, которое будет постоянно в течении всего жизненного цикла компоненты
    // оно не будет меняться при каждом ререндере
    // обычно используется для того доступа к DOM элементам
    // так же можно запомнить какое-то значение

    // Создаем ссылку и типизируем ее как инпут
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        // Здесь мы указываем что необходимо при отрисовке компоненты,
        // обратиться к инпуту и вызвать у него метод фокус
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const [name, setName] = useState<string>("");
    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
    };

    return (
        <div>
            <h1>It is UseRef</h1>
            <h2>Hello, {name}</h2>
            <div>
                <input
                    ref={inputRef} // Вешаем ссылку на инпут
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                />
            </div>
        </div>
    );
};
