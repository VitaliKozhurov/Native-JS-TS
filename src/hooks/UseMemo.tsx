import { FC, memo, useMemo, useState } from "react";

const hardCalculate = () => {
    let res = 0;

    for (let i = 0; i < 2000000000; i++) {
        res += i ** 2;
    }
    return res;
};

export const UseMemo = () => {
    // для возврата мемоизированного значения результата вызова функции

    // Если не кэшировать результат выполнения этой функции то все приложение будет виснуть при каждом рендере
    const value = useMemo(() => hardCalculate(), []);
    const [number, setNumber] = useState<number>(0);

    const increaseNum = () => {
        setNumber(() => number + 1);
    };
    return (
        <div>
            <h1>It is Use Memo</h1>
            <h2>Number: {number}</h2>
            <div>
                <button onClick={increaseNum}>Inc value</button>
            </div>
            <HardCalculate result={value} />
        </div>
    );
};

const HardCalculate: FC<{ result: number }> = memo(({ result }) => {
    console.log("render");
    return (
        <div>
            <h2>Result of hard calculate: {result}</h2>
        </div>
    );
});
