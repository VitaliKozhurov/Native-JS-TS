import { useEffect, useRef, useState } from "react";

export const UseRef_2 = () => {
    const [counter, setCounter] = useState<number>(0);
    /* const [intervalID, setIntervalID] = useState<number | undefined>(undefined); */

    let intervalRef = useRef<number | undefined>();

    useEffect(() => {
        intervalRef.current = window.setInterval(() => {
            setCounter((counter) => counter + 1);
        }, 1000);

        return () => clearInterval(intervalRef.current);
    }, []);

    const handleClick = () => {
        clearInterval(intervalRef.current);
    };

    return (
        <div>
            <h1>Use Ref remember value beetween render</h1>
            <h2>Timer value: {counter}</h2>
            <div>
                <button onClick={handleClick}>Cancel</button>
            </div>
        </div>
    );
};
