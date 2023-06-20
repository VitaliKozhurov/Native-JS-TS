import { FC, memo, useCallback, useState } from "react";

export const UseCallback = () => {
    // useCallback возвращает мимоизированную версию функции, которая изменяется, если только меняется одно из значений зависимостей
    // ссылка на эту функцию не будет меняться во время ререндеров

    const [visibility, setVisibility] = useState<boolean>(true);

    // Оборачиваем в useCallback
    const toggleClick = useCallback(() => {
        setVisibility((prevState) => !prevState);
    }, [setVisibility]);

    // Но чтобы Button не ренедерился необходимо обернуть его в memo
    // будет происходить сравнение пропсов, при использовании useCallback ссылка будет одинаковая и перерендера не будет
    return (
        <div>
            {visibility && <h1>Toggle component</h1>}
            <Button callback={toggleClick} />
        </div>
    );
};

const Button: FC<{ callback: () => void }> = memo(({ callback }) => {
    console.log("render");
    return (
        <div>
            <button onClick={callback}>Toggle</button>
        </div>
    );
});
